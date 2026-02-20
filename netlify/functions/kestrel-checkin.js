import { createClient } from '@supabase/supabase-js';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

const supabase = process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
  : null;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

async function verifyAdmin(req) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) return { error: 'Unauthorized', status: 401 };
  if (!supabase) return { error: 'Server not configured', status: 500 };

  const token = authHeader.slice(7);
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) return { error: 'Invalid token', status: 401 };
  if (user.email !== ADMIN_EMAIL) return { error: 'Forbidden', status: 403 };

  return { user };
}

const REQUIRED_FIELDS = ['kestrel_id', 'operator', 'project', 'summary'];

export default async (req) => {
  if (!supabase) {
    return json({ error: 'Server not configured' }, 500);
  }

  // POST — create a check-in (no auth required)
  if (req.method === 'POST') {
    try {
      const body = await req.json();

      const missing = REQUIRED_FIELDS.filter(f => !body[f] || !String(body[f]).trim());
      if (missing.length > 0) {
        return json({ error: 'Missing required fields.', missing }, 400);
      }

      const row = {
        kestrel_id: String(body.kestrel_id).trim(),
        operator: String(body.operator).trim(),
        project: String(body.project).trim(),
        summary: String(body.summary).trim(),
        commit_sha: body.commit_sha ? String(body.commit_sha).trim() : null,
        branch: body.branch ? String(body.branch).trim() : null,
        status: body.status ? String(body.status).trim() : 'complete',
      };

      const { data, error } = await supabase
        .from('kestrel_checkins')
        .insert(row)
        .select()
        .single();

      if (error) {
        console.error('Kestrel check-in insert error:', error);
        return json({ error: 'Failed to store check-in.' }, 500);
      }

      return json({ checkin: data }, 201);
    } catch (err) {
      console.error('Kestrel check-in error:', err);
      return json({ error: 'Something went wrong.' }, 500);
    }
  }

  // GET — list check-ins (admin auth required)
  if (req.method === 'GET') {
    const auth = await verifyAdmin(req);
    if (auth.error) return json({ error: auth.error }, auth.status);

    const url = new URL(req.url);
    const project = url.searchParams.get('project');
    const kestrelId = url.searchParams.get('kestrel_id');
    const limit = parseInt(url.searchParams.get('limit') || '50', 10);

    let query = supabase
      .from('kestrel_checkins')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(Math.min(limit, 200));

    if (project) query = query.eq('project', project);
    if (kestrelId) query = query.eq('kestrel_id', kestrelId);

    const { data, error } = await query;
    if (error) {
      console.error('Kestrel check-ins fetch error:', error);
      return json({ error: 'Failed to fetch check-ins.' }, 500);
    }

    return json({ checkins: data });
  }

  return json({ error: 'Method not allowed' }, 405);
};

import { useUser } from '../../contexts/UserContext';

export function SignInButton() {
  const { user, isLoggedIn, signIn, signOut } = useUser();

  if (isLoggedIn) {
    return (
      <div className="ovl-user-menu">
        <span className="ovl-user-avatar">{user.name.charAt(0)}</span>
        <button className="ovl-signout-btn" onClick={signOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <button className="ovl-signin-btn" onClick={signIn}>Sign In</button>
  );
}

export function SignInPrompt() {
  const { isLoggedIn, signIn } = useUser();

  if (isLoggedIn) return null;

  return (
    <div className="ovl-signin-prompt">
      <p className="ovl-signin-prompt-text">
        Sign in to track your progress across lessons.
      </p>
      <button className="ovl-signin-prompt-btn" onClick={signIn}>
        Sign in with Google
      </button>
    </div>
  );
}

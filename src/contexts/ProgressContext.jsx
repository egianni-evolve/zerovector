import { createContext, useContext, useState, useCallback } from 'react';
import { useUser } from './UserContext';

const ProgressContext = createContext(null);
const STORAGE_KEY = 'ovl-progress';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { completed: [] };
  } catch {
    return { completed: [] };
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function ProgressProvider({ children }) {
  const { isLoggedIn } = useUser();
  const [progress, setProgress] = useState(loadProgress);

  const markComplete = useCallback((levelSlug, lessonSlug) => {
    const key = `${levelSlug}/${lessonSlug}`;
    setProgress(prev => {
      if (prev.completed.includes(key)) return prev;
      const next = { ...prev, completed: [...prev.completed, key] };
      saveProgress(next);
      return next;
    });
  }, []);

  const markIncomplete = useCallback((levelSlug, lessonSlug) => {
    const key = `${levelSlug}/${lessonSlug}`;
    setProgress(prev => {
      const next = { ...prev, completed: prev.completed.filter(k => k !== key) };
      saveProgress(next);
      return next;
    });
  }, []);

  const isComplete = useCallback((levelSlug, lessonSlug) => {
    return progress.completed.includes(`${levelSlug}/${lessonSlug}`);
  }, [progress]);

  const getLevelProgress = useCallback((levelSlug, lessons) => {
    const total = lessons.length;
    const done = lessons.filter(l => progress.completed.includes(`${levelSlug}/${l.slug}`)).length;
    return { done, total, percent: total > 0 ? Math.round((done / total) * 100) : 0 };
  }, [progress]);

  return (
    <ProgressContext.Provider value={{
      progress,
      markComplete,
      markIncomplete,
      isComplete,
      getLevelProgress,
      enabled: isLoggedIn,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}

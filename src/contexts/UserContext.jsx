import { createContext, useContext, useState, useCallback } from 'react';

const UserContext = createContext(null);

const MOCK_USER = {
  name: 'Open Vector Learner',
  email: 'learner@example.com',
  avatar: null,
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('ovl-user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const signIn = useCallback(() => {
    // Stub: future — replace with Google OAuth flow
    setUser(MOCK_USER);
    localStorage.setItem('ovl-user', JSON.stringify(MOCK_USER));
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    localStorage.removeItem('ovl-user');
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoggedIn: !!user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}

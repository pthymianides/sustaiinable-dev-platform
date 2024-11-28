import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

export function useAuth() {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  const hasRole = useCallback((role: string) => {
    return user?.['https://ecoventure.com/roles']?.includes(role);
  }, [user]);

  const canEdit = useCallback(() => {
    return hasRole('admin') || hasRole('editor');
  }, [hasRole]);

  return {
    isAuthenticated,
    user,
    getAccessTokenSilently,
    hasRole,
    canEdit,
  };
}
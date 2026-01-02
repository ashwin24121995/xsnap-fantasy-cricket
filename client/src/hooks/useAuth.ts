import { trpc } from "@/lib/trpc";

/**
 * Custom hook to get current user authentication state
 * Returns user data if logged in, null if not logged in
 */
export function useAuth() {
  const { data: user, isLoading, error } = trpc.auth.me.useQuery(undefined, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    user: user || null,
    isLoading,
    isAuthenticated: !!user,
    error,
  };
}

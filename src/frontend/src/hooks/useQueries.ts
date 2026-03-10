import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useCreateUser() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, email }: { name: string; email: string }) => {
      if (!actor) throw new Error("Actor not initialized");
      try {
        return await actor.createUser(name, email);
      } catch (err) {
        // Rethrow with original message preserved
        const msg = err instanceof Error ? err.message : String(err);
        throw new Error(msg);
      }
    },
    retry: 2,
    retryDelay: 1500,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["analytics"] });
      if (actor) {
        actor.incrementCompletedOptIns();
      }
    },
  });
}

export function useIncrementSalesPageViews() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Actor not initialized");
      return await actor.incrementSalesPageViews();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["analytics"] });
    },
  });
}

export function useGetAnalytics() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ["analytics"],
    queryFn: async () => {
      if (!actor) return null;
      return await actor.getAnalytics();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllUsers() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getAllUsers();
    },
    enabled: !!actor && !isFetching,
  });
}

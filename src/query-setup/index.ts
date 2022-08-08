import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import {MutationCache, QueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

export const queryClient = new QueryClient({
  // configure global cache callbacks to show toast notifications
  mutationCache: new MutationCache({
    onSuccess: (data) => {
      toast.success('Sent successfully');
    },
    onError: (error) => {
      toast.error('Error');
    },
  }),
});

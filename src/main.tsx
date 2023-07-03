import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, MutationCache, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const appQueryClient: QueryClient = new QueryClient({
  mutationCache: new MutationCache({
    onSuccess: async (data, variable, context, mutation) => {
      if (Array.isArray(mutation.meta?.invalidates)) {
        return appQueryClient.invalidateQueries({
          queryKey: mutation.meta?.invalidates,
        });
      }
    },
  }),

  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={appQueryClient}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  ,
)

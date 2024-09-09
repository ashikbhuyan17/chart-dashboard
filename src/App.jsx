import { BrowserRouter } from 'react-router-dom';
import BaseRoutes from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <BaseRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Search from './pages/Search';
import CreatePost from './pages/CreatePost';
import Settings from './pages/Settings';
import UserProfile from './pages/UserProfile';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="createPost" element={<CreatePost />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="createAccount" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;



import { Navigate, Route, Routes } from 'react-router-dom';
import { TodoRoutes } from '../app/routes/TodoRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { useCheckAuth } from '../hooks';

import { CheckingAuth } from '../ui/components/CheckingAuth';

export const AppRouter = () => {
  

  const {status} = useCheckAuth()

  if (status === 'checking') {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      {status === 'authenticated' ? 
        <Route path="/*" element={<TodoRoutes />} />
       : 
        <Route path="auth/*" element={<AuthRoutes />} />
      }
  <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

{
  /* <Routes>
{status === 'authenticated' ? (
  <Route path="/" element={<TodoRoutes />} />
) : (
  <Route path="/auth/*" element={<AuthRoutes />} />
)}
</Routes> */
}

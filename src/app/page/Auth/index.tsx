import { URL } from 'constants/url';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'store';
import { selectUser } from 'store/authSlice';
import Login from './Login';
import Singup from './Singup';
import { ENUM_USER_ROLE } from 'model';

function Auth() {
  const user = useAppSelector(selectUser);
  const [page, setPage] = useState<'login' | 'signup'>('login');
  const navigatedUrl = user?.role === ENUM_USER_ROLE.admin ? URL.admin.dashboard : URL.home;

  return (
    <>
      {user?.role ? (
        <Navigate to={navigatedUrl} />
      ) : (
        <div className="h-[100vh] flex justify-center items-center container-login100">
          {page === 'login' ? (
            <Login onSignup={() => setPage('signup')} />
          ) : (
            <Singup onLogin={() => setPage('login')} />
          )}
        </div>
      )}
    </>
  );
}

export default Auth;

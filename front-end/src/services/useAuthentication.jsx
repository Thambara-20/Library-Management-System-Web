import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

export function useAuthentication() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token-x-auth');

    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded)
      setUser(decoded);
    }
  }, []);

  return { user, setUser };
}

export default {useAuthentication};

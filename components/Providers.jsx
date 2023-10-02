// 'use client';
// import { SessionProvider } from 'next-auth/react';

// const AuthProvider = ({ children, session }) => {
//   return <SessionProvider session={session}>{children}</SessionProvider>;
// };

// export { AuthProvider };
'use client';
import { SessionProvider } from 'next-auth/react';

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export { AuthProvider };

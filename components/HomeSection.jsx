// 'use client';

// import styles from '../styles/Home.module.css';
// import { getSession, useSession, signOut } from 'next-auth/react';
// import { User } from './User';
// import { Guest } from './Guest';
// import { FallBackLoader } from './Loader';

// function HomeSection() {
//   const { data: session, status } = useSession();

//   function handleSignOut() {
//     signOut();
//   }

//   if (status === 'loading') {
//     return <FallBackLoader />;
//   }

//   return (
//     <div className={styles.container}>
//       {session ? (
//         <User session={session} handleSignOut={handleSignOut} />
//       ) : (
//         <Guest />
//       )}
//     </div>
//   );
// }

// export async function getServerSideProps({ req }) {
//   const session = await getSession({ req });

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }

// export { HomeSection };
'use client';

import styles from '../styles/Home.module.css';
import {
  // getSession,
  // useSession,
  signOut,
} from 'next-auth/react';
import { getServerSession } from 'next-auth/react';
import { Users } from './UserInfo';
import { Guest } from './Guest';
import { FallBackLoader } from './Loader';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

async function HomeSection() {
  const { data: session, status } = await getServerSession(authOptions);

  if (session) redirect('/login');

  function handleSignOut() {
    signOut();
  }

  if (status === 'loading') {
    return <FallBackLoader />;
  }

  return (
    <div className={styles.container}>{session ? <Users /> : <Guest />}</div>
  );
}

export { HomeSection };

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

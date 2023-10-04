'use client';

import styles from '../styles/Home.module.css';
import { getSession, useSession, signOut } from 'next-auth/react';
import { UserInfo } from './UserInfo';
import { Guest } from './Guest';
import { FallBackLoader } from './Loader';

function HomeSection() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <FallBackLoader />;
  }

  return (
    <div className={styles.container}>{session ? <UserInfo /> : <Guest />}</div>
  );
}

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

export { HomeSection };

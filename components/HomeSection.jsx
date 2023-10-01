'use client';

import styles from '../styles/Home.module.css';
import { getSession, useSession, signOut } from 'next-auth/react';
import { User } from './User';
import { Guest } from './Guest';

function HomeSection() {
  const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  }

  return (
    <div className={styles.container}>
      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
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

'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import styles from '../styles/Form.module.css';

function UserInfo() {
  const { data: session } = useSession();

  return (
    <main className="container mx-auto text-center py-20 h-full justify-between flex flex-col">
      <div className="flex">
        <h3 className="text-4xl font-bold">Authorize User Homepage</h3>
      </div>

      <div className="flex flex-col">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className={styles.button}>
          <button type="button" onClick={() => signOut()}>
            Login
          </button>
        </div>

        <div className="flex justify-center">
          <Link href={'/profile'} className="w-full">
            <p className={styles.button}>Profile Page</p>
          </Link>
        </div>
      </div>
    </main>
  );
}

export { UserInfo };

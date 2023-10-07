'use client';

import Link from 'next/link';
import styles from '../styles/Form.module.css';
// import { useRouter } from 'next/navigation';
// import { useSession } from 'next-auth/react';

const UserProfile = () => {
  return (
    <main className="container mx-auto text-center items-center py-20 h-full justify-between flex flex-col gap-6">
      <div className="flex">
        <h3 className="text-4xl font-bold font-dancing">
          Make your most important trip
        </h3>
      </div>
      <div>
        <p>
          &quot;I am not the same, having seen the moon shine on the other side
          of the world.&quot; - Mary Anne Radmacher
        </p>
      </div>

      <Link href={'/'} className="w-full">
        <p
          className={`${styles.button} w-[300px] sm:w-full mx-auto my-auto md:m-0`}
        >
          Go back
        </p>
      </Link>
    </main>
  );
};

export { UserProfile };

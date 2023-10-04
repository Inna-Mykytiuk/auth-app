import Link from 'next/link';
import styles from '../styles/Form.module.css';

function Guest() {
  return (
    <main className="container mx-auto text-center py-20 h-full justify-between flex flex-col">
      <div className="flex">
        <h3 className="text-4xl font-bold">Welcome to our community!</h3>
      </div>

      <div className="flex justify-center">
        <Link href={'/login'} className=" w-full">
          <p className={styles.button}>Explore</p>
        </Link>
      </div>
    </main>
  );
}

export { Guest };

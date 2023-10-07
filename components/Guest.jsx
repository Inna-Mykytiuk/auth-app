// Guest
import Link from 'next/link';
import styles from '../styles/Form.module.css';

function Guest() {
  return (
    <main className="mx-auto text-center py-16 lg:py-20 h-full justify-between flex flex-col gap-6">
      <div className="flex items-center justify-center">
        <h3 className="text-4xl font-bold font-dancing">Hello, traveler!</h3>
      </div>
      <div>
        <p>
          Welcome to our community of wanderers! We&apos;re thrilled to have you
          here. Soon, you&apos;ll have the opportunity to discover more about
          exciting journeys and the experiences of our participants. Inspiration
          awaits you around every corner!
        </p>
        <p className="hidden md:display-flex">
          If you&apos;re ready to embark on your adventure, press the
          &quot;Explore&quot; button below and immerse yourself in the world of
          impressions and possibilities.
        </p>
      </div>

      <div className="flex">
        <Link href={'/login'} className="w-full">
          <p className={styles.button}>Explore</p>
        </Link>
      </div>
    </main>
  );
}

export { Guest };

// Authorize User
import Link from 'next/link';

function User({ session, handleSignOut }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>

      <div className="details">
        <h5>{session.user.name}</h5>
      </div>

      <button
        className="flex mt-5 px-10 py-1 rounded-sm bg-indigo-500"
        onClick={handleSignOut}
      >
        Sign Out
      </button>

      <div className="flex justify-center">
        <Link href={'/profile'}>
          <p className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Profile Page
          </p>
        </Link>
      </div>
    </main>
  );
}

export { User };

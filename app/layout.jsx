import './globals.css';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Home page',
  description: 'Home page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-400">
        <main className=" bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
          <div>Images</div>

          <div className="right flex flex-col justify-evenly bg-gray-500">
            <div className="text-center py-10">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}

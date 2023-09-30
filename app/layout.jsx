import './globals.css';

export const metadata = {
  title: 'Home page',
  description: 'Home page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-400">
        <main className=" bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
          {children}
        </main>
      </body>
    </html>
  );
}

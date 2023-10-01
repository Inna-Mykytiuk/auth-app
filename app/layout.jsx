import './globals.css';
import { ImageSection } from '@/components/ImageSection';
import { Providers } from '@/components/Providers';

export const metadata = {
  title: 'Home page',
  description: 'Home page',
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className="bg-blue-400">
        <Providers session={session}>
          <main className=" bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
            <ImageSection />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

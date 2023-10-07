import './globals.css';
import { ImageSection } from '@/components/ImageSection';
import { AuthProvider } from '@/components/Providers';

export const metadata = {
  title: 'Home page',
  description: 'Home page',
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className="bg-blue-400">
        <AuthProvider>
          <main className=" bg-slate-50 rounded-md w-4/5 sm:w-3/5 sm:h-3/4 sm:grid sm:grid-cols-2">
            <ImageSection className="display-none" />
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}

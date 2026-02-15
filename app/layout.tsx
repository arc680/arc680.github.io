import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'arc680',
  description: 'Personal website for arc680',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}

import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Eneide | Terapia Quântica e Despertar da Consciência',
  description: 'Transforme sua dor em força. Um espaço seguro para cura transgeracional e despertar espiritual.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${cormorant.variable}`}>
      <body suppressHydrationWarning className="bg-[#FDFCFB] text-[#2D2926] antialiased">
        {children}
      </body>
    </html>
  );
}

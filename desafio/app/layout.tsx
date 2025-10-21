import type { Metadata } from "next";
import { Roboto as RobotoFont, Roboto_Mono as RobotoMonoFont } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


const roboto = RobotoFont({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoMono = RobotoMonoFont({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata: Metadata = {
  title: "Lacrei Saúde - Encontre seu profissional",
  description: "Conecte-se com profissionais de saúde de forma rápida, segura e confiável.",
  keywords: ["saúde", "profissionais de saúde", "médicos", "dentistas", "psicólogos", "Lacrei"],
  authors: [{ name: "Rui Gomes" }],
  creator: "Gomestek",
  publisher: "Lacrei Saúde",
  openGraph: {
    title: "Lacrei Saúde - Encontre seu profissional",
    description: "Conecte-se com profissionais de saúde de forma rápida, segura e confiável.",
    url: "https://desafio-lacrei-saude-alpha.vercel.app",
    siteName: "Lacrei Saúde",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lacrei Saúde",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lacrei Saúde - Encontre seu profissional",
    description: "Conecte-se com profissionais de saúde de forma rápida, segura e confiável.",
    images: ["/assets/og-image.png"],
    creator: "@RuiGomes",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

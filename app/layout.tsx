import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06121f",
  colorScheme: "dark",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = `${protocol}://${host}`;

  return {
    metadataBase: new URL(baseUrl),
    title: "Sergio Fica | Líder Técnico · Tech Lead",
    description:
      "Líder Técnico con más de 13 años en desarrollo de software, arquitectura, integraciones, delivery y producción para banca, medios de pago y servicios críticos.",
    keywords: [
      "Sergio Fica",
      "Líder Técnico",
      "Tech Lead",
      "Java",
      "Spring Boot",
      "Arquitectura de software",
      "Integraciones",
      "Medios de pago",
      "Chile",
    ],
    authors: [{ name: "Sergio Fica" }],
    creator: "Sergio Fica",
    openGraph: {
      type: "website",
      locale: "es_CL",
      url: baseUrl,
      siteName: "Sergio Fica · Líder Técnico",
      title: "Sergio Fica | Líder Técnico · Tech Lead",
      description: "Conecto arquitectura, equipos y producción para convertir complejidad técnica en entregas confiables.",
      images: [{ url: `${baseUrl}/og.png`, width: 1536, height: 1024, alt: "Sergio Fica, Líder Técnico y Tech Lead" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Sergio Fica | Líder Técnico · Tech Lead",
      description: "Arquitectura · Equipos · Integraciones · Producción",
      images: [`${baseUrl}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}

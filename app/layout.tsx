import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f6f2",
  colorScheme: "light",
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
    },
    twitter: {
      card: "summary",
      title: "Sergio Fica | Líder Técnico · Tech Lead",
      description: "Arquitectura · Equipos · Integraciones · Producción",
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

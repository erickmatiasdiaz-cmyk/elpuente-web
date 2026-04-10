// ========================================
// LAYOUT PRINCIPAL DE LA APLICACIÓN
// Este archivo envuelve toda la aplicación
// Aquí definimos metadata SEO base
// ========================================

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

// Metadata SEO básica (luego la mejoramos)
export const metadata: Metadata = {
  title: "El Puente | Movimiento de Tierra y Maquinaria",
  description:
    "Servicios de movimiento de tierra y arriendo de maquinaria en la Región Metropolitana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="font-sans">
        {/*
          children renderiza todo el contenido
          de cada página dentro del layout
        */}
        {children}
      </body>
    </html>
  );
}
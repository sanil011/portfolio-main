import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@fontsource-variable/inter';
import Navbar from "@/components/layout/navbar";
import React from 'react';
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react"
// Supports weights 100-900
import '@fontsource-variable/inter';
import '@fontsource/poppins';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        >
        <Analytics/>
      <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

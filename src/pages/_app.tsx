import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@fontsource-variable/inter';
import Navbar from "@/components/layout/navbar";
import React from 'react';
import { ThemeProvider } from "@/components/theme-provider";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
      <Navbar />
      <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

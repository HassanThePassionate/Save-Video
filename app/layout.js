"use client";

import "../style/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// Initialize Font
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Styles
const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    flex: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <div style={styles.root}>
                <Navbar />
                <div style={styles.content}>{children}</div>
                <Footer />
              </div>
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}

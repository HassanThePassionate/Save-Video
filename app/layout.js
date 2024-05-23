"use client";
import "../style/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/Footer";
import { Provider } from "react-redux";
import { store, pr, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
    <html lang='en' className='light'>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
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

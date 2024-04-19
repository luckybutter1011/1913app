'use client'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { StoreProvider, store } from "@/components/jotai/store";
import { DevTools } from 'jotai-devtools';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <>
          <StoreProvider>
            <Navbar />
            {children}
            <Footer/>
            <DevTools store={store}/>
          </StoreProvider>
        </>
  );
}

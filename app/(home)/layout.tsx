'use client'
import '@rainbow-me/rainbowkit/styles.css';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { StoreProvider, store } from "@/components/jotai/store";
import { DevTools } from 'jotai-devtools';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
const config = getDefaultConfig({
  appName: '$1913 project',
  projectId: '495145f374ec1d97a3af135251c7eaf6',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <StoreProvider>
              <Navbar />
              {children}
              <Footer />
              <DevTools store={store} />
            </StoreProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}

'use client'
import '@rainbow-me/rainbowkit/styles.css';
import NavbarPage from "@/components/navbar";
import Footer from "@/components/footer";
import { StoreProvider, store } from "@/components/jotai/store";
import { DevTools } from 'jotai-devtools';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import dynamic from 'next/dynamic';

// MoonpayProvider is a dynamic import, so it won't be bundled in the SSR
const MoonPayProvider = dynamic(
  () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPayProvider),
  { ssr: false },
);

const projectId:any = process.env.NEXT_PUBLIC_PROJECT_ID;
const queryClient = new QueryClient();
const config = getDefaultConfig({
  appName: '$1913 project',
  projectId: projectId,
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MoonPayProvider
        apiKey="pk_test_1Gk1wkhKpCDNtzqS417Nw6DRkHWkidaa"
      >
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              <StoreProvider>
                <NavbarPage />
                {children}
                <Footer />
                <DevTools store={store} />
              </StoreProvider>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </MoonPayProvider>
    </>
  );
}

// app/providers.tsx
"use client";

import { ScrollProvider } from "@/hooks/useLenis";
import LoadingBar from "react-top-loading-bar";
import theme from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import Preloader from "@/components/preloader/preloader";
import PageTransition from "@/components/pageTransition/pageTransition";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const LoadingBarRef: any = useRef(null);

  const pathname = usePathname();

  useEffect(() => {
    if (LoadingBarRef.current) {
      LoadingBarRef.current.continuousStart();
    }
  }, [pathname]);

  useEffect(() => {
    const handleRouteChange = () => {
      if (LoadingBarRef.current) {
        setTimeout(() => {
          LoadingBarRef.current?.complete();
        }, 300);
      }
    };

    handleRouteChange();
  }, [pathname]);

  return (
    <ChakraProvider theme={theme}>
      <Preloader />
      <LoadingBar ref={LoadingBarRef} height={3} color="#ff98a2" />
      <PageTransition pathname={pathname}>
        <ScrollProvider>
          <Navbar />
          {children}
        </ScrollProvider>
      </PageTransition>
    </ChakraProvider>
  );
}

"use client";

import { ScrollProvider } from "@/hooks/useLenis";
import LoadingBar from "react-top-loading-bar";
import theme from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import Preloader from "@/components/preloader/preloader";
import PageTransition from "@/components/pageTransition/pageTransition";
import Cursor from "@/components/cursor/customCursor";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import { customCursor, resetCursor } from "./lib/gsap/gsap";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [initCursor, setInitCursor] = useState(false);

  const LoadingBarRef: any = useRef(null);

  const pathname = usePathname();

  const videoRef = useRef(null);

  const isTouch = useIsTouchDevice();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitCursor(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [pathname]);

  useEffect(() => {
    if (initCursor && !isTouch) {
      customCursor(videoRef);
    }
    return () => {
      if (initCursor && !isTouch) {
        resetCursor();
      }
    };
  }, [initCursor, isTouch, pathname]);

  useEffect(() => {
    if (LoadingBarRef.current) {
      LoadingBarRef.current.continuousStart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <ChakraProvider theme={theme}>
      <Preloader />
      <LoadingBar ref={LoadingBarRef} height={3} color="#ff98a2" />
      {!isTouch && <Cursor />}
      <PageTransition pathname={pathname}>
        <ScrollProvider>
          <Navbar />
          {children}
        </ScrollProvider>
      </PageTransition>
    </ChakraProvider>
  );
}

import { useState, useLayoutEffect } from "react";

export default function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;

    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );

    setIsMobile(mobile);
  }, []);

  return { isMobile };
}

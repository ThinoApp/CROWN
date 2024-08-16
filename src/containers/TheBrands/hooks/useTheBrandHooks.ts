import { useRef } from "react";

export function useTheBrandHooks() {
  const brandlListContainerRef = useRef<HTMLDivElement>(null);

  const getScrollValue = () => {
    if (window.innerWidth < 640) {
      return 100;
    }
    return 300;
  };
  const scrollLeft = () => {
    if (brandlListContainerRef.current) {
      brandlListContainerRef.current.scrollLeft -= getScrollValue();
    }
  };

  const scrollRight = () => {
    if (brandlListContainerRef.current) {
      brandlListContainerRef.current.scrollLeft += getScrollValue();
    }
  };

  return {
    brandlListContainerRef,
    scrollLeft,
    scrollRight,
  };
}

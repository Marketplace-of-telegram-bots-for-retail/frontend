import { useCallback, useEffect, useState } from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dimensions, setDimensions] = useState({ y: 0 });

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
    setScrollPosition(Scrolled);
  };

  // определение позиции элемента
  const callBackRef = useCallback((domNode) => {
    if (domNode) {
      setDimensions(domNode.getBoundingClientRect());
    }
  }, []);
  const clientPositionY = dimensions.y - scrollPosition;

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { scroll, scrollPosition, callBackRef, clientPositionY };
};

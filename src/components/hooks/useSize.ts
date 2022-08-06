import { useEffect, useState } from 'react';

function useSize() {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 1920) {
        const ratio = window.innerWidth / 1920;
        setHeight(window.innerHeight / ratio);
        setWidth(window.innerWidth / ratio);
      } else {
        setHeight(window.screen.availHeight);
        setWidth(window.screen.availWidth);
      }
    };
    updateSize();
    window.addEventListener('resize', () => updateSize());
    return () => window.removeEventListener('resize', () => updateSize());
  }, []);

  return { height, width };
}

export default useSize;

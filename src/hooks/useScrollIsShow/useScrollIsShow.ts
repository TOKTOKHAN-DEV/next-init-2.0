import { useCallback, useEffect, useRef, useState } from 'react';

/**
 *
 * @param threshold 뷰포트에 타겟 엘리먼트가 얼마나 보였을 때 동작할 지(0 ~ 1)
 
 */
const useScrollIsShow = <T extends HTMLElement>(threshold: number) => {
  const dom = useRef<T>(null);
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleScroll = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold });
      observer.observe(current);
      return () => observer && observer.disconnect();
    }
  }, [handleScroll, threshold, dom]);

  return {
    ref: dom,
    isShow,
  };
};

export default useScrollIsShow;

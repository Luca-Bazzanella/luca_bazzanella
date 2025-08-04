import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ScrollToTop = () => {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
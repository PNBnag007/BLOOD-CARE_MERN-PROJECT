import { useEffect } from 'react';

const useScript = url => {
  console.log("test2")
  useEffect(() => {
    console.log("test3")
    const script = document.createElement('script');

    script.type = 'text/javascript';

    script.src = url;
    script.async = 'async';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScript;
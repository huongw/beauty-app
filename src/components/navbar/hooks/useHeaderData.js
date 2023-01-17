import { useEffect, useState } from 'react';
import classNames from 'classnames';

function useHeaderData() {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = function () {
      if (window.scrollY > 0) {
        return setHeader(!header)
      }

      setHeader(header);
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, [])

  let headerClass = classNames("scroll", {
    "changeColor": header
  });
  
  return { headerClass }
}

export default useHeaderData
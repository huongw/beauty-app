import { useEffect, useState } from 'react';

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

  let headerScroll = 'scroll';

  if (header) {
    headerScroll += ' changeColor';
  } else {
    headerScroll = 'scroll';
  }
  return { headerScroll }
}

export default useHeaderData
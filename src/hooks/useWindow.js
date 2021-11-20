import { useEffect } from 'react';

function useWindow() {

  useEffect(() => {
    const windowHandler = function () {
      window.scrollTo(0, 0);
    }

    window.addEventListener('load', windowHandler)

    return () => {
      window.removeEventListener('load', windowHandler)
    }

  }, [])

}

export default useWindow

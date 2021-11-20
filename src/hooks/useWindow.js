import { useEffect } from 'react';

function useWindow() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

}

export default useWindow

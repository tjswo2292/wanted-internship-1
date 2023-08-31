import { RefObject, useEffect, useState } from 'react'

const useScroll = (ref: RefObject<HTMLDivElement>) => {
  const [scrollHeight, setScrollHeight] = useState(0)

  const handleScroll = () => {
    if (ref.current) {
      setScrollHeight(ref.current?.scrollTop)
    }
  }

  useEffect(() => {
    ref.current?.addEventListener('scroll', handleScroll)

    return () => {
      ref.current?.removeEventListener('scroll', handleScroll)
    }
  }, [ref.current])

  return scrollHeight
}

export default useScroll

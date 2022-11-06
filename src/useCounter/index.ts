import { useCallback, useState } from 'react'

export default function useCounter(initValue = 0) {
  const [count, setCount] = useState(initValue)
  const increment = useCallback(() => setCount(x => x + 1), [])
  const reset = useCallback(() => {
    setCount(initValue)
  }, [initValue])
  return { count, increment, reset }
}

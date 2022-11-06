import { useCallback } from 'react'
const useAsyncFn = (func: Function, deps: unknown[]) => {
  const state = {
    loading: false,
    error: null,
    value: null,
  }

  const fetch = useCallback((...args: unknown[]) => {
    state.loading = true
    return func(...args).then(
      (value: any) => {
        state.loading = false
        state.value = value
      },
      (error: any) => {
        state.loading = false
        state.error = error
      },
    )
  }, [...deps])

  return [state, fetch]
}

export default useAsyncFn

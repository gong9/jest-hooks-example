import { act, renderHook } from '@testing-library/react-hooks'
import useCounter from './index'

test('should use counter', () => {
  const { result } = renderHook(() => useCounter())

  expect(result.current.count).toBe(0)
  expect(typeof result.current.increment).toBe('function')
})

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter(34))

  act(() => {
    result.current.increment()
  })

  // expect state+1
  expect(result.current.count).toBe(35)
})

test('should reset counter to updated initial value', () => {
  let initVal = 0
  const { result, rerender } = renderHook(() => useCounter(initVal))

  initVal = 10
  rerender()

  act(() => {
    result.current.reset()
  })

  expect(result.current.count).toBe(10)
})

test('should reset counter to updated initial value anther', () => {
  // 应该是初始值
  const { result, rerender } = renderHook(({ initVal }: { initVal: number }) => useCounter(initVal), {
    initialProps: { initVal: 1 },
  })

  rerender({ initVal: 10 })

  act(() => {
    result.current.reset()
  })

  expect(result.current.count).toBe(10)
})

import React from 'react'
import { render, act } from '@testing-library/react'
import useMedia from '../index'

test('it returns a boolean', () => {
  let originalMatchMedia = window.matchMedia
  // @ts-ignore
  window.matchMedia = () => ({
    matches: false,
    addEventListener() {},
    removeEventListener() {},
  })
  let matches
  function Foo() {
    matches = useMedia('(screen)')
    return null
  }
  render(<Foo />)

  expect(typeof matches).toBe('boolean')
  window.matchMedia = originalMatchMedia
})

test('it revalidates when the media query changes', () => {
  let originalMatchMedia = window.matchMedia

  let listeners: Array<Function> = []

  // @ts-ignore
  window.matchMedia = () => ({
    matches: false,
    addEventListener(name, handler) {
      listeners.push(handler)
    },
    removeEventListener() {},
  })
  let matches
  function Foo() {
    matches = useMedia('(screen)')
    return null
  }
  render(<Foo />)

  expect(typeof matches).toBe('boolean')
  expect(matches).toBe(false)
  act(() => {
    listeners.forEach((listener) => listener({ matches: true }))
  })
  expect(matches).toBe(true)
  window.matchMedia = originalMatchMedia
})

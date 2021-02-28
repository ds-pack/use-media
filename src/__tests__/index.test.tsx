import React from 'react'
import { render } from '@testing-library/react'
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

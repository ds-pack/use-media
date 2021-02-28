# `@ds-pack/use-media`

A small stateful hook for using the `window.matchMedia` API within a React
component.

## Installation:

```sh
yarn add @ds-pack/use-media
```

## Usage:

```tsx
import useMedia from '@ds-pack/use-media'

let mediaQuery = '(min-width: 100px)'

function Component() {
  let matches = useMedia(mediaQuery)

  return matches ? <div /> : null
}
```

### Tools:

- Typescript
- Babel
- Jest

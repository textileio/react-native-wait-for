# react-native-wait-for

## Getting started

`$ npm install @textile/react-native-wait-for --save`

## Example

```js
import { waitFor } from 'react-native-wait-for'

function * waitForOnline() {
  const { onlineTimout } = yield race({
    online: waitFor(select(TextileNodeSelectors.online)),
    onlineTimout: call(delay, 10000)
  })
  if (onlineTimout) {
    throw new Error('node online timed out, internet connection needed')
  }
}
```

# react-native-wait-for

## Install

`npm install \@textile/textile/react-native-wait-for`

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

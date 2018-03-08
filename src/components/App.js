import React from 'react'
import { Provider } from 'react-redux'
import Appbar from './Appbar'

import '../styles/index.scss'

export default ({ store }) => (
  <Provider store={store}>
    <div>
      <Appbar />
    </div>
  </Provider>

)

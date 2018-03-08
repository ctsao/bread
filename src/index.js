import React from 'react'
import ReactDOM from 'react-dom'
//import { AppContainer } from 'react-hot-loader'
import configureStore from './store/configureStore'
import App from './components/App'

const store = configureStore()

ReactDOM.render(
  <App store={store} />,
  document.getElementById('mount')
)

// TODO: add hot loader
/*
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      document.getElementById('mount')
    )
  }
}
*/

import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import client from './apollo'

render(
  <ApolloProvider store={store} client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/GlobalStyle'
import { Home } from './views/Home'
import { Workplace } from './views/Workplace'

const App = () => (
  <Router>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/workplace/:file'>
          <Workplace />
        </Route>
      </Switch>
    </ThemeProvider>
  </Router>
)

export default App

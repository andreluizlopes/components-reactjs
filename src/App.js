import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './page/Home'
import Modal from './page/examples/Modal'
import Card from './page/examples/Card'
import MultiColBox from './page/examples/MultiColBox'

import './app.scss'

function App () {
  return (
    <Router basename='/'>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/examples/modal' component={Modal} />
          <Route exact path='/examples/card' component={Card} />
          <Route exact path='/examples/multicolbox' component={MultiColBox} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

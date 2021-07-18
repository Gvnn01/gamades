import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Promotion from './pages/home'
import Thanks from './pages/thanks'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Promotion}/>
        <Route path='/thanks' component={Thanks}/>
      </Switch>
    </BrowserRouter>
  )
}
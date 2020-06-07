import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} exact path="/"></Route>
            <Route component={CreatePoint} path="/createpoint"></Route>
        </BrowserRouter>
    )
}

export default Routes
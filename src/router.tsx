import * as React from 'react'
import {
    Router,
    BrowserRouter,
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom'
import Loadable from "@utils/Loadable"
import NavBar from "@entry/NavBar"
const AppRouter = () => (
    <HashRouter  >
        <NavBar />
        <Switch>
            <Route exact path="/" component={Loadable(() => import("@entry/Home"))} />
            <Route  path="/webTechnology" component={Loadable(() => import("@entry/WebTechnology"))} />
            <Route  path="/notes" component={Loadable(() => import("@entry/Notes"))} />
            <Route  path="/about" component={Loadable(() => import("@entry/About"))} />
        </Switch>
    </HashRouter>
)

export default AppRouter;
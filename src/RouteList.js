
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom"
import ColorList from "./ColorList"
import Color from "./Color"
import NewColor from "./NewColor"

const RouteList = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/color">
                    <ColorList />
                </Route>
                <Route exact path="/color/new">
                    <NewColor />
                </Route>
                <Route exact path="/color/:color">
                    <Color />
                </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default RouteList
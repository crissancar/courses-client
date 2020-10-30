import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import routes from "./config/routes";

export const App = () => {
    return(
        <Router>
            <Switch>
                {routes.map((route, index) => (
                    <RouteWithSubRoutes key={index} {...route}/>
                ))}
            </Switch>
        </Router>
    )
}

export const RouteWithSubRoutes = (route) => {
    return ( 
        <Route
            path={route.path}
            exact={route.exact}
            render={props => <route.component routes={route.routes} {...props}/>}
        />
     );
}

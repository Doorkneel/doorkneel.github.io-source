import * as React from "react";
import { Route, Switch } from "react-router";

import Error404Page from "../../pages/error404Page";
import HomePage from "../../pages/homePage";

const RoutingSwitch: React.FunctionComponent = () => {
    return (
        <Switch>
            <Route
                exact={true}
                path="/"
                component={HomePage}
            />
            <Route
                component={Error404Page}
            />
        </Switch>
    );
};

export default RoutingSwitch;
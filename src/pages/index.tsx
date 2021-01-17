import * as React from "react";
import { HashRouter } from "react-router-dom";

import RoutingSwitch from "../components/routing/routingSwitch";

/**
 * Simple stateless component to render the home page.
 */
const AppContainer: React.FunctionComponent<{}> = (_props: {}) => {
    return (
        <HashRouter>
            <RoutingSwitch/>
        </HashRouter>
    );
};

export default AppContainer;
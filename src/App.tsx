import React from 'react';
import Login from 'layouts/Login';

import { Route, Switch, RouteComponentProps } from "react-router-dom";
import useLocalStorage from "hooks/useLocalStorage";
import WrapperAPI from "HOC/WrapperAPI";
import * as ITF from 'interfaces';


const App: React.FunctionComponent<RouteComponentProps & ITF.IAPIMethods> = (props) => {
  const [storedValue] = useLocalStorage("access_token");
  const history = props.history;
  const verifyToken = props.verifyToken;
  React.useEffect(() => {
    if (!storedValue) { history.push("/login") }
    else {
      verifyToken(storedValue, () => history.push("/info"),
        () => history.push("/login"));
    }
  }, [storedValue, history, verifyToken])

  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
    </React.Fragment>
  );
}

export default WrapperAPI(App);

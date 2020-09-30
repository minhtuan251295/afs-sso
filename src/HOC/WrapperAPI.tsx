import * as React from 'react';
import * as ITF from "interfaces";
import { connect } from "react-redux";
import { getItems, createItem, login, verifyToken } from "actions/api";

interface IComponentWithAPIProps {
}

const WrapperAPI = (Component: React.FunctionComponent<any>) => {
  const ComponentWithAPI: React.FunctionComponent<IComponentWithAPIProps & ITF.IAPIMethods> = (props) => {
    const newProps = {
      ...props,
      getItems: props.getItems,
      createItem: props.createItem,
      login: props.login,
      verifyToken: props.verifyToken,
    }

    return (<Component {...newProps} />);
  };
  return connect(null, { getItems, createItem, login, verifyToken })(ComponentWithAPI);
}


export default WrapperAPI;

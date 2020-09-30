import * as React from 'react';

import * as ITF from "interfaces";

import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import WrapperAPI from "HOC/WrapperAPI";
import useLocalStorage from "hooks/useLocalStorage";

import { RouteComponentProps } from "react-router-dom";
interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps & ITF.IAPIMethods & RouteComponentProps> = (props) => {
  const [, setValueToLocalStorage] = useLocalStorage("access_token")


  const onFinish = (values: any) => {
    props.login(values, (result: any) => {
      setValueToLocalStorage(result.token);
      props.history.push('/info');
    },
      () => message.warning('Email or password is invalid!'))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <React.Fragment>
      <section id="form__wrapper">
        <Form name="login" onFinish={onFinish} onFinishFailed={onFinishFailed} className="form__content">
          <Form.Item name="email"
            rules={[
              { required: true, message: 'Please fill your email!' },
              { pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Please fill correct email' }
            ]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item name="password"
            rules={[{ required: true, message: 'Please fill your password!' }]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="form__login-button">
              Log in
            </Button>
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </Form>
      </section>
    </React.Fragment>
  );
};

export default WrapperAPI(Login);

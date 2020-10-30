import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";

import "./LayoutBasic.scss";

export const LayoutBasic = ({ routes }) => {
  const { Content, Footer } = Layout;

  return (
    <Layout>
      <h2>Menu...</h2>
      <Layout>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>Cristian Sánchez</Footer>
      </Layout>
    </Layout>
  );
};

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}

export default LayoutBasic;
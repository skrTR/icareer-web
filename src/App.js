import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageScrollTop from "./components/pageToTop/PageScrollTop";

import "./assets/scss/style.scss";
import HomeScreen from "./pages/Home/HomeScreen";
import Contact from "./pages/Contacts/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Pricing from "./pages/Price/Pricing";
import News from "./pages/News/News";
import NewsDetails from "./pages/News/NewsDetails";
import LoginScreen from "./pages/Admin/LoginScreen";
import AdminScreen from "./pages/Admin/AdminScreen";
import AddWork from "./pages/Admin/AddWorks/AddWorks";
import inWorks from "./pages/Admin/inWork/InWorks";
const App = () => {
  // 123
  return (
    <Router>
      <PageScrollTop>
        <Switch>
          <Route
            path={`${process.env.PUBLIC_URL + "/"}`}
            exact
            component={HomeScreen}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/Privacy-policy"}`}
            exact
            component={PrivacyPolicy}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/pricing"}`}
            exact
            component={Pricing}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            exact
            component={Contact}
          />

          <Route
            path={`${process.env.PUBLIC_URL + "/error"}`}
            exact
            component={Error}
          />

          <Route
            path={`${process.env.PUBLIC_URL + "/news"}`}
            exact
            component={News}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/news/:id"}`}
            exact
            component={NewsDetails}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/login"}`}
            exact
            component={LoginScreen}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/admin"}`}
            exact
            component={AdminScreen}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/addWorks"}`}
            exact
            component={AddWork}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/adminWork/:id"}`}
            exact
            component={inWorks}
          />
        </Switch>
      </PageScrollTop>
    </Router>
  );
};

export default App;

import React, { Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import HomeScreen from "./features/home/HomeScreen";
import SignIn from "./features/login/SignIn";
import MyCart from "./features/cart/MyCart";
import Header from "./components/header/Header";
import Checkout from "./features/checkout/Checkout";

import { persistor, store } from "./store";
import { Provider, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";

const HomeScreen = lazy(() => import("./features/home/HomeScreen"));
//const MyCart = lazy(() => import("./features/cart/MyCart"));

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *  strict-local
 */

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.user);
  console.log(auth, "authauth");
  let Authorized = auth && auth.auth;
  console.log(Authorized, "AuthorizedAuthorized");
  return (
    <Route
      {...rest}
      render={(props) =>
        Authorized ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />

        <Router>
          <Switch>
            <Route exact path="/signin" component={SignIn} />
            <PrivateRoute exact path="/cart" component={MyCart} />
            <PrivateRoute exact path="/home" component={HomeScreen} />  
            <PrivateRoute exact path="/checkout" component={Checkout} />
            <Suspense
              fallback={<h6 className="mt-3">Please wait while we load</h6>}
            >
              <PrivateRoute exact path="/" component={HomeScreen} />
            </Suspense>

            <Suspense
              fallback={<h6 className="mt-3">Please wait while we load</h6>}
            >
              {/* <PrivateRoute exact path="/home" component={HomeScreen} /> */}
            </Suspense>
            {/* <Suspense
              fallback={<h6 className="mt-3">Please wait while we load</h6>}
            > */}
              {/* <PrivateRoute exact path="/cart" component={MyCart} /> */}
            {/* </Suspense> */}
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;

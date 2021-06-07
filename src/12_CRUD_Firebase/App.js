import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header"
import configureStore from "./redux/configureStore";
import Root from "./Root";
import './App.css';

// firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);
const store = configureStore();

function App() {
  // const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Root />
      </Router>
    </Provider>
    // <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
    //   Is logged in? {JSON.stringify(isLoggedIn)}
    //   <div className="App">
    //     <Router>
    //       <Header />
    //       <Switch>
    //         {routes.map((route) => (
    //           <Route
    //             key={route.path}
    //             path={route.path}
    //             exact={route.exact}
    //             component={route.main}
    //           />
    //         ))}
    //       </Switch>
    //     </Router>
    //   </div>
    // </AuthContext.Provider>
  );
}

export default App;

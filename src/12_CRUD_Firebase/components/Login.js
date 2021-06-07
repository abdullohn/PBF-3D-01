import { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../redux/actions/auth";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = e => {
        e.preventDefault();

        const { dispatch } = props;
        dispatch(loginUser(email, password));
    };

    const { isLoggingIn, loginError, isAuthenticated } = props;

    if (isAuthenticated) {
        return <Redirect to="/" />
    } else {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={e => handleForm(e)}>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        placeholder="email"
                        required
                    />
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        placeholder="password"
                        required
                    />
                    <hr />
                    <button type="submit"> Login </button>
                        {/* {loading ? <Spinner animation="border" role="status" /> : "login"}
                    </button> */}
                    <hr />
                    <span>{loginError && ("Email atau Password Salah!")}</span>
                    <span>{isLoggingIn && ("Sedang login ...")}</span>
                </form>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        loginError: state.auth.loginError,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(Login);

// import { useContext, useState } from "react";
// import { AuthContext } from "../App";
// import firebase from "firebase/app";
// import Spinner from 'react-bootstrap/Spinner';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "firebase/analytics";
// import "firebase/auth";

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setErrors] = useState("");
//     const [loading, setLoading] = useState(false);
//     // const [loadingGoogle, setLoadingGoogle] = useState(false);

//     const Auth = useContext(AuthContext);

//     const handleForm = (e) => {
//         e.preventDefault();
//         setLoading(true);
//         firebase
//             .auth()
//             .signInWithEmailAndPassword(email, password)
//             .then((res) => {
//                 if (res.user) Auth.setLoggedIn(true);
//                 setLoading(false);
//             })
//             .catch((e) => {
//                 setErrors(e.message);
//                 setLoading(false);
//             });
//     };

//     const signInWithGoogle = () => {
//         const provider = new firebase.auth.GoogleAuthProvider();
//         firebase
//             .auth()
//             .setPersistence(firebase.auth.Auth.Persistence.SESSION)
//             .then(() => {
//                 firebase
//                     .auth()
//                     .signInWithPopup(provider)
//                     .then((res) => {
//                         if (res.user) Auth.setLoggedIn(true);
//                     })
//                     .catch((e) => setErrors(e.message));
//             });
//     };

//     const logout = () => {
//         Auth.setLoggedIn(false);
//     };

//     return (
//         <div>
//             <h1>Login</h1>
//             <form onSubmit={(e) => handleForm(e)}>
//                 <input
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     name="email"
//                     type="email"
//                     placeholder="email" />
//                 <input
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     name="password"
//                     type="password"
//                     placeholder="password" />
//                 <hr />
//                 {Auth.isLoggedIn ? (
//                     <div>
//                         <button onClick={() => logout()}>Logout</button>
//                     </div>
//                 ) : (
//                     <div>
//                         <button
//                             onClick={() => signInWithGoogle()}
//                             className="googleBtn"
//                             type="button">
//                             <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="logo" />
//                             Login With Google
//                         </button>
//                         <br />
//                         <br />
//                         <button type="submit">
//                             {loading ? <Spinner animation="border" role="status" /> : "login"}
//                         </button>
//                     </div>
//                 )}
//             </form>
//         </div>
//     );
// }

// export default Login;
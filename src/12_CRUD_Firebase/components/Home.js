import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/auth";
import BlogPost from './BlogPost';
import { Alert, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

class Home extends React.Component {

    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    };

    render() {
        const { isLoggingOut, logoutError } = this.props;
        return (
            <div>
                <Alert variant="warning">
                    <Alert.Heading>Halaman ini dilindungi dengan password</Alert.Heading>
                    <p className="mb-0">Semua routes di sini akan dilindungi.</p>
                    <hr />
                    <Button onClick={this.handleLogout} variant="danger">Keluar</Button>
                {isLoggingOut && <p>Sedang proses logout...</p>}
                {logoutError && <p>Terjadi galat saat logout!</p>}
                </Alert>
                <BlogPost />
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
}

export default connect(mapStateToProps)(Home);
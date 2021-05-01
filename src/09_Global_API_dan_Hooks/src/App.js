import logo from './logo.svg';
import './App.css';
import BlogPost from '../src/components/blogPost'
import KomentarPost from '../src/components/commentPost';
import Beranda from './pages/beranda';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Beranda} />
        <Route path="/artikel" component={BlogPost} />
        <Route path="/comment" component={KomentarPost} />
      </Switch>
    </Router>
  );
}

export default App;

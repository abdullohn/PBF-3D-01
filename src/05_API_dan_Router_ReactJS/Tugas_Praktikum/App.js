import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Beranda () {
  return (
    <div class="container">
      <div class="row align-items-center">
        <div class="card-body">
          <div class="container col-10">
            <div class="card text-dark bg-light col col-md-12">
                <div class="card-header"><h4>Beranda</h4></div>
                  <div class="card-body">
                    <h5 class="card-title">Mata Kuliah : Pemrograman Berbasis Framework</h5>
                    <p class="card-text">Dosen Pengampu : Habibie Ed Dien, S.Kom., M.T. <br></br> Materi : Api Router Reactjs 
                    <br></br>Tahun Ajaran : Genap 2020/2021</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

function Berita(props){
  return(
    <div key={props.id}>
      <h3>{props.judul}</h3>
      <div>{props.isiArtikel}</div>
    </div>
  );
}

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,         // jika terjadi gagal ambil data dari API
      isLoaded: false,     // untuk status ketika sedang memuat
      dataArtikel: []      // untuk menampung data API
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(
        (dataJson) => {
          this.setState({
            isLoaded: true,
            dataArtikel: dataJson
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        })
  }

  render () {
    const { error, isLoaded, dataArtikel } = this.state;
    
    if (error) {
      return <div>Terjadi galat: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Sedang memuat...</div>;
    } else {
      return (
        <div>
          <div class="container">
          <div class="row align-items-center">
            <div class="card-body">
              <div class="container col-10">
                <div class="card border-dark text-dark col col-md-12">
                    <div class="card-header"><h4 class="card-title">Daftar Artikel</h4></div>
                      <div class="card-body">
                      {
                        dataArtikel.map(artikel => {
                          return <Berita key={artikel.id} judul={artikel.title} isiArtikel={artikel.body} />
                        })
                      }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      );
    }
  }
}

function Tentang () {
  return (
      <div class="container">
        <div class="row align-items-center">
          <div class="card-body">
            <div class="container col-10">
              <div class="card text-white bg-secondary col col-md-12">
                <div class="container">
                  <div class="card-header"><h4 class="card-title">Tentang</h4></div>
                    <div class="card-body">
                      <h5 class="card-title">Nama : Abdullah</h5>
                      <p class="card-text">Nim : 1841720209 <br></br>Kelas : TI-3D</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

function Topik2 () {
  let { belajarReactRouter } = useParams();
  return (
    // <h3>Topik yang terpilih: {topicId}</h3>
    <div class="container">
    <div class="row align-items-center">
      <div class="card-body">
        <div class="container col-10">
          <div class="card border-info col col-md-12">
              <div class="card-header"><h4 class="card-title">{belajarReactRouter}</h4></div>
              <div class="card-body">
                <p class="card-text">Mengambil data dari API, Membuat routing di ReactJS</p>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

function Topik () {
  let { topicId } = useParams();
  return (
    // <h3>Topik yang terpilih: {topicId}</h3>
    <div class="container">
    <div class="row align-items-center">
      <div class="card-body">
        <div class="container col-10">
          <div class="card border-info col col-md-12">
              <div class="card-header"><h4 class="card-title">{topicId}</h4></div>
              <div class="card-body">
                <p class="card-text">Pengenalan tentang JSX (JavaScript XML), Rendering elements, 
                Penggunaan component dan props, State dan lifecycle, Menangani events, 
                Conditional rendering, Penggunaan Lists dan Keys, Penggunaan Forms</p>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

function Codelabs () {
  let match = useRouteMatch();

  return (
    <div class="container">
        <div class="row align-items-center">
          <div class="card-body">
            <div class="container">
              <div class="card border-dark text-dark">
                  <div class="card-header"><h4 class="card-title">Codelabs</h4></div>
                    <div class="card-body">
                    <div class="row">
                    <div class="col-sm-6">
                      <div class="card border-info mb-3">
                        <div class="card-header"><h6>Konsep ReactJS</h6></div>
                        <div class="card-body">
                          <p class="card-text">Kumpulan topik-topik pada praktikum Konsep ReactJS</p>
                          <Link class="btn btn-primary" aria-current="page" to={`${match.url}/konsep-reactjs`}>Detail</Link>
                        </div>
                      </div>
                      </div>
                      <div class="col-sm-6">
                      <div class="card border-info mb-3">
                        <div class="card-header"><h6>Belajar React Router</h6></div>
                        <div class="card-body">
                          <p class="card-text">Kumpulan topik-topik pada praktikum React Router</p>
                          <Link class="btn btn-primary" aria-current="page" to={`${match.url}/belajar-react-router`}>Detail</Link>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
      {/* Pada halaman Codelabs ini memiliki <Switch> sendiri dengan beberapa route lagi
          di dalam URL /codelabs . Pada bagian route kedua merupakan route default atau
          jika tidak satu pun link topik dipilih. */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topik />
        </Route>
        <Route path={`${match.path}/:belajarReactRouter`}>
          <Topik2 />
        </Route>
        <Route path={match.path}>

        </Route>
      </Switch>
      </div>
  );
}

export default function App () {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">ReactJS Router</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/beranda">Beranda</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/berita">Berita</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/tentang">Tentang</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/codelabs">Codelabs</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="main-container"></div>
      </div>
      <div>

        <Switch>
          <Route path="/berita">
            <Blog />
          </Route>
          <Route path="/tentang">
            <Tentang />
          </Route>
          <Route path="/codelabs">
            <Codelabs />
          </Route>
          <Route path="/beranda">
            <Beranda />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
import React from 'react';
import API from '../services/Artikel';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../parts/header'

function DaftarArtikel(props) {
    return (
        <div>
            <h3>{props.judul}</h3>
            <div>{props.isiArtikel}</div>
        </div>
    );
}


export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArtikel: [],      // untuk menampung data API
            postArtikel: {
                userId: 1,
                title: '',
                body: ''
            }
        };
    }

    ambilDataDariServerAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                dataArtikel: result
            })
        })
    }

    handleTombolSimpan = (e) => {
        e.preventDefault();

        API.postNewsBlog(this.state.postArtikel)
            .then((response) => {
                this.ambilDataDariServerAPI();    // refresh data
                alert('Data berhasil disimpan!');
            });
    }

    handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            prevState.postArtikel[name] = value;
            return {
                postArtikel: prevState.postArtikel
            };
        });
    }

    handleTombolHapus = (e) => {
        e.preventDefault();

        API.deleteNewsBlog(e.target.value)
            .then((response) => {
                this.ambilDataDariServerAPI();    // refresh data
                alert('Data berhasil dihapus!');
            });
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    render() {
        const { dataArtikel, postArtikel } = this.state;

        return (
            <div class="container">
                <Header />
                <div>
                    <form id="contact-form" class="tm-contact-form" onSubmit={this.handleTombolSimpan}>
                        <div class="form-group">
                            <label class="form-label">Judul Artikel:</label>
                            <input class="form-control" type="text" name="title" defaultValue={postArtikel.title} onChange={this.handleOnChange} />
                        </div>
                        <div class="form-group">
                            <label class="form-label">Isi Artikel:</label>
                            <textarea class="form-control" type="text" name="body" defaultValue={postArtikel.body} onChange={this.handleOnChange} />
                        </div>
                        <Button variant="success" type="submit" value="Simpan" >Simpan</Button>
                    </form>
                </div>
                <hr></hr>
                <h2>Daftar Artikel</h2>
                <hr></hr>
                {
                    dataArtikel.map(artikel => {
                        return (
                            <div key={artikel.id}>
                                <DaftarArtikel judul={artikel.title} isiArtikel={artikel.body} />
                                <Button variant="danger" value={artikel.id} onClick={this.handleTombolHapus}>Hapus</Button>
                                <hr></hr>
                            </div>)

                    })
                }
            </div>
        );
    }
}
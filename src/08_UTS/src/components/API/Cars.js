import React, { Component } from "react";

class Cars extends Component {
    state = {
        error: null,         // jika terjadi gagal ambil data dari API
        isLoaded: false,     // untuk status ketika sedang memuat
        dataGambar: []      // untuk menampung data API
    };
    componentDidMount() {
        fetch("https://my-json-server.typicode.com/JuanElNino/MotorAPI/services")
            .then(response => response.json())
            .then(
                (dataJson) => {
                    this.setState({
                        isLoaded: true,
                        dataGambar: dataJson
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
    }
    render() {
        const { error, isLoaded, dataGambar } = this.state;

        if (error) {
            return <div>Terjadi galat: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Sedang memuat...</div>;
        } else {
            return (
                <div>
                    {
                        dataGambar.map(services => {
                            return <DaftarGambar title={services.title} url={services.url} />
                        })
                    }
                </div>
            );
        }
    }
}

function DaftarGambar(props) {
    console.log(props)
    var text = props.id;
    return (
        <div class="tm-img-1-container">
            <img src={props.url} alt="Image description" />
            <p class="tm-img-1-description">{props.title}</p>
        </div>
    );

}

export default Cars
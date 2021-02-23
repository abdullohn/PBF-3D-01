import logo from './logo.svg';
import './App.css';

function Kartu (props) {
  return <h1>Halo, {props.nim} - {props.nama}</h1>;
}

function App() {
  return (
    <div>
      <Kartu nim="1000001" nama="Lala" />
      <Kartu nim="1000002" nama="Lili" />
      <Kartu nim="1000003" nama="Lulu" />
    </div>
  );
}

export default App;

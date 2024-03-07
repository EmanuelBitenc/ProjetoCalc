import "../styles/index.css";
import Header from "./component/Header/Header";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <h1>
        Projeto Cal<span style={{ color: "#ffa500" }}>c.</span>
      </h1>
      <div className="card">
        <p>
          Bem vindo a unidade central de calculos, selecione que operação você
          deseja realizar.
        </p>
      </div>
    </>
  );
}

export default App;

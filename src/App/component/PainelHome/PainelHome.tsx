import logo from "../../../assets/calcIcon.svg";
import "./painelHome.css";

const PainelHome = () => {
  return (
    <>
      <div className="containerPainel">
        <div className="titulo">
          <img className="icon" src={logo} alt="" />
          <h1>
            Projeto Cal<span style={{ color: "#ffa500" }}>c.</span>
          </h1>
        </div>
        <div>
          <p>
            Bem vindo a unidade central de calculos, selecione que operação você
            deseja realizar.
          </p>
        </div>
      </div>
    </>
  );
};

export default PainelHome;

import CampoTexto from "../CampoTexto";
import "./Formulario.css";

const Formulario = () => {
  return (
    <setion className="formulario">
      <form>

        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <CampoTexto label="Nome" placeholder="Digite aqui seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite aqui seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite aqui o enderço da imagem"/>
      </form>
    </setion>
  );
};

export default Formulario;

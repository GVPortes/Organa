import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSupensa from "../ListaSuspensa";
import "./Formulario.css";


const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
    "Teste e Qualidade",
  ];


  return (
    <setion className="formulario">
      <form>

        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <CampoTexto label="Nome" placeholder="Digite aqui seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite aqui seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite aqui o enderço da imagem"/>
        <ListaSupensa label="Time" itens={times}/>
        <Botao texto="Criar Card"/>
      </form>
    </setion>
  );
};

export default Formulario;

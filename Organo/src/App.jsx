// Aqui chamamos os componentes que criamos na pasta componentes
//Importamos esse app.jsx no index.jsx e lá renderizamos o App
//Ele é o ponto de entrada do nosso projeto, o bootstrap
//do nosso projeto

import Banner from './componentes/Banner/Banner'
import CampoTexto from './componentes/CampoTexto/CampoTexto'


function App() {

  return (
    <div className='App'>
      <Banner/>
      <CampoTexto/>
      </div>
  )
}

export default App

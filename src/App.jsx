// import React from "react"

// function MeuBotaoLegal({ children, cor, tamanho}) {
//   return (
//     <button style={{ backgroundColor: cor, color: 'white', fontSize: tamanho }} >{children}</button>

//   )
// }

// function maiusculo(texto) {
//   return texto.toUpperCase()
// }

// function App() {
//   return (
//     <div className="App">
//       <button>Botao normal</button>

//       <MeuBotaoLegal cor='green' >
//         {maiusculo('texto')}
//       </MeuBotaoLegal>
//       <MeuBotaoLegal cor='purple' tamanho={100} >
//         outro
//       </MeuBotaoLegal>
//       <button>

//       </button>
//     </div>
//   )
// }

// export default App;


import React from "react";
import './App.css';
import Header from "./Components/Header/Index";
import MainContent from "./Components/MainContent";



export default function App(){
  return (
    <div className="pageContainer">

    <Header />

    <MainContent/>
    </div>

  )
  
}
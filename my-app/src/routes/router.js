import AppElisa from '../AppElisa.js'
import App from '../App.js'


import {  // 'Routes' Substituiu o switch
  Route, 
  Routes  
} from 'react-router-dom'
  // 'createBrowserRouter' Atualiza a rota. ele esta no index.
  // 'Routes' examana as rotas 'route' para verificar qual delas corresponde ao pedido de camilho URL.
  // 'Route' Executa o Componente, Que esta associado a Um caminho Na 'Url', Caso Esse Caminho seja Colocado. 
function RouterPag () {
  return ( 
    <>
      <Routes>
        <Route path='/Let-me-know/' element={<App />} />
        <Route path='/Let-me-know/Elisa' element={<AppElisa />} />
      </Routes>
    </>
  )
}

export default RouterPag


import './App.css'; /*Importa os estilos e aplica aqui em App.js que ira para index.js que ira Renderizar tudo*/
/*Usamo Chaves para selecionar qual funçao queremos importar e precisamos por export antes da function no outro arquivo*/
import { Testimonio } from './Componentes/Testemonio';

function App() {
  return (
    <div className="App">
      <Testimonio  //Chamando a funçao e aplicando as configutraçoes de props
        nome="Elisangela"
        pais="Portugual"
        imagem="20220514_123126"
        cargo=""
        empresa="Freelance"
        testimonio="Elisangela Pereira é brasileira que mora em Portugual desde março de 2020. Foi para a Portugual em busca das suas origens Portuguesas.  Já trabalhou como (Cuidado de idosos,Limpeza residencial,Auxiliar de cozinha,Serviços de babá) para a Porto, obteve habilitação como assistente turística e foi  (até chegar a pandemia...). Hoje se interessa por vendas e voltou a fazer o que mais gosta: buscar novidades, visitar lugares interessantes e trabalhar! Se você tem um interesse sobre visite  " /> {/*Chama testimonio E determina configuraçoes das props*/}
        <a href="#"  target="__blank">Link Para Dowload Do Curriculo"</a>
    </div>
  );
}

export default App;

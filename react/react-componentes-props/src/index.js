import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pedido from './Pedidos';
import Cartao from './Cartao';
import Feedback from './Feedback';

const App = () => {

    const textoOK = "Já chegou"
    const textoNOK = "Ainda não chegou"
    const funcaoOK = () => alert("Agradecemos sua confirmação!")
    const funcaoNOK = () => alert("Verificaremos o ocorrido!")
    const componenteFeedback = <Feedback textoOK={textoOK} funcaoOK={funcaoOK}
textoNOK={textoNOK} funcaoNOK={funcaoNOK}/>;


    return (
        
      <div className="container border rounded mt-2">
        {/* linha para o primeiro pedido pedido*/}
        <div className="row border-bottom m-2">
          <h1 className="display-5 text-center">Seus pedidos</h1>
        </div>
        <div className="row">
          <div className="col-sm-8 col-md-6 m-2">
          <Cartao cabecalho="22/04/2021">
 <Pedido icone="fas fa-hdd fa-2x" titulo="SSD" descricao="SSD Kingston A400
- SATA"/>
<Feedback />
 </Cartao>
            <Cartao cabecalho="20/04/2021">
            <Pedido 
              icone="fas fa-book fa-2x" 
              titulo="Livro" 
              descricao="Concrete Mathematics - Donald Knuth" 
            />
            <Feedback />
            </Cartao>

            {/* linha para o primeiro pedido pedido*/}
            <Cartao cabecalho="20/04/2021">
            <Pedido 
              icone="fas fa-laptop fa-2x" 
              titulo="Notebook" 
              descricao="Notebook Dell - 8Gb - i5" 
            />
            <Feedback />
            </Cartao>
          </div>
        </div>
      </div>
    );
  };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
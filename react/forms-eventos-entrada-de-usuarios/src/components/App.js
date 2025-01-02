import React from 'react';
import Busca from './Busca';
import env from 'react-dotenv';
import { createClient } from 'pexels';
import ListaImagens from './ListaImagens';
import PexelsLogo from './PexelsLogo';
import pexelsClient from '../utils/pexelsClient';

export default class App extends React.Component {
  state = { pics: [] };

  // Inicializa o cliente Pexels
  pexelsClient = null;

  // Chama o método de busca ao realizar a busca
  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: { query: termo }
    })
    .then((result) => {
      console.log(result);
      // data é um atributo definido pela axios
      // o conteúdo da resposta vem associado a essa chave
      this.setState({ pics: result.data.photos });
    })
    .catch((error) => console.error('Erro ao buscar fotos:', error));
  };

  // Configura o cliente Pexels quando o componente é montado
  componentDidMount() {
    this.pexelsClient = createClient(env.PEXELS_KEY);
  }

  render() {
    console.log(env.PEXELS_KEY); // Verifique se a chave está sendo exibida corretamente
    return (
      <div className="grid justify-content-center m-auto w-9 borderround border-1 border-400">
        <div className="col-12">
          <PexelsLogo />
          <h1 className="text-center">Exibir uma lista de...</h1>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-12">
          <div className="grid">
            <ListaImagens imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'} pics={this.state.pics} />
          </div>
        </div>
      </div>
    );
  }
}
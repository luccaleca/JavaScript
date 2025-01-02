import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext'; // Corrigido para InputText
import { Button } from 'primereact/button';

export default class Busca extends Component {
  state = {
    termoDeBusca: '',
  };

  onFormSubmit = (event) => {
    //não deixa o navegador submeter o form
    event.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)
  }

  onTermoAlterado = (event) => {
    console.log(event.target.value);
    this.setState({ termoDeBusca: event.target.value });
  };

  render() {
    return (
        <form onSubmit={this.onFormSubmit}>
      <div className="flex flex-column">
        <span className="p-input-icon-left w-full">
          <i className="pi pi-search" />
          <InputText 
            value={this.state.termoDeBusca}
            className="w-full"
            onChange={this.onTermoAlterado}
            placeholder={this.props.dica}
          />
        </span>
        <Button label="OK" className="p-button-outlined mt-2" />
      </div>
      </form>
    );
  }
}

Busca.defaultProps = {
  dica: 'Digite algo que deseja ver',
};
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LivroList from './LivroList';
import DetalhesLivro from './DetalhesLivro';

const Rotas = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LivroList} />
        <Route path="/detalhes/:titulo" component={BookDetails} />
      </Switch>
    </Router>
  );
};

export default Rotas;
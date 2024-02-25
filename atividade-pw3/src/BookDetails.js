import React from 'react';
import { useLocation } from 'react-router-dom'; 

const DetalhesLivro = () => {
  const location = useLocation(); 
  const { titulo, autor, imagem, descricao, avaliacao} = location.state; 

  return (
    <div>
      <h2>{titulo}</h2>
      <p>Autor: {autor}</p>
      <img src={imagem} alt={titulo} />
      <p>Descrição: {descricao}</p>
      <p>Avaliação: {avaliacao}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Comprar</a>
    </div>
  );
};

export default DetalhesLivro;

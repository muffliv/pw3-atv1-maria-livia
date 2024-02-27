import './App.css';
import CardBook from './components/CardBooks';
import booksData from './livros.json'
import Header from './components/Header';
import './App.css'
import { useState } from 'react';


function App() {
    const [titulo, setTitulo] = useState(null)
    const [imagem, setImagem] = useState(null)
    const [autor, setAutor] = useState(null)
    const [descricao, setDescricao] = useState(null)
    const [avaliacao, setAvaliacao] = useState(null)

    const[efeito, setEfeito] = useState("home")
    const[open, setOpen] = useState("livro-modal close")
  
  function bookdetails(imagem, titulo, autor, descricao, avaliacao) {
    setOpen("livro-modal open")
    setEfeito("home efeito")

    setTitulo(titulo)
    setImagem(imagem)
    setAutor(autor)
    setDescricao(descricao)
    setAvaliacao(avaliacao)
  }

  function fecharModal(){
    setEfeito("home")
    setOpen("livro-modal close")
  }

    return (
      <>
        <div className={efeito}>
          <Header/>
          <div className="livro-list-container">    
            {
              booksData.map((livro, index) => {    
                return(
                  <div onClick={() => bookdetails(livro.imagem, livro.titulo,livro.autor, livro.descricao, livro.avaliacao )}>
                    <CardBook
                      key={index}
                      titulo={livro.titulo}
                      autor={livro.autor}
                      imagem={livro.imagem} className="imagem-card"
                      descricao={livro.descricao}
                      avaliacao={livro.avaliacao}

                      />
                  </div>
                )    
              })}
          </div>
        </div>
        <div className={open}>
          <header>
            <button className='livro-modal__btn' onClick={fecharModal}>fechar</button>
          </header>
          <div className='livro-modal__conteudo'>
            <div className='livro-modal__esquerdo'>
              <img src={imagem}/>
              <p>{avaliacao}</p>
            </div>

            <div className='livro-modal__direito'>
              <h1>{titulo}</h1>
              <h2>{autor}</h2>
              <p>{descricao}</p>

            </div>
          </div>
          
          
           
        </div>
      </>
    );
};

export default App;

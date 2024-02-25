import './App.css';
import CardBook from './components/CardBooks';
import booksData from './livros.json'
import Header from './components/Header';
import './App.css'


function App() {



    return (
      <div className="livro-list-container">
        <Header/>
        {booksData.map((livro, index) => (
          <CardBook
            key={index}
            titulo={livro.titulo}
            autor={livro.autor}
            imagem={livro.imagem} className="imagem-card"
            descricao={livro.descricao}
            avaliacao={livro.avaliacao}
          />
        ))}
      </div>
    );
};

export default App;

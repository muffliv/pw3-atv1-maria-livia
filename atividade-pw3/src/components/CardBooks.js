import '../App.css'

const CardBook = ({titulo, autor, imagem, descricao, avaliacao}) => {

  return(
    <div className='livro-card'>
      <div className="livro-card-header">
        <img className="livro-card-imagem" src={imagem} alt={titulo} />
      </div>
      <div className="livro-card-body">
        <h3 className="livro-card-titulo">{titulo}</h3>
        <p className="livro-card-autor">Autor: {autor}</p>
        <p className="livro-card-descricao">{descricao}</p>
        <p className="livro-card-avaliacao">Avaliação: {avaliacao}</p>
      </div>
    </div>
  )
}

export default CardBook;
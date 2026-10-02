import {Link} from "react-router-dom"

const Error = () => {
  return (
    <main className="px-1.25 my-20 grow text-center flex flex-col items-center justify-center">
      <h2 className="text-6xl font-bold text-[#95ff00]">404</h2>
      <p className="text-2xl font-bold mbv-2 text-cyan-400">Ops! página não encontrada</p>
      <p className="text-gray-400 mb-8 max-w-md">Parece que você se perdeu no mapa do jogo.<br/>A página que você procura não existe ou foi removida</p>
      <Link to="/" className="font-bold text-white hover:text-[#95ff00] hover:uppercase transition-all duration-300">Voltar para o Home</Link>
    </main>
  )
}

export default Error

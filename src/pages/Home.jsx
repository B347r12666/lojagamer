import GameCard from '../components/GameCard'
import img from '../assets/img.jpg'

const Home = () => {
  const jogos = [
    { id: 1, titulo: "Jogo 1", preco: "R$200", img: img },
    { id: 1, titulo: "Jogo 2", preco: "R$300", img: img },
    { id: 1, titulo: "Jogo 3", preco: "R$400", img: img },
    { id: 1, titulo: "Jogo 4", preco: "R$500", img: img },
  ]
  return (
    <main className="px-[5%] mt-10 mb-16 grow">
      <h2 className="titulo text-3xl">Jogos em Destaque</h2>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {jogos.map((jogo)=>(
          <GameCard
          key={jogo.id}
          titulo={jogo.titulo}
          preco={jogo.preco}
          img={jogo.img}/>
        ))}
      </section>
    </main>
  )
}

export default Home

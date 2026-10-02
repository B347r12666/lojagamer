import GameCard from '../components/GameCard'
import img from '../assets/img.jpg'
import laufey from '../assets/laufey.jpeg'
import cod from '../assets/cod.jpg'
import gta from '../assets/gta4.jpg'
import witcher from '../assets/theWitcher.jpg' 

const Home = () => {
  const jogos = [
    { id: 1, titulo: "God of War Laufey", preco: "R$200", img: laufey },
    { id: 1, titulo: " Call of Duty: Modern Warfare 4", preco: "R$300", img: cod },
    { id: 1, titulo: "Grand Theft Auto VI", preco: "R$400", img: gta },
    { id: 1, titulo: " The Witcher 6", preco: "R$500", img: witcher },
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

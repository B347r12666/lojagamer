import GameCard from '../components/GameCard'
import img from '../assets/img.jpg'
import laufey from '../assets/laufey.jpeg'
import cod from '../assets/cod.jpg'
import gta from '../assets/gta4.jpg'
import witcher from '../assets/theWitcher.jpg'
import legacy from '../assets/legacy.jpg'
import lara from '../assets/Lara.jpg'
import Detroid from '../assets/Detroid.jpg'
import alice from '../assets/alice.jpg'

const Jogos = () => {
  const jogos = [
    { id: 1, titulo: "God of War Laufey", preco: "R$200", img: laufey },
    { id: 2, titulo: "Call of Duty: Modern Warfare 4", preco: "R$300", img: cod },
    { id: 3, titulo: "Grand Theft Auto VI", preco: "R$400", img: gta },
    { id: 4, titulo: "The Witcher 6", preco: "R$500", img: witcher },
    { id: 5, titulo: "Detroit: Become Human", preco: "R$200", img: Detroid },
    { id: 6, titulo: "Lara Croft", preco: "R$300", img: lara },
    { id: 7, titulo: "Hogwarts Legacy", preco: "R$400", img: legacy },
    { id: 8, titulo: "Alice: Madness Returns", preco: "R$400", img: alice },

  ]

  return (
    <>
      <main className="px-[5%] my-8 grow">
        <h2 className="text-3xl font-bold mb-4 text-[#95ff00]">Catálogo de Jogos</h2>
        <p className="text-gray-300 mb-10">Aqui você encontrará todos os jogos disponíveis na nossa loja gamer.</p>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {jogos.map((jogo) => (
            <GameCard
              key={jogo.id}
              titulo={jogo.titulo}
              preco={jogo.preco}
              img={jogo.img} />
          ))}
        </section>
      </main>
    </>
  )
}

export default Jogos

import Card from "./Card";

export default function CardGrid({cardsData}) {
  return (
    <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((card, index) => 
                <Card key={index} country={card.country} cidades={card.cidades} dateStart={card.dateStart} />
            )
        }
    </div>
  )
}

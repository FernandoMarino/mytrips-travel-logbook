import Card from "./Card"
import CardGrid from "./CardGrid"

const trips = [
  {id:"1", country:"Brazil", cidades:[{cityName: "São Paulo"}, {cityName: "Porto Alegre"}], dateStart:"2025-01-01"},
  {id:"2", country:"Hawaii", cidades:[{cityName: "Honolulu"}], dateStart:"2025-07-07"},
  {id:"3", country:"Dominican Republic", cidades: [{cityName: "Punta Cana"}, {cityName: "Santo Domingo"}], dateStart:"2025-07-07"},
]



export default function Trips() {
  return (
    <div className="w-9/10 mx-auto">
      <CardGrid cardsData={trips} />
      

    </div>
  )
}

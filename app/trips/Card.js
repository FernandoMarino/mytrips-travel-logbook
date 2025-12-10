
export default function Card({country, cidades, dateStart}) {
  return (
    <div className="flex flex-col shadow rounded-4xl bg-blue-50 text-center items-center justify-center">
        <h2 className="text-center text-4xl font-bold">{country}</h2>
        <p>{dateStart}</p>
        <ul>
        {cidades.map(cidade => <li key={cidade.cityName} className="text-sm text-center list-disc"> {cidade.cityName} </li>)}
        </ul>
    </div>
  )
}

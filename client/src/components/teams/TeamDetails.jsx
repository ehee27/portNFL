import { useContext, useState, useEffect } from 'react'
import TeamsContext from '../../context/TeamsContext'
import { useParams } from 'react-router-dom'

const TeamDetails = () => {
  const [news, setNews] = useState([])
  const [games, setGames] = useState([])
  const { id } = useParams()
  const { teams } = useContext(TeamsContext)
  const target = teams.filter(team => team.TeamID === parseInt(id))
  const team = target[0]

  // console.log(team?.TeamID)

  //
  useEffect(() => {
    fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/${team?.Key}?key=1f12ca4661284f288d5f6bbd9e7e503b`
    )
      .then(res => res.json())
      .then(result => setNews(result))
  }, [])
  //
  useEffect(() => {
    fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/TeamGameStatsBySeason/2023/${team?.TeamID}/all?key=1f12ca4661284f288d5f6bbd9e7e503b`
    )
      .then(res => res.json())
      .then(result => setGames(result))
  }, [])
  // console.log(games)

  return (
    <div>
      <div className="flex py-5">
        <div className="w-[50%] flex flex-col gap-4 items-start pl-3">
          <div className="flex gap-2 items-center">
            <img className="h-[50px]" src={team?.WikipediaLogoUrl}></img>
            <p className="text-3xl text-zinc-500 font-bold">
              {team?.YahooName}
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <button className="bg-blue-500 w-[100px] text-white py-1 px-3 rounded-full">
              Follow
            </button>
            <p className="flex gap-1 text-md">
              <span>{team?.Conference}</span>
              <span>{team?.Division}</span>
            </p>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center rounded-md py-3 px-3">
          <img className="h-[50px]" src={team?.WikipediaWordMarkUrl}></img>
        </div>
      </div>
      <div>
        {news.map((item, i) => (
          <div
            className="shadow-inner shadow-zinc-300 mb-1 p-5 bg-white rounded"
            key={i}
          >
            <div className="flex flex-col gap-2 text-left">
              {' '}
              <p className="text-lg text-zinc-500 font-extrabold">
                {item.Title}
              </p>
              <p className="text-sm font-bold">{item.OriginalSource}</p>
              <p>
                <span className="text-sm text-zinc-500">{item.Content}</span>
                <a href={item.Url} target="_blank">
                  <span className="font-bold ml-2">More</span>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-black/80 rounded">
        <div className="col-span-2"></div>
        <div className="flex flex-col gap-2 shadow-inner shadow-zinc-300 p-3 bg-zinc-500">
          {games?.map((game, i) => (
            <div
              className="flex gap-4 items-center shadow-md py-1 px-3 bg-white rounded-md"
              key={i}
            >
              <img
                className="h-[40px]"
                src={`/logos/${game.Opponent}.png`}
              ></img>
              <p className="text-lg text-zinc-400 font-bold">{game.Opponent}</p>
              <p>{game.Date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamDetails

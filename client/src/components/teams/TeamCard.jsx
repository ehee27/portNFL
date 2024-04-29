import { Link } from 'react-router-dom'
const TeamCard = ({ team }) => {
  return (
    <div className="text-zinc-500 py-3 px-4 rounded bg-white mb-2 mx-1 shadow-md hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all">
      <Link to={`${team.TeamID}`}>
        <div className="flex gap-2 items-center">
          <img className="h-[30px] w-[40px]" src={team.WikipediaLogoUrl}></img>
          <p className="text-xl text-zinc-700 font-bold">{team.FanDuelName}</p>
        </div>
      </Link>

      <div className="flex justify-between items-center mt-2">
        <p className="flex gap-1 text-xs">
          <span>{team.Conference}</span>
          <span>{team.Division}</span>
        </p>
        <span className="text-xs">|</span>
        <p className="text-xs">{team.HeadCoach}</p>
        <span className="text-xs">|</span>
        <p className="text-xs">
          <span>{team.StadiumDetails.Name}</span>
        </p>
        <span className="text-xs">|</span>
        <p className="text-xs">
          <span>{team.StadiumDetails.City},</span>
          <span>{team.StadiumDetails.State}</span>
        </p>
      </div>
    </div>
  )
}

export default TeamCard

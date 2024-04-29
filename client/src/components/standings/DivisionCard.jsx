import { Link } from 'react-router-dom'

const DivisionCard = ({ team }) => {
  return (
    <>
      <Link to={`/teams/${team.TeamID}`}>
        <div className="grid grid-cols-3 rounded bg-white mx-1 shadow hover:cursor-pointer hover:shadow-md hover:scale-105 transition-all mb-2 py-1">
          {/* <div className="flex gap-2 items-center w-[50%] text-zinc-500 font-bold"> */}
          <div className="flex justify-center items-center pl-1">
            <img
              className="h-[14px]"
              src={`/wordMarks/${team.Team}-word.png`}
            ></img>
          </div>

          <div className="flex justify-center items-center text-orange-500 font-black">
            {' '}
            <p>{team.Wins}</p>-<p>{team.Losses}</p>
          </div>
          <div className="flex justify-center items-center text-zinc-400 text-sm pr-3">
            <p className="font-bold text-zinc-600 pr-2">{team.Division}</p>
            <p>{team.DivisionWins}</p>-<p>{team.DivisionLosses}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default DivisionCard

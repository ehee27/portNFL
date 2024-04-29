import { LiaFootballBallSolid } from 'react-icons/lia'

const BoxScore = ({ game }) => {
  const hScore = game.HomeScore
  const aScore = game.AwayScore
  return (
    <>
      <div className="flex shadow m-1 py-1 text-zinc-400 bg-white rounded-md">
        <div className="w-[120px] pl-2">
          <p className="text-xs text-left mb-1">Final</p>

          <div
            className={`flex justify-between ${
              aScore > hScore ? 'font-bold text-zinc-600' : ''
            }`}
          >
            <img className="h-[20px]" src={`/logos/${game.AwayTeam}.png`}></img>
            <div className="flex justify-left items-center gap-2 w-[50%] pl-2">
              <p>{game.AwayScore}</p>
              {hScore < aScore ? (
                <span>
                  <LiaFootballBallSolid className="text-orange-500 font-bold" />
                </span>
              ) : (
                <span></span>
              )}
            </div>
          </div>
          <div
            className={`flex justify-between ${
              hScore > aScore ? 'font-bold text-zinc-600' : ''
            }`}
          >
            <img className="h-[20px]" src={`/logos/${game.HomeTeam}.png`}></img>
            <div className="flex justify-left items-center gap-2 w-[50%] pl-2">
              <p>{game.HomeScore}</p>
              {hScore > aScore ? (
                <span>
                  <LiaFootballBallSolid className="text-orange-500 font-bold" />
                </span>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoxScore

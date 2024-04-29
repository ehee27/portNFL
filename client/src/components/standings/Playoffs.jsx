import { useContext } from 'react'
import StandingsContext from '../../context/StandingsContext'

const Playoffs = () => {
  const {
    afcWest,
    afcEast,
    afcNorth,
    afcSouth,
    nfcWest,
    nfcEast,
    nfcNorth,
    nfcSouth,
  } = useContext(StandingsContext)
  //
  const AFC = [afcWest, afcEast, afcNorth, afcSouth]
  const NFC = [nfcWest, nfcEast, nfcNorth, nfcSouth]

  const findPlayoffs = array => {
    let leaders = []

    for (const conference of array) {
      let winTotal = 0
      let leader

      for (const team of conference) {
        if (team.Wins >= winTotal) {
          winTotal = team.Wins
          leader = team
        }
      }
      leaders.push(leader)
    }
    return leaders
  }
  const afcPlayoffs = findPlayoffs(AFC)
  const nfcPlayoffs = findPlayoffs(NFC)
  console.log(nfcPlayoffs)

  return (
    <div className="bg-black/90 p-5 rounded-xl mt-2" id="standings">
      <p className="text-left text-yellow-400 text-xl md:text-2xl font-black mb-2 ml-1 font-serif">
        PLAYOFF PICTURE
      </p>
      <div className="grid grid-cols-1 md:grid-cols-9">
        <div className="md:col-span-4 mb-3">
          {' '}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-2 w-[100%]">
              <p className="text-md text-left text-zinc-400 font-bold">AFC</p>
              {afcPlayoffs.map((team, i) => (
                <div className="flex justify-center items-center mb-2" key={i}>
                  <span className="text-lg text-white font-black">
                    {i + 1}.
                  </span>
                  <div className="flex w-[100%] pl-1">
                    <div className="flex justify-center items-center w-[25%]">
                      <img
                        className="h-[27px]"
                        src={`/logos/${team?.Team}.png`}
                      ></img>
                    </div>
                    <div className="w-[75%]">
                      <p className="text-md text-left text-white font-black font-serif">
                        {team?.Name.split(' ')
                          .splice(0, team?.Name.split(' ').length - 1)
                          .join(' ')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 w-[100%]">
              <p className="text-md text-left text-zinc-400 font-bold">NFC</p>
              {nfcPlayoffs.map((team, i) => (
                <div className="flex items-center mb-2" key={i}>
                  <span className="text-lg text-white font-black">
                    {i + 1}.
                  </span>
                  <div className="flex w-[100%] pl-1">
                    <div className="flex justify-center items-center w-[25%]">
                      <img
                        className="h-[27px]"
                        src={`/logos/${team?.Team}.png`}
                      ></img>
                    </div>
                    <div className="w-[75%]">
                      <p className="text-md text-left text-white font-black font-serif">
                        {team?.Name.split(' ')
                          .splice(0, team?.Name.split(' ').length - 1)
                          .join(' ')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-5 flex justify-center items-center bg-center bg-contain bg-[url(/img/SB25.webp)] min-h-[120px] max-w-[650px] rounded"></div>
      </div>
    </div>
  )
}

export default Playoffs

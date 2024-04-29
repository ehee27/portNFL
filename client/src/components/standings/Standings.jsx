import { useContext, useState } from 'react'
import StandingsContext from '../../context/StandingsContext'
import DivisionCard from './DivisionCard'

const Standings = () => {
  const [activeConference, setActiveConference] = useState('AFC')
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

  const afc = [
    { conference: afcWest, tag: 'West' },
    { conference: afcEast, tag: 'East' },
    { conference: afcNorth, tag: 'North' },
    { conference: afcSouth, tag: 'South' },
  ]
  const nfc = [
    { conference: nfcWest, tag: 'West' },
    { conference: nfcEast, tag: 'East' },
    { conference: nfcNorth, tag: 'North' },
    { conference: nfcSouth, tag: 'South' },
  ]

  return (
    <div className="bg-zinc-100 p-5 shadow-inner rounded-xl shadow-zinc-400">
      <p className="text-left text-zinc-700 text-xl md:text-2xl font-black mb-2 ml-1 font-serif">
        STANDINGS
      </p>
      <div className="flex gap-2 mb-3 ml-1">
        <button
          onClick={() => setActiveConference('AFC')}
          className="bg-red-700 text-white w-[100px] py-1 px-3 mr-2 rounded shadow-sm shadow-zinc-500 hover:scale-105 transition-all font-black"
        >
          AFC
        </button>
        <button
          onClick={() => setActiveConference('NFC')}
          className="bg-blue-900 text-white w-[100px] py-1 px-3 mr-2 rounded shadow-sm shadow-zinc-500 hover:scale-105 transition-all font-black"
        >
          NFC
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 rounded-lg">
        {activeConference === 'AFC' ? (
          <>
            {afc.map((item, i) => (
              <div
                className="bg-zinc-100 border-2 rounded-md mx-1 px-2 py-2 shadow-inner shadow-zinc-400"
                key={i}
              >
                {item.conference.map((team, i) => (
                  <DivisionCard team={team} key={i} />
                ))}
              </div>
            ))}
          </>
        ) : (
          <>
            {nfc.map((item, i) => (
              <div
                className="bg-zinc-100 border-2 rounded-md mx-1 px-2 py-2 shadow-inner shadow-zinc-400"
                key={i}
              >
                {item.conference.map((team, i) => (
                  <DivisionCard team={team} key={i} />
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Standings

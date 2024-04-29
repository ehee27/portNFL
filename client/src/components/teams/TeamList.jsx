import { useContext } from 'react'
import TeamsContext from '../../context/TeamsContext'
import TeamCard from './TeamCard'

const TeamList = () => {
  const {
    afcWest,
    afcEast,
    afcNorth,
    afcSouth,
    nfcWest,
    nfcEast,
    nfcNorth,
    nfcSouth,
  } = useContext(TeamsContext)
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
    <div className="flex flex-col">
      {/* <p className="text-left text-3xl">Teams</p> */}
      <p className="text-zinc-800 text-3xl font-bold text-left mt-5 mb-1 pl-1">
        AFC
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-zinc-100 p-1 rounded">
        {afc.map((item, i) => (
          <div className="flex flex-col" key={i}>
            {item.conference.map((team, i) => (
              <TeamCard team={team} key={i} />
            ))}
          </div>
        ))}
      </div>
      {/* -------------------- */}
      <p className="text-zinc-800 text-3xl font-bold text-left mt-5 mb-1 pl-1">
        NFC
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-zinc-100 p-1 rounded">
        {nfc.map((item, i) => (
          <div className="flex flex-col" key={i}>
            {item.conference.map((team, i) => (
              <TeamCard team={team} key={i} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamList

import { createContext, useState, useEffect } from 'react'
import TeamsContext from './TeamsContext'

const StandingsAPI =
  'https://api.sportsdata.io/v3/nfl/scores/json/Standings/2023?key=1f12ca4661284f288d5f6bbd9e7e503b'

const StandingsContext = createContext()

export const StandingsContextProvider = ({ children }) => {
  const [standings, setStandings] = useState([])
  useEffect(() => {
    fetch(StandingsAPI)
      .then(res => res.json())
      .then(result => setStandings(result))
  }, [])
  const afcWest = standings.filter(
    item => item.Conference === 'AFC' && item.Division === 'West'
  )
  const afcEast = standings.filter(
    item => item.Conference === 'AFC' && item.Division === 'East'
  )
  const afcNorth = standings.filter(
    item => item.Conference === 'AFC' && item.Division === 'North'
  )
  const afcSouth = standings.filter(
    item => item.Conference === 'AFC' && item.Division === 'South'
  )
  const nfcWest = standings.filter(
    item => item.Conference === 'NFC' && item.Division === 'West'
  )
  const nfcEast = standings.filter(
    item => item.Conference === 'NFC' && item.Division === 'East'
  )
  const nfcNorth = standings.filter(
    item => item.Conference === 'NFC' && item.Division === 'North'
  )
  const nfcSouth = standings.filter(
    item => item.Conference === 'NFC' && item.Division === 'South'
  )

  return (
    <StandingsContext.Provider
      value={{
        standings,
        afcWest,
        afcEast,
        afcNorth,
        afcSouth,
        nfcWest,
        nfcEast,
        nfcNorth,
        nfcSouth,
      }}
    >
      {children}
    </StandingsContext.Provider>
  )
}

export default StandingsContext

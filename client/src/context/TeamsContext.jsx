import { createContext, useState, useEffect } from 'react'

const API_TEAMS =
  'https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=1f12ca4661284f288d5f6bbd9e7e503b'

const TeamsContext = createContext()

export const TeamsContextProvider = ({ children }) => {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    fetch(API_TEAMS)
      .then(res => res.json())
      .then(result => {
        setTeams(result)
      })
  }, [])
  const afcWest = teams.filter(
    item => item.Conference === 'AFC' && item.Division === 'West'
  )
  const afcEast = teams.filter(
    item => item.Conference === 'AFC' && item.Division === 'East'
  )
  const afcNorth = teams.filter(
    item => item.Conference === 'AFC' && item.Division === 'North'
  )
  const afcSouth = teams.filter(
    item => item.Conference === 'AFC' && item.Division === 'South'
  )
  const nfcWest = teams.filter(
    item => item.Conference === 'NFC' && item.Division === 'West'
  )
  const nfcEast = teams.filter(
    item => item.Conference === 'NFC' && item.Division === 'East'
  )
  const nfcNorth = teams.filter(
    item => item.Conference === 'NFC' && item.Division === 'North'
  )
  const nfcSouth = teams.filter(
    item => item.Conference === 'NFC' && item.Division === 'South'
  )

  //
  return (
    <TeamsContext.Provider
      value={{
        teams,
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
    </TeamsContext.Provider>
  )
}
//

export default TeamsContext

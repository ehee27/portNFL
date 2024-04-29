import { useEffect, useState } from 'react'
import BoxScore from './BoxScore'
// const currentSeasonAPI = 'https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=1f12ca4661284f288d5f6bbd9e7e503b'

// const lastWeekAPI = 'https://api.sportsdata.io/v3/nfl/scores/json/LastCompletedWeek?key=1f12ca4661284f288d5f6bbd9e7e503b'

const ScoreBoard = () => {
  const [scores, setScores] = useState([])
  useEffect(() => {
    fetch(
      'https://api.sportsdata.io/v3/nfl/scores/json/ScoresBasic/2023REG/17?key=1f12ca4661284f288d5f6bbd9e7e503b'
    )
      .then(res => res.json())
      .then(result => setScores(result))
  }, [])
  //

  const fetchGames = week => {
    fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/ScoresBasic/2023REG/${week}?key=1f12ca4661284f288d5f6bbd9e7e503b`
    )
      .then(res => res.json())
      .then(result => setScores(result))
  }
  const handleWeek = e => {
    fetchGames(parseInt(e.target.value))
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 bg-zinc-200 py-1 px-3">
      <div className="md:col-span-1 p-2 flex justify-center items-center">
        <form>
          <select
            className="bg-white text-sm py-1 px-3 rounded-full w-[100%]"
            onChange={handleWeek}
          >
            <option value={1}>Week 1</option>
            <option value={2}>Week 2</option>
            <option value={3}>Week 3</option>
            <option value={4}>Week 4</option>
            <option value={5}>Week 5</option>
            <option value={6}>Week 6</option>
            <option value={7}>Week 7</option>
            <option value={8}>Week 8</option>
            <option value={9}>Week 9</option>
            <option value={10}>Week 10</option>
            <option value={11}>Week 11</option>
            <option value={12}>Week 12</option>
            <option value={13}>Week 13</option>
            <option value={14}>Week 14</option>
            <option value={15}>Week 15</option>
            <option value={16}>Week 16</option>
            <option value={17}>Week 17</option>
            <option value={18}>Week 18</option>
          </select>
        </form>
      </div>
      <div className="flex md:col-span-5 rounded-md overflow-x-scroll">
        {' '}
        {scores.map((item, i) => (
          <BoxScore game={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export default ScoreBoard

import { Outlet } from 'react-router-dom'
import ScoreBoard from './scoreboard/ScoreBoard'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="min-h-screen">
      <ScoreBoard />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout

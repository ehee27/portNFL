import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TiThMenu } from 'react-icons/ti'

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false)
  const toggleMenu = () => {
    setDisplayMenu(!displayMenu)
  }
  return (
    <nav className="flex w-[100%] bg-black/80 text-white m-0 shadow-md shadow-black/80">
      {/* LEFT SIDE MENU ------------------ */}
      <div className="bg-gradient-to-r from-red-500 to-red-800 py-1 pl-3 w-[65%] md:w-[35%] border-r-8 border-red-900">
        <Link to="/">
          <p className="text-md md:text-3xl text-white text-left font-serif font-black">
            NFL NEWS
          </p>
        </Link>
      </div>

      {/* RIGHT SIDE MENU ------------------ */}
      <div className="flex justify-end w-[100%] border-l-8 border-red-900">
        {/* RESPONSIVE MENU DIV --- contains Links, frame position (top-0 vs top-[-100%]) and opacity (bg-color) based on mobile */}
        <div
          className={`absolute right-0 md:static flex justify-center items-center min-h-[60vh] md:min-h-fit w-full md:w-auto ${
            displayMenu ? 'top-0 bg-black/90' : 'top-[-100%] bg-transparent'
          } transition-all duration-500 w-[50%] z-10`}
        >
          {/* MENU LINKS --- contained within parent so not visible on med (top-[-100%])  */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              to="teams"
              className="font-black hover:cursor-pointer transition-all"
            >
              TEAMS
            </Link>
            <a
              href="#standings"
              className="font-black hover:cursor-pointer transition-all"
            >
              STANDINGS
            </a>
          </div>
        </div>

        {/* RESPONSIVE ICON --- independant of Links div, simply set to 'hidden' on medium */}
        <div className="flex justfiy-center items-center pr-3 md:pr-10">
          <TiThMenu
            onClick={toggleMenu}
            className="text-xl cursor-pointer md:hidden z-10"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

// import { useEffect, useState } from 'react'
import './App.css'
import TeamList from './components/teams/TeamList'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import { TeamsContextProvider } from './context/TeamsContext'
import { StandingsContextProvider } from './context/StandingsContext'
import Layout from './components/Layout'
import TeamDetails from './components/teams/TeamDetails'

function App() {
  return (
    <TeamsContextProvider>
      <StandingsContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="teams">
              <Route index element={<TeamList />} />
              <Route path=":id" element={<TeamDetails />} />
            </Route>
          </Route>
        </Routes>
      </StandingsContextProvider>
    </TeamsContextProvider>
  )
}

export default App

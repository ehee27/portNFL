import Carousel from './Carousel'
import NewsFeed from './NewsFeed'
import Playoffs from './standings/Playoffs'
import Standings from './standings/Standings'
const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-6 py-3">
        <div className="col-span-4">
          <Carousel />
        </div>
        <div className="md:p-2 col-span-2">
          <NewsFeed />
        </div>
      </div>
      <div className="">
        <Standings />
        <Playoffs />
      </div>
    </div>
  )
}

export default Home

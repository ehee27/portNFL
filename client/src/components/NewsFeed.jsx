import { useEffect, useState } from 'react'

const gamesAPI =
  'https://api.sportsdata.io/v3/nfl/scores/json/News?key=1f12ca4661284f288d5f6bbd9e7e503b'

const NewsFeed = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch(gamesAPI)
      .then(res => res.json())
      .then(result => setNews(result))
  }, [])
  // console.log('This is the news', news)
  return (
    <div className="rounded-lg">
      <div className="flex">
        <p className="font-serif font-black text-zinc-400 pl-1 md:pl-3">
          HEADLINES
        </p>
      </div>
      <div className="h-[490px] overflow-y-scroll overflow-x-hidden mb-2">
        {news.map((item, i) => (
          <div
            className="shadow mb-2 py-1 px-1 md:px-3 bg-white rounded"
            key={i}
          >
            <div className="flex flex-col text-left py-1">
              {' '}
              <p className="text-sm text-zinc-700 font-extrabold mb-1">
                {item.Title}
              </p>
              <p className="text-zinc-400 text-xs font-bold">
                {item.OriginalSource}
              </p>
              <p className="mt-2">
                <span className="text-sm text-zinc-700">
                  {item.Content.substring(0, 70)}...
                </span>
                <a href={item.Url} target="_blank">
                  <span className="text-orange-500 text-xs font-black">
                    {' '}
                    More
                  </span>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsFeed

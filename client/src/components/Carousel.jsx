import { articles } from '../articleData'

const Carousel = () => {
  return (
    <>
      <div className="carousel w-full">
        {articles.map((article, i) => (
          <div
            id={`item${i}`}
            key={i}
            className="carousel-item w-full flex flex-col"
          >
            <div className="">
              <img
                src={article.image}
                className="w-full h-[200px] md:h-[380px]"
              />
            </div>
            <div className="text-left my-3">
              <p className="text-black text-xl font-bold">{article.title}</p>
              <p className="text-black text-md">{article.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {articles.map((article, i) => (
          <a href={`#item${i}`} key={i} className="btn btn-xs">
            {i + 1}
          </a>
        ))}
      </div>
    </>
  )
}

export default Carousel

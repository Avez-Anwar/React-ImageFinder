import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function ImageFinder() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [car, setCar] = useState("car");

  const client_id = "4mB0CC1xdwTfTQGjF1v1uO9vS2Z8ubzBPd4X0B86IEU";
  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&page=${page}`;

  const fetchImages = () => {
    axios
      .get(fetchUrl, {})
      .then((response) => {
        setData([...data, ...response.data.results]);
      })
      .catch((error) => {
        console.log(error);
      });
    setPage(page + 1);
  };
  const searchImages = (e) => {
    if (e.keyCode === 13) {
      setQuery(e.target.value);
      setData([]);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query]);

  console.log(data);

  return (
    <div>
      <input
        type="text"
        onKeyDown={(e) => searchImages(e)}
        placeholder="Search Image"
      />
      <InfiniteScroll
        dataLength={data.length}
        next={fetchImages}
        hasMore={hasMore}
        loader={<p>Load more...</p>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Loading...</b>
          </p>
        }
      >
        <div>
          {data.map((data, key) => (
            <div key={key}>
              <img
                src={data.urls.small}
                className="image"
                alt={data.alt_description}
              />
              <h4> {data.alt_description} 📸</h4>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default ImageFinder;

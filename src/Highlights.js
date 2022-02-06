import React from "react";

const Highlights = () => {
  const [videos, setVideos] = React.useState([]);
  const loadData = async () => {
    const getData = await fetch("https://www.scorebat.com/video-api/v3/");
    const data = await getData.json();
    const german = data.response.filter((value, index) => {
      if (data.response[index].competition == "GERMANY: Bundesliga") {
        return value;
      }
    });
    setVideos(german);
    console.log(videos);
  };
  React.useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <h2>Football Highlights for German bundeliga</h2>
      <div>
        <ul>
          {videos.map((video) => {
            return (
              <li key={video.id}>
                <h3>{video.title}</h3>
                <div>
                  <img
                    src={video.thumbnail}
                    width="100px"
                    height="100px"
                    alt=""
                  />
                  <p>{video.date}</p>
                </div>
                <div>
                  <video
                    height="window.height/2"
                    width="window.height/2"
                    controls
                  >
                    <source
                      src={video.matchviewUrl.ogg}
                      type="video.matchviewUrl/ogg"
                    />
                  </video>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Highlights;

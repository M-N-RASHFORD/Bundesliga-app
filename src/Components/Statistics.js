import React from "react";

const TopScorers = () => {
  const [topScorers, setTopScorers] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=c94495b0-7d0d-11ec-a59f-63c4906104b2&season_id=496"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setTopScorers(data.errors);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h2>Top scorers</h2>
      <div>
        {topScorers.map((item) => (
          <li key={item.id}>
            <h1>{item.season_id}</h1>
          </li>
        ))}
      </div>
    </div>
  );
};

export default TopScorers;

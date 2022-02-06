import React from "react";

const Table = () => {
  const [tables, setTables] = React.useState([]);
  let load = async () => {
    const data = await fetch(
      "https://app.sportdataapi.com/api/v1/soccer/standings?apikey=c94495b0-7d0d-11ec-a59f-63c4906104b2&season_id=496"
    );
    const response = await data.json();
    console.log(response.data.standings);
    setTables(response.data.standings);
  };
  React.useEffect(() => {
    load();
  }, []);
  return (
    <div>
      <h2>Bundesliga table</h2>
      <table>
        <tr>
          <th>Club</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>Points</th>
          <th>Position</th>
        </tr>
        {tables.map((table) => {
          return (
            <tr key={table.id}>
              <td>{table.team_id}</td>
              <td>{table.overall.won}</td>
              <td>{table.overall.draw}</td>
              <td>{table.overall.lost}</td>
              <td>{table.overall.goals_scored}</td>
              <td>{table.overall.goals_against}</td>
              <td>{table.overall.goals_diff}</td>
              <td>{table.points}</td>
              <td>{table.position}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;

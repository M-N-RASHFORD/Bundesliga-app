import React from 'react';

const Players = () => {
    const [players, setPlayers] = React.useState([]);
    React.useEffect(() => {
        fetch('https://app.sportdataapi.com/api/v1/soccer/players?apikey=c94495b0-7d0d-11ec-a59f-63c4906104b2&country_id=48&min_age=22&max_age=37')
        .then(resp => resp.json())
        .then((data) => {
            setPlayers(data.data);
            console.log(data);
        });
    }, []);
    return (
        <div>
            <h2>Players in the League</h2>
            <h1>Names</h1>
            <div>
                <table>
                    <tr>
                        <th>
                            Player
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Country
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {players.map((player) => {
                                return (
                                    <u>
                                        <li key={player.id}>{player.firstname} {player.lastname}</li>
                                    </u>
                                );
                            })}
                        </td>
                        <td>
                            {players.map((player) => {
                                return (
                                    <u>
                                        <li key={player.id}>{player.age}</li>
                                    </u>
                                );
                            })}
                        </td>
                        <td>
                            {players.map((player) => {
                                return (
                                    <u>
                                        <li key={player.id}>{player.country.name}</li>
                                    </u>
                                );
                            })}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Players;
import React from 'react';

const Table = () => {
    const [tables, setTables] = React.useState([]);
    let load = async() => {
        const data = await fetch('https://app.sportdataapi.com/api/v1/soccer/standings?apikey=c94495b0-7d0d-11ec-a59f-63c4906104b2&season_id=496');
        const response = await data.json();
        console.log(response.data.standings);
        setTables(response.data.standings);
    }
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
                <tr>
                    <td>
                        {tables.map((table) => {
                            return (
                                <ul>
                                    <li key={table.id}>
                                        <p>{table.team_id}</p>
                                    </li>
                                </ul>
                            );
                        })}
                    </td>
                    <td>
                    {tables.map((table) => {
                            return (
                                <ul>
                                    <li key={table.id}>
                                        <p>{table.overall.won}</p>
                                    </li>
                                </ul>
                            );
                        })} 
                    </td>
                    <td>
                    {tables.map((table) => {
                            return (
                                <ul>
                                    <li key={table.id}>
                                        <p>{table.overall.draw}</p>
                                    </li>
                                </ul>
                            );
                        })} 
                    </td>
                    <td>
                    {tables.map((table) => {
                            return (
                                <ul>
                                    <li key={table.id}>
                                        <p>{table.overall.lost}</p>
                                    </li>
                                </ul>
                            );
                        })} 
                    </td>
                    <td>
                    {tables.map((table) => {
                            return (
                                <ul>
                                    <li key={table.id}>
                                        <p>{table.overall.goals_scored}</p>
                                    </li>
                                </ul>
                            );
                        })} 
                    </td>
                    <td>
                    {tables.map((table) => {
                            return (
                                <ul>
                                    <li key={table.id}>
                                        <p>{table.overall.goals_against}</p>
                                    </li>
                                </ul>
                            );
                        })} 
                    </td>
                    <td>
                    {tables.map((table) => {
                            return (
                                <ul>
                                    <li key={table.id}>
                                        <p>{table.overall.goals_diff}</p>
                                    </li>
                                </ul>
                            );
                        })} 
                    </td>
                    <td>
                    {tables.map((table) => {
                            return (
                                <ul>
                                    <li key={table.id}>
                                        <p>{table.points}</p>
                                    </li>
                                </ul>
                            );
                        })} 
                    </td>
                    <td>
                    {tables.map((table) => {
                            return (
                                <ul>
                                    <li key={table.id}>
                                        <p>{table.position}</p>
                                    </li>
                                </ul>
                            );
                        })} 
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Table;

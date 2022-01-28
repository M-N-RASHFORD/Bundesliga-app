import React from 'react';

const Teams = () => {
    const [teams, setTeams] = React.useState([]);
     const loadData = async() => {
         const resp = await fetch('https://app.sportdataapi.com/api/v1/soccer/teams?apikey=c94495b0-7d0d-11ec-a59f-63c4906104b2&country_id=48');
         const data = await resp.json();
         setTeams(data.data);
         console.log(teams);
     }
    React.useEffect(() => {
        loadData();
    }, []);
    return (
        <div>
            <h1>Teams in german</h1>
            <>
                {teams.map((team) => {
                    return (
                        <ul>
                            <li key={team.id}>
                                <div>
                                    <img src={team.logo} height="70px" width="70px" alt=""/>
                                </div>
                                <div>
                                    <h3>{team.name}</h3>
                                    <p>{team.short_code}</p>
                                </div>                            
                            </li>
                        </ul>
                    );
                })}
            </>
        </div>
    );
}

export default Teams;
import React from 'react';

//const apikey = 'c94495b0-7d0d-11ec-a59f-63c4906104b2';
const Fixtures = () => {
    React.useEffect(() => {
        fetch('https://app.sportdataapi.com/api/v1/soccer/stages/1?apikey=apikey')
        .then(resp => resp.json())
        .then((data) => {
            console.log(data);
        })
    }, []);
    return (
        <div>
            <h2>Bundesliga fixtures for 2021/22 season</h2>
        </div>
    );
}

export default Fixtures;
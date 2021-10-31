import React, { useState, useEffect }  from 'react';
const Teams = () => {
const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch("https://csiddu-website-backend.herokuapp.com/teams")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setTeams(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <ul>
                    {teams.map(team => (
                    <li key={team.id}>
                        <div>
                            <h2>{team.name}</h2>
                            <p>{team.position}</p>
                            <img src={team.image} alt={team.name}  width="150" height="300"></img>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default Teams;
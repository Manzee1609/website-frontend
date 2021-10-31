import React, { useState, useEffect }  from 'react';
const Events = () => {
const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch("https://csiddu-website-backend.herokuapp.com/events")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setEvents(data);
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
                    {events.sort((a, b) => (a.id) > (b.id) ? -1 : 0).map(event => (
                    <li key={event.id}>
                        <div>
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                            <img src={event.image} alt={event.title}  width="400" height="200"></img>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default Events;
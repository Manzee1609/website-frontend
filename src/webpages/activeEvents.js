import React, { useState, useEffect }  from 'react';
const ActiveEvents = () => {
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
                    {events.sort((a, b) => (a.id) > (b.id) ? -1 : 0).map(event => (
                        <div>
                            {event.register ? <h2> {event.title} </h2> : null}
                            {event.register ? <p>{event.description}</p> : null}
                            {event.register ? <img src={event.image} alt={event.register ? event.title : null}  width="400" height="200"></img> : null}
                        </div>
                    ))}
            </div>
        );
    }
}
export default ActiveEvents;
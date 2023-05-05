import { useEffect, useState } from "react";
import { Tour } from "./Tour";


export const Tours = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [tours, setTours] = useState([])

    const fetchTours = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://course-api.com/react-tours-project');
            const tours = await response.json();
            setIsLoading(false)
            setTours(tours)
            return tours;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    useEffect(() => {
        fetchTours();
    }, []);

    if(isLoading) {
        return (
            <main>
                <div className="loading"></div>
            </main>
        );
    }

    if(tours.length == 0) {
        return (
            <main>
                <div className='title'>
                    <h2>No Tours Left! Do you wish to refresh the tours</h2>
                    <button onClick={() => fetchTours()} className="btn" style={{marginTop:'2rem'}}>Refresh Tours</button>
                </div>
            </main>
        );
    }

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    return (
        <main>
            <section>
                <div className="title">
                    <h2>Our Tours</h2>
                    <div className="title-underline"></div>
                </div>
                <div className="tours">
                {tours.map((tour) => {
                    return (
                        <div>
                            <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                        </div>
                    )
                })}
                </div>
            </section>
        </main>
    )

}


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
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {tours.map((tour) => {
                return <Tour {...tour} />
            })}
        </div>
    )

}


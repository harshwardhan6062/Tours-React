import { useState, useEffect } from "react";

export const Tour = ({ id, image, info, name, price, removeTour }) => {

    const [readMore, setReadMore] = useState(false);
    const shortInfo = `${info.substring(0, 200)}...`;

    return (
        <article className="single-tour">
            <img src={image} className="img"/>
            <span className="tour-price">${price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>
                    {readMore ? info : shortInfo}
                    <button className='info-btn' onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Read less": "Read More"}
                    </button>
                </p>
                <button onClick={() => removeTour(id)} className="delete-btn btn-block btn">Remove</button>
            </div>
        </article>
    );
}



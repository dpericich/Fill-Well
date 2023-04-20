import React, { FC, ReactElement, useState, useEffect } from 'react';

const SPPackout: FC = (): ReactElement => {
    const [packouts, setPackouts] = useState([])
    
    useEffect(() => {
        // have to have a useEffect to load initial list of items from the back end
    }, [])

    return(
        // Will want to make this a CSS Grid to make it 2D responsive
        <div>Hello</div>
    )
};

export default SPPackout;
import React, { FC, ReactElement, useEffect, useState } from 'react';

const LPPackout: FC = (): ReactElement => {
    const [packouts, setPackouts] = useState([])
    
    useEffect(() => {
        // have to have a useEffect to load initial list of items from the back end
    }, [])

    return(
        // Will want to make this a CSS Grid to make it 2D responsive
        <div>Hello</div>
    )
};

export default LPPackout;
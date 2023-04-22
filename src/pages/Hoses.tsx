import React, { FC, ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { options } from '../data/hoses_data';

const Hoses: FC = (): ReactElement => {
    const [packouts, setPackouts] = useState([])
    
    useEffect(() => {
        // have to have a useEffect to load initial list of items from the back end
        // setPackouts(...options["data"]);
        console.log(options["data"])
    }, [])

    const OptionsContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-columns: repeat(auto-fit, minmax(300px, 100%));
        column-gap: 5rem;
        row-gap: 2.3rem;
        justify-items: center;
        // https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
        // https://css-tricks.com/snippets/css/complete-guide-grid/#aa-fluid-columns-snippet
    `

    // Need to refactor this for sp, lp and hoses
    return(
        <OptionsContainer>
            {options.data.map((option) => (
                <Button text={option.name} path={option.path} />
            ))}
        </OptionsContainer>
    )
};

export default Hoses;
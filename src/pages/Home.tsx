import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import Button from '../components/Button'

const Home: FC = (): ReactElement => {
    const HomeContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & > a {
            margin: 1rem 0;
        }
    `

    return(
        <HomeContainer>
            <Button text="Production Schedule" path="/production-schedule" textColor = 'white' outlineColor = 'red' bodyColor = 'black' />
            <Button text="SP Packout" path="/sp-packout" textColor = 'white' outlineColor = 'red' bodyColor = 'black' />
            <Button text="LP Packout" path="/lp-packout" textColor = 'white' outlineColor = 'red' bodyColor = 'black' />
            <Button text="Hoses" path="/hoses" textColor = 'white' outlineColor = 'red' bodyColor = 'black' />
        </HomeContainer>
    )
};

export default Home;
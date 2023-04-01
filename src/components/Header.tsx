import React, { FC, ReactComponentElement, ReactElement } from 'react';
import styled from 'styled-components';

// 
const Header: FC = (): ReactElement => {
    // Will add in the style components here
    const HeaderContainer = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: white;
        width: 100%;
        position: relative;
    `

    const Logo = styled.img`
        width: 400px
    `

    const HomeButton = styled.img`
        // Add in stuff here
        // Will make this absolute to the top right corner
    `


    return(
        <HeaderContainer>
            <Logo src="/logo.png" alt="fill-well-logo" />
            {/* HomeButton */}
        </HeaderContainer>
    )
};

export default Header;
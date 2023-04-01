import React, { FC, ReactElement } from 'react';
import styled from 'styled-components'

const Footer: FC = (): ReactElement => {
    const FooterContainer = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: white;
        color: red;
        width: 100%;
        margin-top: 2rem;
    `

    const CopyrightText = styled.div`

    `

    return(
        <FooterContainer>
            <CopyrightText>	&#169;2023 Fill-Well Company. All Rights Reserved</CopyrightText>
        </FooterContainer>
    )
};

export default Footer;
import React, { FC, HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';
import { isPropertySignature } from 'typescript';

interface ButtonProps {
    textColor: string;
    outlineColor: string;
    bodyColor: string;
    path: string;
    text: string;
}

const Button = (props: ButtonProps): ReactElement => {
    const ButtonContainer = styled.a`
        font-size: 2.3rem;
        text-decoration: none;
        color: ${props.textColor};
        background-color: ${props.bodyColor};
        padding: 1.5rem;
        border: 1px solid ${props.outlineColor};
        border-radius: 5px;
        width: 100%;
        box-shadow: 3px 3px rgba(0, 0, 0, 0.2);

        &:hover,
        &:active {
            transform: scale(0.98);
        }
    `

    return(
        <ButtonContainer href={`${props.path}`}>
            {props.text}
        </ButtonContainer>
    )
};

export default Button
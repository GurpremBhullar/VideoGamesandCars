import React from 'react';
import styled from 'styled-components';
import banner from '../img/video4.mp4';
import etc from '../img/logo2.jpg'; 
import {InnerLayout} from '../Layouts'
import MainContent from './MainContent';

function MainArea() {
    return (
        <MainAreaStyled>
            <video src={banner} muted playsInline autoPlay loop></video>
            <img src={etc} alt='' className='overlay' />
            <InnerLayout>
                <MainContent />
            </InnerLayout>
        </MainAreaStyled>
    )
}

const MainAreaStyled = styled.div`
    width: 100%;
    height: 85vh;
    position: relative;
    overflow: hidden;
    
    .overlay {
        width: 60%;
        height: 20%;
        position: absolute;
        left: 5px;
        bottom: 1px;
        opacity: 60%;
    }

    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.7;
    }
`;

export default MainArea;
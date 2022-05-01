import React from "react";
import styled from 'styled-components';
import Navigation from "./Navigation";
import SmallHeading from "./SmallHeading";
import remote from '../img/arcade.jpg';

function MainContent() {
    return (
        <MainContentStyled>
            <Navigation />
            <div className="content">
            <div className="left">
                    <SmallHeading title={'Subscribe'} identifier={'Before'} />
                    <h3>
                        --To get the latest information on <span className='GradientText'>2022-23 models and upcoming games</span>
                    </h3>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer 
                    </p>
            </div>
            <div className="right">
                <img src={remote} alt="remote" />
            </div>
            </div>
        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 80%;
    height: 100%;
    transform: translateX(-50%);
    .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100%;
        width: 100%;
        .left{
            display:flex;
        }
    }
`;

export default MainContent;
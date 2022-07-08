import styled from "styled-components"

export const LoadingContainer = styled.div`
width: 100%;
height: 390px;
display: flex;
position: relative;
top: 30%;
justify-content: center;

`
export const PulsingHeart = styled.img`
width: 25%;
height: 25%;
animation: pulsingHeart 1s infinite;

@keyframes pulsingHeart {
    0% {transform: scale(1);}
    15% {transform: scale(.97);}
    25% {transform: scale(.9);}
    35% {transform: scale(1.1);}
    45% {transform: scale(.9);}
    45% {transform: scale(1.1);}
    65% {transform: scale(1.05);}
    100% {transform: scale(1);}
}
`
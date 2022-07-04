import React from "react";
import styled from "styled-components";

const CardPequenoContainer = styled.div`
 .cardpequeno-container {
    display: flex;
    align-items: center;
    border: 1px solid white;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;
}
.cardpequeno-container > img {
    width: 40px;
    margin-right: 10px;
}
.cardpequeno-container h4 {
    margin-bottom: 15px;
}

.pequeno-container > div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
} 
`

function CardPequeno(props) {
    return (
        <CardPequenoContainer>
        <div className="cardpequeno-container">
                        <img src={ props.imagem } />
                <p><b>{props.email}</b> <text>{props.descricao}</text></p>
                <p><b>{props.endereco}</b> <text>{props.text}</text></p>
               
            </div>
            </CardPequenoContainer>
    )
}

export default CardPequeno;
import React from "react";
import styled from "styled-components";

const CardGrandeContainer = styled.div ` 
.bigcard-container {
    display: flex;
    align-items: center;
    border: 1px solid white;
    padding: 20px 10px;
    margin-bottom: 15px;
    height: 150px;
}

.bigcard-container > img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
}

.bigcard-container h4 {
    margin-bottom: 15px;
    margin: 0;
}

.bigcard-container > div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}
`


function CardGrande(props) {
    return (
        <CardGrandeContainer>
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
        </CardGrandeContainer>
    )
}

export default CardGrande;
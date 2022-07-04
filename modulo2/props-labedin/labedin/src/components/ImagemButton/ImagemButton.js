import React from "react";
import styled from "styled-components";

const ImagemButtonContainer = styled.div`
.image-button-container {
    display: flex;
    align-items: center;
    border: 1px solid white;
    border-radius: 10px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
}

.image-button-container > img {
    width: 20px;
    margin-right: 5px;
    
}

.image-button-container > p{
    text-align: center;

}
` 
function ImagemButton(props) {
    return (
        <ImagemButtonContainer>
        <div className="image-button-container">
            <img src={props.imagem}/>
            <p>{props.texto}</p>
        </div>
        </ImagemButtonContainer>
    )
}

export default ImagemButton;
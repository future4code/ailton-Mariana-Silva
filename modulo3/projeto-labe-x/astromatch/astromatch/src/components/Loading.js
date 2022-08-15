import Heart from "../assets/img/HeartLoading.png"
import { LoadingContainer, PulsingHeart } from "./loadingSyled"

function Loading() {
    return (
        <LoadingContainer>
            <PulsingHeart src={Heart} alt="loading"/>
        </LoadingContainer>
    )
    
}

export default Loading
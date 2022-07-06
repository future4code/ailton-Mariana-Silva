import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL, headers } from '../../../constants/urls'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'

function ProfilesPage() {

    const [profile, setProfile] = useState()

    useEffect(() => {
        getProfile()
    }, []
    )

    const getProfile = () => {
        const url = `${BASE_URL}/${headers}/person`

        axios
            .get(url)
            .then((response) => {
                setProfile(response.data.profile)
            })
            .catch((error) => {
                alert("Tente novamente mais tarde")
                console.log(error.message)
            })
    }

    const chooseProfile = (profileId, choice) => {
        const url = `${BASE_URL}/${headers}/choose-person`

        const body = {
            id: profileId, 
            choice: true,
            isMatch: true
        }

        axios
        .post(url, body)
        .then((response) => {
            if (choice && response.data.isMatch){
                alert("It's a Match!")
            }
            getProfile()
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    const resetProfiles = () => {
        const url = `${BASE_URL}/${headers}/clear`

        axios
        .put(url)
        .then(() => {
            alert("Perfis resetados com sucesso!")
            getProfile()
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    const profileCard = profile ? (
        <section>
            <img src={profile.photo} alt= {`Profile pic of ${profile.name}`} />

            <h3>{profile.name}, {profile.age}</h3>
            <p>{profile.bio}</p>


            < GrClose onClick={() => chooseProfile(profile.id, false)} />           
            < BsFillSuitHeartFill onClick={() => chooseProfile(profile.id, true)} />
            </section>
    ) : (
        <div>
        <h3>Seus Matches Acabaram! Clique em 'Resetar Perfis" para reiniciar</h3>
        </div>
    )
    
    return (
        <div>
            <h2>Perfis</h2>
            {profileCard}
            <button onClick={ () => resetProfiles() }>Resetar Perfis</button>
         </div>
    )
}

export default ProfilesPage
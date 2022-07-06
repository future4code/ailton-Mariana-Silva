import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL, headers } from '../../../constants/urls'



function MatchesPage () {

    const [matches, setMatches] = useState(undefined)

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        const url = `${BASE_URL}/${headers}/matches`

        axios
        .get(url)
        .then((response) => {
            setMatches(response.data.matches)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    const allMatches = matches &&  matches.map((match) => {
        return (
            <figure key={match.id}>
                <img src={match.photo} alt={`Profile pic of ${match.name}`} />
                
                <div className="name">{match.name}</div>
                <hr />
            </figure>
        )
    })

    return (
        <section>
            <h2>Matches</h2>
            {allMatches}
        </section>
    )
}

export default MatchesPage
import { SiTinder } from 'react-icons/si'
import { FaUserFriends } from 'react-icons/fa'

function Header (props) {
    return (
        <div>
            <h1>AstroMatch</h1>

            {props.page === 'profiles-page' ?
                < SiTinder onClick={props.goToMatchesPage} />
                : < FaUserFriends onClick={props.goToProfilesPage} />
            }
            
        </div>
    )
}

export default Header
import './index.scss'
import RoomMateLogo from '../../assets/images/RoomMateLogo.png'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/home'>
            <img src={RoomMateLogo} alt="logo" />
        </Link>
        {/* <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
        </nav> */}
    </div>
)

export default Sidebar
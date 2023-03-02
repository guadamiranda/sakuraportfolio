import '../../Styles/navbar.scss'
import sakuraLogo from '../../Assets/sakuraNotDetails.png'

export const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='navbar__left-size'>
                <img className='navbar__logo' src={sakuraLogo}></img>
            </div>
                
            <div className='navbar__rigth-size'>
                <span className='navbar__option'>About Me</span>
                <span className='navbar__option'>Skills</span>
                <span className='navbar__option'>Projects</span>
                <span className='navbar__option'>Contact</span>
            </div>
               
        </div>
    )
}
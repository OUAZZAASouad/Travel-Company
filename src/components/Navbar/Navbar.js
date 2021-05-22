import Logo from '../Templates/Logo';
import './navbar.css';
const Navbar = () => {
    return(
        <div className = 'navbar'>
            <div className = 'company'>
                <Logo width = '150px' height = '80px'/>
                <p>Travel Company</p>
            </div>
            <div className = 'items'>
                <a href = '#about' className = 'active'>About us</a>
                <a href = '#career'>Career</a>
                <a href = '#departments'>Departments</a>
            </div>
            
        </div>
    )
}

export default Navbar;
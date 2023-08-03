import airbnb_logo from '../images/airbnb_1.png';

function Navbar(){
    return(
        <div className='navbar--div'>
        <img src={airbnb_logo} alt='airbnb logo' />
        </div>
    )
}

export default Navbar;
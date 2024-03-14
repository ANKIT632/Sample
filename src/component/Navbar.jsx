import { NavLink } from 'react-router-dom';
import NavIcon from '../assets/icons/icon.svg'

function Navbar() {
  return (
    <div className='flex'>
        <img className='pl-[10px]' src={NavIcon} alt="icon"/>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Features</NavLink>
        <NavLink to="/">Community</NavLink>
        <NavLink to="/">Blog</NavLink>
        <NavLink to="/">Pricing</NavLink>
        <button className='text-[12px] bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded'>Register Now</button>
    </div>
  )
}

export default Navbar;
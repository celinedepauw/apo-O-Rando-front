import React from 'react';

// icons from https://react-icons.github.io/react-icons
import { BiHomeHeart, BiPlus, BiPlusMedical } from 'react-icons/bi';
// import { IoCreate } from 'react-icons/io';
import { FaHiking } from 'react-icons/fa';
// to connection - connected
import { IoPersonCircleOutline, IoMdPerson } from 'react-icons/io';


import './mobilenav.scss';

const MobileNav = () => (
  <nav className="mobilenav">
    <button className="mobilenav_home" type="submit">
      <BiHomeHeart size={46} />
    </button>
    <button className="mobilenav_create" type="submit">
      <FaHiking size={46} />
      <BiPlusMedical size={23} className="mobilenav_plus" />
    </button>
    <button className="mobilenav_connected" type="submit">
      <IoMdPerson size={46} />
    </button>
  </nav>

);

export default MobileNav;
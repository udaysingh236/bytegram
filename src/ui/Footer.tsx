import { NavLink } from 'react-router-dom';
import { routeNames } from '../utils/routeNames';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { HiOutlinePlusCircle } from 'react-icons/hi2';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { HiOutlineHome } from 'react-icons/hi2';
import { HiOutlineSearch } from 'react-icons/hi';

function Footer() {
  return (
    <div className=" flex items-center justify-between overflow-hidden rounded-xl px-4 py-2">
      <NavLink
        to={routeNames.home}
        className={({ isActive }) => (isActive ? 'rounded-xl bg-stone-300 p-1' : 'p-1')}
      >
        <HiOutlineHome size="2rem" />
      </NavLink>
      <NavLink
        to={routeNames.search}
        className={({ isActive }) => (isActive ? 'rounded-xl bg-stone-300 p-1' : 'p-1')}
      >
        <HiOutlineSearch size="2rem" />
      </NavLink>
      <NavLink
        to={routeNames.createPost}
        className={({ isActive }) => (isActive ? 'rounded-xl bg-stone-300 p-1' : 'p-1')}
      >
        <HiOutlinePlusCircle size="2rem" />
      </NavLink>
      <NavLink
        to={routeNames.settings}
        className={({ isActive }) => (isActive ? 'rounded-xl bg-stone-300 p-1' : 'p-1')}
      >
        <HiOutlineCog6Tooth size="2rem" />
      </NavLink>
      <NavLink
        to={routeNames.profile}
        className={({ isActive }) => (isActive ? 'rounded-xl bg-stone-300 p-1' : 'p-1')}
      >
        <HiOutlineUserCircle size="2rem" />
      </NavLink>
    </div>
  );
}

export default Footer;

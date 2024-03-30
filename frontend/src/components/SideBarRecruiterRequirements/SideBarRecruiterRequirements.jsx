import '../SideBar/SideBar.css'
import { NavLink, useLocation } from 'react-router-dom'

function SideBarRecruiterRequirements() {

  let { pathname } = useLocation();

  return (
    <>
      <nav className='side-bar'>
        <NavLink to='/recruiterrequirements/recruitersnumber'
          className={pathname !== '/recruiterrequirements/recruitersnumber'
            ? 'side-bar__link'
            : 'side-bar__link side-bar__link_active'}>Количество рекрутеров</NavLink>
        <NavLink to='/recruiterrequirements/recruiterstasks'
          className={pathname !== '/recruiterrequirements/recruiterstasks'
            ? 'side-bar__link'
            : 'side-bar__link side-bar__link_active'}>Обязанности рекрутера</NavLink>
        <NavLink to='/recruiterrequirements/recruiterspeculiarities'
          className={pathname !== '/recruiterrequirements/recruiterspeculiarities'
            ? 'side-bar__link'
            : 'side-bar__link side-bar__link_active'}>Требования к рекрутеру+</NavLink>
      </nav >
    </>
  )
}

export default SideBarRecruiterRequirements

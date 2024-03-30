import '../SideBar/SideBar.css'
import { NavLink, useLocation } from 'react-router-dom'

function SideBarCandidateRequirements() {

  let { pathname } = useLocation();

  return (
    <>
      <nav className='side-bar'>
        <NavLink to='/candidaterequirements/yearsofexperience'
          className={pathname !== '/candidaterequirements/yearsofexperience'
            ? 'side-bar__link'
            : 'side-bar__link side-bar__link_active'}>Опыт работы</NavLink>
        <NavLink to='/candidaterequirements/skills'
          className={pathname !== '/candidaterequirements/skills'
            ? 'side-bar__link'
            : 'side-bar__link side-bar__link_active'}>Навыки</NavLink>
        <NavLink to='/candidaterequirements/education'
          className={pathname !== '/candidaterequirements/education'
            ? 'side-bar__link'
            : 'side-bar__link side-bar__link_active'}>Образование</NavLink>
        <NavLink to='/candidaterequirements/portfolio'
          className={pathname !== '/candidaterequirements/portfolio'
            ? 'side-bar__link'
            : 'side-bar__link side-bar__link_active'}>Портфолио</NavLink>
      </nav >
    </>
  )
}
export default SideBarCandidateRequirements
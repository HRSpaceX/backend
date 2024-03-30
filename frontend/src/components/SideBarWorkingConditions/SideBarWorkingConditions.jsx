import '../SideBar/SideBar.css'
import { NavLink, useLocation } from 'react-router-dom'

function SideBarWorkingConditions() {

  let { pathname } = useLocation();

  return (
    <>
      <nav className='side-bar'>
        <NavLink to='/workingconditions/numberofvacancies'
          className={pathname !== '/workingconditions/numberofvacancies'
            ? 'side-bar__link'
            : 'side-bar__link side-bar__link_active'}>Количество сотрудников для поиска</NavLink>
        <NavLink to='/workingconditions/typesofreward'
          className={pathname !== '/workingconditions/typesofreward'
            ? 'side-bar__link'
            : 'side-bar__link side-bar__link_active'}>Варианты вознаграждения</NavLink>
        <NavLink to='/workingconditions/moneyforrecruiters'
          className={pathname !== '/workingconditions/moneyforrecruiters'
            ? 'side-bar__link'
            : 'side-bar__link side-bar__link_active'}>Размер вознаграждения</NavLink>
        <NavLink to='/workingconditions/candidatefirstworkingday'
          className={pathname !== '/workingconditions/candidatefirstworkingday'
            ? 'side-bar__link'
            : 'side-bar__link side-bar__link_active'}>Дата вступления в должность</NavLink>
        <NavLink to='/workingconditions/interview'
          className={pathname !== '/workingconditions/interview'
            ? 'side-bar__link'
            : 'side-bar__link side-bar__link_active'}>Формат собеседований</NavLink>
        <NavLink to='/workingconditions/firstinterviewdate'
          className={pathname !== '/workingconditions/firstinterviewdate'
            ? 'side-bar__link'
            : 'side-bar__link side-bar__link_active'}>Старт собеседований</NavLink>
      </nav >
    </>
  )
}

export default SideBarWorkingConditions
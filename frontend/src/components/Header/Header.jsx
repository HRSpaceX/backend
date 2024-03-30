import './Header.css'
import logo from '../../images/logo.svg'
import heart from '../../images/heart.svg'
import alarm from '../../images/alarm.svg'
import cursor from '../../images/cursor.svg'
import change from '../../images/change.svg';
import avatar from '../../images/avatar.svg'

function Header() {
  return (
    <header className='header'>

      <div className='header__logo-container'>
        <img className='header__logo' src={logo} alt='Logo' />
      </div>

      <nav className='header__menu'>
        <ul className='header__links'>
          <li>
            <a target='_blank' href='/' className='header__link' rel='noreferrer'>Главная</a>
          </li>
          <li>
            <a target='_blank' href='/' className='header__link' rel='noreferrer'>Мои заявки</a>
          </li>
          <li>
            <a target='_blank' href='/' className='header__link' rel='noreferrer'>Помощь
              <img
                className='header__cursor'
                src={cursor}
                alt='Курсор' /></a>
          </li>
        </ul>
      </nav>

      <div className='header__profile'>
        <button
          className='header__icons'
          type='button'>
          <img className='header__icon-image'
            src={heart}
            alt='Лайк' />
        </button>

        <button
          className='header__icons'
          type='button'>
          <img className='header__icon-image'
            src={alarm}
            alt='Уведомление' />
        </button>

        <div className='header__avatar'>
          <img className='header__avatar-photo'
            src={avatar}
            alt='Фото профиля' />
        </div>

        <div className='header__user'>
          <p className='header__user-name'>
            Анастасия Волошина
            <img
              className='header__change_profile'
              src={change}
              alt='Сменить пользователя' />
          </p>
          <p className='header__user-position'>
            #67334 Заказчик</p>
        </div>

      </div>
    </header>
  )
}

export default Header

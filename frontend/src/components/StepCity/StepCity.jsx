import './StepCity.css'
import Button from '../Button/Button.jsx'
import search from '../../images/search.svg';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';


function StepCity() {

  const{data, handleChange} =useForm();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  //примерно список для проверки
  const cities = ['Москва', 'Тверь', 'Санкт-Петербург', 'Екатеринбург', 'Cамара', 'Челябинск', 'Владивосток'];


  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/officeremote');


  return (
    <>
    <div className='city__container'>
      <input
        className={`city__input ${errorMessage && 'city__input_error'}`}
        type='text'
        name='city'
        list='cities'
        value={data.city || ''}
        onChange={handleChange}
        placeholder='Введите название города'
      />
      <datalist
        className='city__datalist'
        id='cities'>
        <img src={search} alt='Поиск' />
        {cities.map((city, index) => (
          <option key={index} value={city} />
        ))}
      </datalist>
      <span className='city__error'>{errorMessage}</span>
      {/* {errorMessage && <span className='city__error'>Город, куда требуется сотрубник, не указан</span>} */}
      <div className='city__current'><CurrentApplicationBox /></div>
    </div>
    <div className='city__button'>
        <Button
          onClick={onRedirect}
          stepIsValid={stepIsValid}
          buttonTitle='Далее'
          buttonType='button'
        />
      </div>
    </>
  )
}

export default StepCity

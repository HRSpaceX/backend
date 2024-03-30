import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StepHome.css'
import useForm from '../../hooks/useForm';
import Button from '../Button/Button';

function StepHome() {

  const { data, handleChange } = useForm();
  // console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/warning');

  return (
    <div className='home__container'>
      <div className='home__input-container'>
        <h1 className='home__title'>Название вакансии</h1>
        <input
          className={`home__input ${errorMessage && 'home__input_error'}`}
          type='text'
          value={data.name || ''}
          onChange={handleChange}
          name='name'
          placeholder="Введите название вакансии"
        />
        <span className='home__error'>{errorMessage}</span>
      </div>
      <div className='home__button'>
        <Button
          onClick={onRedirect}
          stepIsValid={stepIsValid}
          buttonTitle='Далее'
          buttonType='button'
        />
      </div>
    </div>
  )
}

export default StepHome;

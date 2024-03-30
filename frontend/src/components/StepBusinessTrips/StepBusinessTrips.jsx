import './StepBusinessTrips.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';

function StepBusinessTrips() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/subordinatesnumber');

  return (
    <>
      <div className='business-trips__container'>
        <div className='business-trips__radiobuttons'>
          <RadioButton
            radioLabel='yes'
            radioTitle='Да'
            radioValue='yes'
            checked={data.business_trip == 'yes' ? true : false} //от бэка
            onChange={handleChange}
            radioName='business_trip'//от бэка
          />
          <RadioButton
            radioLabel='no'
            radioTitle='Нет'
            radioValue='no'
            checked={data.business_trip == 'no' ? true : false} //от бэка
            onChange={handleChange}
            radioName='business_trip'//от бэка
          />
          <RadioButton
            radioLabel='sometimes'
            radioTitle='Иногда'
            radioValue='sometimes'
            checked={data.business_trip == 'sometimes' ? true : false} //от бэка
            onChange={handleChange}
            radioName='business_trip'//от бэка
          />
        </div>
        <span className='business-trips__error'>{errorMessage}</span>
        {/* {errorMessage && <span className='business-trips__error'>Ничего не выбрано</span>} */}
        <div className='employment-type__current'><CurrentApplicationBox /></div>
      </div>
      <div className='business-trips__button'>
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

export default StepBusinessTrips

import './StepPortfolio.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';

function StepPortfolio() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/workingconditions/numberofvacancies');

  return (
    <>
      <div className='portfolio__container'>
        <div className='portfolio__radiobuttons'>
          <RadioButton
            radioLabel='is_required'
            radioTitle='Необходимо предоставить'
            radioValue='is_required'
            radioName='portfolio'//от бэка
            checked={data.portfolio == 'is_required' ? true : false} //от бэка
            onChange={handleChange}
          />
          <RadioButton
            radioLabel='not_required'
            radioTitle='Не требуется'
            radioValue='not_required'
            radioName='portfolio'//от бэка
            checked={data.portfolio == 'not_required' ? true : false} //от бэка
            onChange={handleChange}
          />
        </div>
        <span className='portfolio__error'>{errorMessage}</span>
        {/* {errorMessage && <span className='portfolio__error'>Ничего не выбрано</span>} */}
        <div className='portfolio__current'><CurrentApplicationBox /></div>
      </div>
      <div className='portfolio__button'>
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

export default StepPortfolio

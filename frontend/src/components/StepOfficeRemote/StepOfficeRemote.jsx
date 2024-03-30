import './StepOfficeRemote.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';

function StepOfficeRemote() {

  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);


  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/salary');

  return (
    <>
      <div className='office-remote__container'>
        <div className='office-remote__radiobuttons'>
          <RadioButton
            radioLabel='remote'
            radioTitle='Удалённая'
            radioValue='remote'
            checked={data.work_format == 'remote' ? true : false} //от бэка
            onChange={handleChange}
            radioName='work_format'//от бэка
          />
          <RadioButton
            radioLabel='mixed'
            radioTitle='Гибрид'
            radioValue='mixed'
            onChange={handleChange}
            checked={data.work_format == 'mixed' ? true : false} //от бэка
            radioName='work_format'//от бэка
          />
          <RadioButton
            radioLabel='office'
            radioTitle='Офис'
            radioValue='office'
            onChange={handleChange}
            checked={data.work_format == 'office' ? true : false} //от бэка
            radioName='work_format'//от бэка
          />
        </div>
        <span className='office-remote__error'>{errorMessage}</span>
        {/* {errorMessage && <span className='office-remote__error'>Ничего не выбрано</span>} */}
        <div className="office-remote__current"><CurrentApplicationBox /></div>
      </div>
      <div className='office-remote__button'>
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

export default StepOfficeRemote;

import './StepEmploymentType.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';

function StepEmploymentType() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);
  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/businesstrips');

  return (
    <>
      <div className='employment-type__container'>
        <div className='employment-type__radiobuttons'>
          <RadioButton
            radioLabel='full'
            radioTitle='Полная'
            radioValue='full'
            checked={data.type_employment == 'full' ? true : false} //от бэка
            onChange={handleChange}
            radioName='type_employment'//от бэка
          />
          <RadioButton
            radioLabel='partial'
            radioTitle='Частичная'
            radioValue='partial'
            checked={data.type_employment == 'partial' ? true : false} //от бэка
            onChange={handleChange}
            radioName='type_employment'//от бэка
          />
          <RadioButton
            radioLabel='project'
            radioTitle='Проектная'
            radioValue='project'
            checked={data.type_employment == 'project' ? true : false} //от бэка
            onChange={handleChange}
            radioName='type_employment'//от бэка
          />
          <RadioButton
            radioLabel='internship'
            radioTitle='Стажировка'
            radioValue='internship'
            checked={data.type_employment == 'internship' ? true : false} //от бэка
            onChange={handleChange}
            radioName='type_employment'//от бэка
          />
        </div>
        <span className='employment-type__error'>{errorMessage}</span>
        {/* {errorMessage && <span className='employment-type__error'>Ничего не выбрано</span>} */}
        <div className='employment-type__current'><CurrentApplicationBox /></div>
      </div>
      <div className='employment-type__button'>
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

export default StepEmploymentType
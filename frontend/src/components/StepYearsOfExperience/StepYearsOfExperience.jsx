import './StepYearsOfExperience.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';

function StepYearsOfExperience() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/candidaterequirements/skills');

  return (
    <>
      <div className='years-experience__container'>
        <div className='years-experience__radiobuttons'>
          <RadioButton
            radioLabel='doesnot_matter'
            radioTitle='Не имеет значения'
            radioValue='doesnot_matter'
            radioName='work_experience'//от бэка
            checked={data.work_experience == 'doesnot_matter' ? true : false} //от бэка
            onChange={handleChange}
          />
          <RadioButton
            radioLabel='from_one_to_three_years'
            radioTitle='От 1 года до 3 лет'
            radioValue='from_one_to_three_years'
            radioName='work_experience'//от бэка
            checked={data.work_experience == 'from_one_to_three_years' ? true : false} //от бэка
            onChange={handleChange}
          />
          <RadioButton
            radioLabel='from_three_to_six_years'
            radioTitle='От 3 до 6 лет'
            radioValue='from_three_to_six_years'
            radioName='work_experience'//от бэка
            checked={data.work_experience == 'from_three_to_six_years' ? true : false} //от бэка
            onChange={handleChange}
          />
          <RadioButton
            radioLabel='more_six_years'
            radioTitle='Более 6 лет'
            radioValue='more_six_years'
            radioName='work_experience'//от бэка
            checked={data.work_experience == 'more_six_years' ? true : false} //от бэка
            onChange={handleChange}
          />
          <RadioButton
            radioLabel='without_experience'
            radioTitle='Нет опыта'
            radioValue='without_experience'
            radioName='work_experience'//от бэка
            checked={data.work_experience == 'without_experience' ? true : false} //от бэка
            onChange={handleChange}
          />
        </div>
        <span className='years-experience__error'>{errorMessage}</span>
        {/* {errorMessage && <span className='years-experience__error'>Ничего не выбрано</span>} */}
        <div className='years-experience__current'><CurrentApplicationBox /></div>
      </div>
      <div className='years-experience__button'>
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

export default StepYearsOfExperience

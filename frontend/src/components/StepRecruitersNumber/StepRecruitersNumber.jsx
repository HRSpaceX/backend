import './StepRecruitersNumber.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';

function StepRecruitersNumber() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/recruiterrequirements/recruiterstasks');

  return (
    <>
      <div className='recruiters-number__container'>
        <p className='recruiters-number__text'>Укажите количество рекрутеров, которые будут работать над заявкой:</p>
        <div className='recruiters-number__radiobuttons'>
          <RadioButton
            radioLabel='1'
            radioTitle='1'
            radioValue='1'
            radioName='amount_of_hr'//от бэка
            checked={data.amount_of_hr == '1' ? true : false} //от бэка
            onChange={handleChange}
          />
          <RadioButton
            radioLabel='2'
            radioTitle='2'
            radioValue='2'
            radioName='amount_of_hr'//от бэка
            checked={data.amount_of_hr == '2' ? true : false} //от бэка
            onChange={handleChange}
          />
          <RadioButton
            radioLabel='3'
            radioTitle='3'
            radioValue='3'
            radioName='amount_of_hr'//от бэка
            checked={data.amount_of_hrn == '3' ? true : false} //от бэка
            onChange={handleChange}
          />
        </div>
        <span className='recruiters-number__error'>{errorMessage}</span>
          {/* {errorMessage && <span className='recruiters-number__error'>Введите число сотрудников для поиска</span>} */}
        <div className='recruiters-number__current'><CurrentApplicationBox /></div>
      </div>
      <div className='recruiters-number__button'>
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

export default StepRecruitersNumber

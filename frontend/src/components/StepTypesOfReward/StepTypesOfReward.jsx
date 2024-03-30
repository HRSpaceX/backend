import './StepTypesOfReward.css'
import Button from '../Button/Button.jsx'
import RadioButtonPaymen from '../RadioButtonPayment/RadioButtonPayment.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
// import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';

function StepTypesOfReward() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/workingconditions/moneyforrecruiters');

  return (
    <>
      <div className='types-reward__container'>
        <div className='types-reward__radiobuttons'>
          <RadioButtonPaymen
            radioLabel='1'
            radioLabelPercentage='100%'
            radioLabelTitle='За выход сотрудника'
            radioLabelText='При этом варианте вознаграждение рекрутер получит в день вступления кандидата в должность'
            radioValue='1'
            radioName='award_option'//от бэка
            checked={data.award_option == '1' ? true : false} //от бэка
            onChange={handleChange}
          />

          <RadioButtonPaymen
            radioLabel='2'
            radioLabelPercentage='50%'
            radioLabelPercentage1='50%'
            radioLabelTitle='50% за выход + 50% по окончании гарантийного периода'
            radioLabelText='Часть оплаты рекрутер получает в день вступления кандидата в должность, а часть оплаты — после окончания гарантийного периода (1 месяц)'
            radioValue='2'
            radioName='award_option'//от бэка
            checked={data.award_option == '2' ? true : false} //от бэка
            onChange={handleChange}
          />

          <RadioButtonPaymen
            radioLabel='3'
            radioLabelPercentage='100%'
            radioLabelTitle='По окончании гарантийного периода (1 месяц)'
            radioLabelText='В этом случае рекрутер получаеь оплату спустя месяц нахождения кандидата в должности'
            radioValue='3'
            radioName='award_option'//от бэка
            checked={data.award_option == '3' ? true : false} //от бэка
            onChange={handleChange}
          />
        </div>

        <span className='types-reward__error'>{errorMessage}</span>
        {/* {errorMessage && <span className='types-reward__error'>Ничего не выбрано</span>} */}

        {/* <div className='types-reward__current'><CurrentApplicationBox /></div> */}

      </div>
      <div className='types-reward__button'>
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

export default StepTypesOfReward
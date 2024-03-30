import './StepCheckBeforePayment.css'
import Button from '../Button/Button.jsx'
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox.jsx'
import CheckBox from '../CheckBox/CheckBox.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';

function StepCheckBeforePayment() {
  const { data, handleChange } = useForm();

  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/formsubmit');

  return (
    <>
      <div className='payment-check__container'>
        <p className='payment-check__title'>Проверь заявку для публикации</p>
        <div className='payment-check__current'><CurrentApplicationBox /></div>
        <div className='payment-check__checkbox'>
          <CheckBox
            checkboxLabel='agree'
            checkboxTitle='Я принимаю условия «Оферты на заключение договора об использовании веб-сервиса HRspace»'
            checkboxValue='agree'
            checkboxName='oferta'//от бэка
            checked={data.oferta} //от бэка
            onChange={handleChange}
          />
        </div>
        <div className='payment-check__buttons'>
          <div className='payment-check__button'>
            <Button
              stepIsValid='true'
              buttonTitle='Сохранить черновик'
              buttonType='button'
            />

            <Button
              onClick={onRedirect}
              stepIsValid={stepIsValid}
              buttonTitle='Перейти к оплате'
              buttonType='button'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default StepCheckBeforePayment

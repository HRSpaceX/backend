import './StepFormSubmit.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import useForm from '../../hooks/useForm';

function StepFormSubmit() {
  const { data } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);

  return (
    <>
      <div className='form-submit__container'>
        <h2 className='form-submit__title'> Заявка «Бухгалтер на производство» заполнена и оплачена.</h2>
        <p className='form-submit__text'> После одобрения заявки модератором она станет доступна для отклика рекрутерам.</p>
        <div className='form-submit__button'>
          <Button
          
            stepIsValid={stepIsValid}
            buttonTitle='Опубликовать'
            buttonType='submit'
          />
        </div>
      </div>
    </>
  )
}

export default StepFormSubmit

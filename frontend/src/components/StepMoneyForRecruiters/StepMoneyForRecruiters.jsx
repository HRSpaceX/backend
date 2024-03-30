import './StepMoneyForRecruiters.css'
import Button from '../Button/Button.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rubl from '../../images/rubl.svg';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';
import useForm from '../../hooks/useForm';

function StepMoneyForRecruiters() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/workingconditions/candidatefirstworkingday');

  return (
    <>
      <div className='money-recruiters__container'>
        <div className="money-recruiters__paragraph">
          <input
            className={`money-recruiters__input ${errorMessage && 'money-recruiters__input_error'}`}
            type="text"
            name="award"
            value={data.award}
            onChange={handleChange}
            placeholder="Введите размер вознаграждения"
          />
          <img className="rubl" src={rubl} alt="Rubl" />
        </div>

        <span className='money-recruiters__error'>{errorMessage}</span>
      {/* {errorMessage && <span className='money-recruiters__error'>Введите размер вознаграждения</span>} */}

        <span className='money-recruiters__text'>Рекомендуемый размер вознаграждения — 1,5-2 среднемесячные зарплаты кандидата и выше</span>
        <div className='money-recruiters__current'><CurrentApplicationBox /></div>
      </div>
      <div className='money-recruiters__button'>
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

export default StepMoneyForRecruiters

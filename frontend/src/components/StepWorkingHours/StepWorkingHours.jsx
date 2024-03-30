import './StepWorkingHours.css'
import Button from '../Button/Button.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox.jsx'

function StepWorkingHours() {
  const { data, handleChange } = useForm();
  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/jobdescription/employmenttype');

  return (
    <>
      <div className='working-hours__container'>
        <div className="working-hours__inputs">
          <input
            className={`working-hours__input ${errorMessage && 'working-hours__input_error'}`}
            type="text"
            name="start_work_day"
            value={data.start_work_day}
            onChange={handleChange}
            placeholder="Начало рабочего дня"
          />
          <input
            className={`working-hours__input ${errorMessage && 'working-hours__input_error'}`}
            type="text"
            name="end_work_day"
            value={data.end_work_day}
            onChange={handleChange}
            placeholder="Конец рабочего дня"
          />
        </div>

        <div className='working-hours__radiobuttons'>
          <RadioButton
            radioLabel='full_day'
            radioTitle='Полный день'
            radioValue='full_day'
            checked={data.schedule == 'full_day' ? true : false} //от бэка
            onChange={handleChange}
            radioName='schedule'//от бэка
          />
          <RadioButton
            radioLabel='flexible schedule'
            radioTitle='Гибкий график'
            radioValue='flexible schedule'
            checked={data.schedule == 'flexible schedule' ? true : false} //от бэка
            onChange={handleChange}
            radioName='schedule'//от бэка
          />
          <RadioButton
            radioLabel='shift work'
            radioTitle='Сменный график'
            radioValue='shift work'
            checked={data.schedule == 'shift work' ? true : false} //от бэка
            onChange={handleChange}
            radioName='schedule'//от бэка
          />
          <RadioButton
            radioLabel='watch'
            radioTitle='Вахтовый метод'
            radioValue='watch'
            checked={data.schedule == 'watch' ? true : false} //от бэка
            onChange={handleChange}
            radioName='schedule'//от бэка
          />
        </div>
        <span className='working-hours'>{errorMessage}</span>
        {/* {errorMessage && <p className='working-hours__error'>Укажите начало и конец рабочего дня, выберете график</p>} */}
        <div className="working-hours__current">  <CurrentApplicationBox /></div>
      </div>
      <div className='working-hours__button'>
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

export default StepWorkingHours

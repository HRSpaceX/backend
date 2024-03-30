import './StepRecruitersTasks.css'
import Button from '../Button/Button.jsx'
import CheckBox from '../CheckBox/CheckBox.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';

function StepRecruitersTasks() {
  const { data, handleChange } = useForm();
  // const { data, handleCBChange } = useForm();

  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/recruiterrequirements/recruiterspeculiarities');

  return (
    <>
      <div className='recruiters-tasks__container'>
        <div className='recruiters-tasks__checkbox'>
          <CheckBox
            checkboxLabel='1'
            checkboxTitle='Подбор кандидатов'
            checkboxValue='1'
            checkboxName='hr_responsibility1'//от бэка
            checked={data.hr_responsibility1} //от бэка
            // checked={data.hr_responsibility.includes('1') } //от бэка
            // checked={data.hr_responsibility == '1' ? true : false} //от бэка
            // onChange={handleCBChange}
            onChange={handleChange}
          />
          <CheckBox
            checkboxLabel='2'
            checkboxTitle='Организация собеседований'
            checkboxValue='2'
            checkboxName='hr_responsibility2'//от бэка
            checked={data.hr_responsibility2} //от бэка
            // checked={data.hr_responsibility.includes('2') } //от бэка
            // checked={data.hr_responsibility == '2' ? true : false} //от бэка
            // checked={data.hr_responsibility == '2' ? true : false} //от бэка
            // onChange={handleCBChange}
            onChange={handleChange}
          />
          <CheckBox
            checkboxLabel='3'
            checkboxTitle='Проведение собеседований'
            checkboxValue='3'
            checkboxName='hr_responsibility3'//от бэка
            checked={data.hr_responsibility3} //от бэка
            // checked={data.hr_responsibility.includes('3') } //от бэка
            // checked={data.hr_responsibility == '3' ? true : false} //от бэка
            // onChange={handleCBChange}
            onChange={handleChange}
          />
          <CheckBox
            checkboxLabel='4'
            checkboxTitle='Запрос рекомендаций'
            checkboxValue='4'
            checkboxName='hr_responsibility4'//от бэка
            checked={data.hr_responsibility4} //от бэка
            // checked={data.hr_responsibility.includes('4') } //от бэка
            // checked={data.hr_responsibility == '4' ? true : false} //от бэка
            // onChange={handleCBChange}
            onChange={handleChange}
          />
          <CheckBox
            checkboxLabel='5'
            checkboxTitle='Отправка тестового задания'
            checkboxValue='5'
            checkboxName='hr_responsibility5'//от бэка
            checked={data.hr_responsibility5} //от бэка
            // checked={data.hr_responsibility.includes('5') } //от бэка
            // checked={data.hr_responsibility == '5' ? true : false} //от бэка
            // onChange={handleCBChange}
            onChange={handleChange}
          />
        </div>
        <span className='recruiters-tasks__error'>{errorMessage}</span>
          {/* {errorMessage && <span className='recruiters-tasks__error'>Ничего не выбрано</span>} */}
        <div className='recruiters-tasks__current'><CurrentApplicationBox /></div>
      </div>
      <div className='recruiters-tasks__button'>
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

export default StepRecruitersTasks

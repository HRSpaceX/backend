import './StepRecruitersPeculiarities.css'
import Button from '../Button/Button.jsx'
import CheckBox from '../CheckBox/CheckBox.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';

function StepRecruitersPeculiarities() {
  const { data, handleChange } = useForm();

  console.log(JSON.stringify(data));
  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  const [text, setText] = useState('');
  const maxLength = 100;

  const progress = (text.length / maxLength) * 1000;

  let navigate = useNavigate();
  const onRedirect = () => navigate('/formpayment');

  return (
    <>
      <div className='recruiters-peculiarities__container'>

        <div className='recruiters-peculiarities__input-container'>
          <input
            className={`recruiters-peculiarities__input ${errorMessage && 'recruiters-peculiarities__input_error'}`}
            type="text"
            name="hr_requirements"
            value={data.hr_requirements}
            onChange={handleChange}
            maxLength={maxLength}
            placeholder='НУкажите специальные знания и навыки, которыми должен обладать рекрутер. Будут ли дополнительные задачи.

          Это поможет рекрутерам оценить свою возможность закрытия заявки.
          
          Не дублируйте ранее описанные пункты. '
          />
          <div style={{ width: `${progress}%` }}></div>
          <div className="recruiters-peculiarities__character-count">{text.length}/{maxLength}</div>

          <span className='recruiters-peculiarities__error'>{errorMessage}</span>
          {/* {errorMessage && <span className='recruiters-peculiarities__error'>Ничего не написано</span>} */}


          <div className='recruiters-peculiarities__checkbox'>
            <CheckBox
              checkboxLabel='entity'
              checkboxTitle='Только для юридических лиц и ИП'
              checkboxValue='entity'
              checkboxName='hr_requirements1'//от бэка
              checked={data.hr_requirements1} //от бэка
              onChange={handleChange}
            />
            <CheckBox
              checkboxLabel='freelancing'
              checkboxTitle='Только для самозанятых и фрилансеров'
              checkboxValue='freelancing'
              checkboxName='hr_requirements2'//от бэка
              checked={data.hr_requirements2} //от бэка
              onChange={handleChange}
            />
          </div>
          <div className='recruiters-peculiarities__current'><CurrentApplicationBox /></div>
        </div>
      </div>
      <div className='recruiters-peculiarities__button'>
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

export default StepRecruitersPeculiarities

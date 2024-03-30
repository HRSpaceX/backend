import './StepSkills.css'
import Button from '../Button/Button.jsx'
import CurrentApplicationBox from '../CurrentAplicationBox/CurrentApplicationBox';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';

function StepSkills() {
  const { data, handleChange } = useForm();
  const skills = ['Авансовый отчёт', 'Акты сверок', 'Архивация', 'Бухгалтерская отчетность', 'Бухгалтерский учет', 'Дебиторская должность', 'Налоговая отчетность', 'Тяжелое машиностроение', '1С: Бухгалтерия', 'Отчётность в ФСС', 'Первичная документация'];
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleChipClick = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills(prevSelectedSkills => [...prevSelectedSkills, skill]);
    }
    handleChange({ target: { name: "skill", value: [...selectedSkills, skill] } });
  }

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [errorMessage, setErrorMessage] = useState(false);
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/candidaterequirements/education');


  return (
    <>
      <div className='skills__container'>

        <input
          className={`skills__input ${errorMessage && 'skills__input_error'}`}
          type="text"
          name="skill"
          value={data.skill}
          onChange={() => { }}
          placeholder="Введите навык"
        />
        <span className='skills__error'>{errorMessage}</span>
        {/* {errorMessage && <span className='skills__error'> Введите навыки</span>} */}

        <Stack className="skills__chips-container" direction="row" spacing={1}>
          {skills.map(skill => (
            <Chip
              key={skill}
              className={`skills__chip ${selectedSkills.includes(skill) ? 'skills__chip--selected' : ''}`}
              label={skill}
              variant="outlined"
              sx={{ textTransform: 'none', borderRadius: '4px' }}
              onClick={() => handleChipClick(skill)}

            />
          ))}
        </Stack>
        {/* <div className="skills__chip-selected">
          {selectedSkills.map(skill => (
            <Chip key={skill} className="skills__chip-selected-item" label={skill} />
          ))}
        </div> */}
        <div className="skills__current">  <CurrentApplicationBox /></div>
      </div>
      <div className='skills__button'>
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

export default StepSkills

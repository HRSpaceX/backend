import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import ProgressBar from '../ProgressBar/ProgressBar.jsx'
import StepHome from '../StepHome/StepHome.jsx'
import StepWarning from '../StepWarning/StepWarning.jsx'
import SideBarJobDescription from '../SideBarJobDescription/SideBarJobDescription.jsx'
import SideBarCandidateRequirements from '../SideBarCandidateRequirements/SideBarCandidateRequirements.jsx'
import SideBarWorkingConditions from '../SideBarWorkingConditions/SideBarWorkingConditions.jsx'
import SideBarRecruiterRequirements from '../SideBarRecruiterRequirements/SideBarRecruiterRequirements.jsx'
import StepSphere from '../StepSphere/StepSphere.jsx'
import StepCity from '../StepCity/StepCity.jsx'
import StepOfficeRemote from '../StepOfficeRemote/StepOfficeRemote.jsx'
import StepSalary from '../StepSalary/StepSalary.jsx'
import StepWorkingHours from '../StepWorkingHours/StepWorkingHours.jsx'
import StepEmploymentType from '../StepEmploymentType/StepEmploymentType.jsx'
import StepBusinessTrips from '../StepBusinessTrips/StepBusinessTrips.jsx'
import StepSubordinatesNumber from '../StepSubordinatesNumber/StepSubordinatesNumber.jsx'
import StepJobPeculiarities from '../StepJobPeculiarities/StepJobPeculiarities.jsx'
import StepYearsOfExperience from '../StepYearsOfExperience/StepYearsOfExperience.jsx'
import StepSkills from '../StepSkills/StepSkills.jsx'
import StepEducation from '../StepEducation/StepEducation.jsx'
import StepPortfolio from '../StepPortfolio/StepPortfolio.jsx'
import StepNumberOfVacancies from '../StepNumberOfVacancies/StepNumberOfVacancies.jsx'
import StepTypesOfReward from '../StepTypesOfReward/StepTypesOfReward.jsx'
import StepMoneyForRecruiters from '../StepMoneyForRecruiters/StepMoneyForRecruiters.jsx'
import StepCandidateFirstWorkingDay from '../StepCandidateFirstWorkingDay/StepCandidateFirstWorkingDay.jsx'
import StepInterview from '../StepInterview/StepInterview.jsx'
import StepFirstInterviewDate from '../StepFirstInterviewDate/StepFirstInterviewDate.jsx'
import StepRecruitersNumber from '../StepRecruitersNumber/StepRecruitersNumber.jsx'
import StepRecruitersTasks from '../StepRecruitersTasks/StepRecruitersTasks.jsx'
import StepRecruitersPeculiarities from '../StepRecruitersPeculiarities/StepRecruitersPeculiarities.jsx'
import StepCheckBeforePayment from '../StepCheckBeforePayment/StepCheckBeforePayment.jsx'
import StepFormSubmit from '../StepFormSubmit/StepFormSubmit.jsx'
import PageNotFound from '../PageNotFound/PageNotFound.jsx'
import useForm from '../../hooks/useForm.jsx'
import { submitForm } from '../../utils/FormSubmit.jsx'

function App() {

  const { data } = useForm();

  // console.log(`из App:${JSON.stringify(data)}`);

  let { pathname } = useLocation();

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(`на отправку:${JSON.stringify(data)}`);
    submitForm(data);
  }

  return (
    <>
      <aside>
        <Routes >
          <Route path='/*' element={<Header />} />
        </Routes>

        <Routes >
          <Route path='/*' element={<ProgressBar />} />
        </Routes>

        <Routes >
          <Route path='/jobdescription/*' element={<SideBarJobDescription />} />
          <Route path='/candidaterequirements/*' element={<SideBarCandidateRequirements />} />
          <Route path='/workingconditions/*' element={<SideBarWorkingConditions />} />
          <Route path='/recruiterrequirements/*' element={<SideBarRecruiterRequirements />} />
        </Routes>
      </aside>

      <form className={pathname === '/' || pathname === '/formsubmit' || pathname === '/formpayment'
        ? 'form form_fullpage' : 'form'} onSubmit={handleSubmit}>

        <Routes>
          <Route path='/' element={<StepHome />} />

          <Route path='/jobdescription/warning' element={<StepWarning />} />
          <Route path='/jobdescription/sphere' element={<StepSphere />} />
          <Route path='/jobdescription/city' element={<StepCity />} />
          <Route path='/jobdescription/officeremote' element={<StepOfficeRemote />} />
          <Route path='/jobdescription/salary' element={<StepSalary />} />
          <Route path='/jobdescription/workinghours' element={<StepWorkingHours />} />
          <Route path='/jobdescription/employmenttype' element={<StepEmploymentType />} />
          <Route path='/jobdescription/businesstrips' element={<StepBusinessTrips />} />
          <Route path='/jobdescription/subordinatesnumber' element={<StepSubordinatesNumber />} />
          <Route path='/jobdescription/jobpeculiarities' element={<StepJobPeculiarities />} />

          <Route path='/candidaterequirements/yearsofexperience' element={<StepYearsOfExperience />} />
          <Route path='/candidaterequirements/skills' element={<StepSkills />} />
          <Route path='/candidaterequirements/education' element={<StepEducation />} />
          <Route path='/candidaterequirements/portfolio' element={<StepPortfolio />} />

          <Route path='/workingconditions/numberofvacancies' element={<StepNumberOfVacancies />} />
          <Route path='/workingconditions/typesofreward' element={<StepTypesOfReward />} />
          <Route path='/workingconditions/moneyforrecruiters' element={<StepMoneyForRecruiters />} />
          <Route path='/workingconditions/candidatefirstworkingday' element={<StepCandidateFirstWorkingDay />} />
          <Route path='/workingconditions/interview' element={<StepInterview />} />
          <Route path='/workingconditions/firstinterviewdate' element={<StepFirstInterviewDate />} />

          <Route path='/recruiterrequirements/recruitersnumber' element={<StepRecruitersNumber />} />
          <Route path='/recruiterrequirements/recruiterstasks' element={<StepRecruitersTasks />} />
          <Route path='/recruiterrequirements/recruiterspeculiarities' element={<StepRecruitersPeculiarities />} />

          <Route path='/formpayment' element={<StepCheckBeforePayment />} />
          <Route path='/formsubmit' element={<StepFormSubmit />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </form>
    </>
  )
}

export default App

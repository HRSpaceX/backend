import { createContext, useState } from "react"

const FormContext = createContext({})

export const FormProvider = ({ children }) => {


  const [data, setData] = useState({
    name: '', //название заявки
    line_of_business: '',//сфер
    city: '',
    work_format: '',//office-remote
    salary_from: '',
    salary_to: '',
    start_work_day: '',
    end_work_day: '',
    schedule: '',//вахтовый
    type_employment: '',//проектный
    business_trip: '',
    amount_of_subordinate: '',
    features_vacancy: '',
    work_experience: '',
    skill: '',
    education: '',
    portfolio: '',
    amount_of_employees: '',
    award_option: '',
    award: '',
    start_work: '',
    format_interview: '',
    start_interview: '',
    amount_of_hr: '',
    hr_responsibility1: false,
    hr_responsibility2: false,
    hr_responsibility3: false,
    hr_responsibility4: false,
    hr_responsibility5: false,
    hr_requirements: '',
    hr_requirements1: false,
    hr_requirements2: false,
    oferta: false
  })


  // const handleCBChange = e => {
  //   // const checkboxArray = []
  //   // console.log(`checkboxarray ${checkboxArray}`)
  //   // const name = e.target.name

  //   const value = e.target.value

  //   // checkboxArray.push(value)
  //   // e.target.checked
  //   // // ? console.log( value)
  //   // // : console.log(value)
  //   // ? checkboxArray.push(value)
  //   // : checkboxArray.remove(value)

  //   // setData(prevData => ({
  //   //   ...prevData,
  //   //   [name]: checkboxArray
  //   // }))

  //   let copy = []
  //   copy.push(value);
  //   setData(copy);

  //   // setData((prevData) => ({
  //   //   ...prevData,
  //   //   [name]: [
  //   //     ...arr,
  //   //     value
  //   //   ]
  //   // }))

  // }

  // const [checkboxArray, setCheckboxArray] = useState([]);
  // const handleCBChange = e => {
  //   let nextId = 0;
  //   // const checkboxArray = []
  //   const name = e.target.name
  //   const value = e.target.value
  //   console.log(e.target.checked)
  //   e.target.checked &&
  //   setCheckboxArray([...checkboxArray, { id: nextId++, name: value }]);

  //     setData((prevData) => ({
  //       ...prevData,
  //       // [name]: ['кот', 'бегемот']
  //       [name]: checkboxArray
  //     }))
  // }



  // const handleCBChange = e => {
  //   // let nextId = 0;
  //   const checkboxArray = []
  //   const name = e.target.name
  //   const value = e.target.value
  //   // const id = e.target.id
  //   console.log(e.target.checked)
  //   e.target.checked &&
  //   // checkboxArray.push([{ id: id, name: value }]);
  //   checkboxArray.push(value);
  //     setData((prevData) => ({
  //       ...prevData,
  //       // [name]: ['кот', 'бегемот']
  //       [name]: checkboxArray
  //     }))
  // }




  //   const handleCBChange = e => {

  //     const checkboxArray = []
  //     const name = e.target.name
  //     const value = e.target.value
  // console.log(e.target.checked)
  //     e.target.checked && checkboxArray.push(value)


  //     setData((prevData) => ({
  //         ...prevData,
  //         // [name]: ['кот', 'бегемот']
  //         [name]: checkboxArray
  //       }))

  //   }



  // const handleChange = e => {

  //   const name = e.target.name

  //   const value = e.target.value

  //   setData(prevData => ({
  //     ...prevData,
  //     [name]: value
  //   }))
  // }

  const handleChange = e => {
    const type = e.target.type

    const name = e.target.name

    const value = type === "checkbox"
      ? e.target.checked
      : e.target.value

    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }


  return (
    <FormContext.Provider value={{ data, setData, handleChange }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContext
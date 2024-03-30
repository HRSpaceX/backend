import './CurrentApplicationBox.css';
import check from '../../images/check.svg'
import { useContext } from "react"
import FormContext from '../../context/FormContext';


function CurrentApplicationBox() {
    const { data } = useContext(FormContext);

    const selectedItems = [];
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            // проверка, что значение свойства не пустое 
            if (data[key]) {
                selectedItems.push(data[key]);
            }
        }
    }

    return (
        <div className="current__container">
            <h2 className="current__title">Текущая заявка: {data.name}</h2>
            <img src={check} className="current__check" alt="check" />
            <div className="current__options">
                {selectedItems.map((item, index) => (
                    <a key={index} href={`#${item}`} className="current__item" style={{ textDecoration: 'none' }}>
                        {item}{' '}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default CurrentApplicationBox;

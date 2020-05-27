import React from "react";
import './rowView.css'

export default ({ person }) => {
  return (
    <div className='block'>
      <p>
        Выбран пользователь: <b>{person.firstName + " " + person.lastName}</b>
      </p>
      <p>
        Описание:<br/>
        <textarea readOnly value={person.description} />
      </p>
      <p>
      Адрес проживания: <b>{person.adress.streetAddress}</b>
      </p>
      <p>
      Город: <b>{person.adress.city}</b>
      </p>
      <p>
      Провинция/штат: <b>{person.adress.state}</b>
      </p>
      <p>
      Индекс: <b>{person.adress.zip}</b>
      </p>
    </div>
  );
};

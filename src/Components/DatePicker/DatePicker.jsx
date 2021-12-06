import React, { useState } from 'react';
import './date-picker.scss';
import DtPicker from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'

const DatePicker = () => {
	const [date, setDate] = useState(null);

	return (
		<DtPicker
			onChange={setDate}
			type='single'
			local='en'
			showWeekend
			inputClass="input-field__text form-stack__input date-picker"
			placeholder="Data koncowa"
			calenderModalClass="date-picker__modal"
			headerClass="date-picker__header"
			monthsClass="date-picker__month"
		/>
	)
}
export default DatePicker
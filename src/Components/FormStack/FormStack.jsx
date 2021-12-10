import React, { useState } from "react";
import './form-stack.scss';
import { MainButton } from "../Buttons/Buttons";
import { TextField } from "../InputField/InputField";
// import DatePicker from "Components/DatePicker/DatePicker";

const FormStack = ({ zone, onAdd }) => {

	const [planData, setPlanData] = useState({
		title: "",
		expireDate: "",
		plannedEarning: "",
		isPaid: false
	});
	const handleValue = (event) => {
		const { name, value } = event.target;

		setPlanData((prevState) => {
			return {
				...prevState,
				[name]: value,
			}
		})

	}

	return (
		<form
			className={"form-stack"}
			onSubmit={(e) => {
				e.preventDefault();
				return onAdd(planData)
			}}
		>
			<fieldset className="form-stack__fieldset">
				<legend className="form-stack__legend"></legend>
				<TextField
					className="form-stack__input"
					name="title"
					type="text"
					value={planData.title}
					onChange={handleValue}
					placeholder="Tytul"
					zone={zone}
				/>
				{/* <DatePicker /> // ! Issue with z-index i think 🤔 */}

				<TextField
					name="expireDate"
					type="date"
					value={planData.expireDate}
					onChange={handleValue}
					placeholder="Data koncowa"
					zone={zone}
				/>
				<TextField
					name="plannedEarning"
					type="number"
					value={planData.plannedEarning}
					onChange={handleValue}
					placeholder="Kwota"
					zone={zone}
				/>
				<MainButton
					type="submit"
					zone={zone}
				/>
			</fieldset>
		</form>
	)
}

export default FormStack;
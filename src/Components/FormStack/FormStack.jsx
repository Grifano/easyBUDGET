import React, { useState } from "react";
import './form-stack.scss';
import { MainButton } from "../Buttons/Buttons";
import { TextField } from "../InputField/InputField";

const FormStack = ({ isFullSize, zone }) => {
	const [planCards, setPlanCards] = useState([]);
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

	const handleSubmit = (e) => {
		e.preventDefault();
		setPlanCards((prevState) => {
			return [...prevState, planData]
		});
	};

	return (
		<form
			className={`form-stack ${isFullSize ? "hide" : "show"}`}
			onSubmit={handleSubmit}
		>
			<fieldset className="form-stack__fieldset">
				<legend className="form-stack__legend">{isFullSize}</legend>
				<TextField
					className="form-stack__input"
					name="title"
					type="text"
					value={planData.title}
					onChange={handleValue}
					placeholder="Tytul"
					zone={zone}
				/>
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
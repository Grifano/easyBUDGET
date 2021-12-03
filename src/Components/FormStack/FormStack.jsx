import React, { useState } from "react";
import { MainButton } from "../Buttons/Buttons";
import { TextField } from "../Assets/InputField";

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
					value={planData.title}
					onChange={handleValue}
					placeholder="Tytul"
					zone={zone}
				/>
				<TextField
					name="expireDate"
					value={planData.expireDate}
					onChange={handleValue}
					placeholder="Data koncowa"
					zone={zone}
				/>
				<TextField
					name="plannedEarning"
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
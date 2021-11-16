import React, { useState } from "react";
import { MainButton } from "../Assets/Buttons";
import InputField from "./InputField";

const FormStack = () => {
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
		<>
			<form className="form-stack" onSubmit={handleSubmit}>
				<InputField
					name="title"
					value={planData.title}
					onChange={handleValue}
				/>
				<InputField
					name="expireDate"
					value={planData.expireDate}
					onChange={handleValue}
				/>
				<InputField
					name="plannedEarning"
					value={planData.plannedEarning}
					onChange={handleValue}
				/>
				<MainButton type="submit" />
			</form>
		</>
	)
}

export default FormStack;
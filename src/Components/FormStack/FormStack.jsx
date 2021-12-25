import React, { useState } from "react";
import './form-stack.scss';

import { MainButton } from "../Buttons/Buttons";
import { TextField } from "../InputField/InputField";
import { AddButton } from "Components/Buttons/Buttons";
// import DatePicker from "Components/DatePicker/DatePicker";

const FormStack = ({ zone, onAdd }) => {
	const isMobile = window.innerWidth < 769;
	const [isOpen, setOpen] = useState(!isMobile)
	const [planData, setPlanData] = useState({});

	const handleValue = (event) => {
		const { name, value } = event.target;

		setPlanData((prevState) => {
			return {
				...prevState,
				[name]: value,
			}
		})

	}

	function btnSwapping() {
		if (isMobile) {
			setOpen(!isOpen)
		}
	}

	return (
		<form
			className={"form-stack"}
			onSubmit={(e) => {
				e.preventDefault()
				btnSwapping()
				return onAdd(planData)
			}}
		>
			<fieldset className="form-stack__fieldset">
				<legend className="form-stack__legend">Zaplanuj</legend>
				<div className={isOpen ? "form-stack__body form-stack__body--open" : "form-stack__body"}>
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
				</div>
			</fieldset>
			{isOpen ? <MainButton
				type="submit"
				onClick={btnSwapping}
				zone={zone}
			/> : <AddButton onClick={btnSwapping} zone={zone} />}
		</form>
	)
}

export default FormStack;
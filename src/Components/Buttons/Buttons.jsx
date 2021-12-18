import React from "react";
import './buttons.scss';

import plusIcon from "Assets/Button--add.svg";
import deleteIcon from "Assets/Delete.svg";

// Main Button
export const MainButton = ({ zone, type }) => {
	let className = "main-button";
	if (zone) {
		className += " " + className + "--" + zone;
	}

	return (
		<button
			type={type}
			className={className}
		>
			Dodac
		</button>
	)
}

//Expand Button
export const ExpandButton = ({ zone, isFullSize, onClick }) => {
	let className = "expand-button";
	if (zone) {
		className += " " + className + "--" + zone;
	}

	return (
		<button
			className={className}
			onClick={onClick}
		>
			<svg
				className={isFullSize ? null : "expanded"}
				width="40"
				height="21"
				viewBox="0 0 40 21"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M3 13.0355C3 12.0419 3.98248 11.3468 4.91948 11.6775L16.6718 15.8253C18.8255 16.5855 21.1745 16.5855 23.3282 15.8253L35.0805 11.6775C36.0175 11.3468 37 12.0419 37 13.0355C37 13.6191 36.6478 14.145 36.1082 14.3672L23.8075 19.4322C21.3685 20.4365 18.6315 20.4365 16.1925 19.4322L3.89182 14.3672C3.35219 14.145 3 13.6191 3 13.0355Z" fill="#512D6D" fillOpacity="0.7" />
				<path d="M0 1.96351C0 0.9849 0.943363 0.283009 1.8807 0.564211L17.1265 5.13796C19.0009 5.70027 20.9991 5.70027 22.8735 5.13796L38.1193 0.564211C39.0566 0.283009 40 0.9849 40 1.96351C40 2.58432 39.6077 3.13732 39.0217 3.3424L23.3035 8.84377C21.1648 9.59233 18.8352 9.59233 16.6965 8.84377L0.978298 3.3424C0.392346 3.13732 0 2.58432 0 1.96351Z" fill="#512D6D" fillOpacity="0.7" />
			</svg>
			ExpandButton
		</button>
	)

};

// Add Button
export const AddButton = () => {

	return (
		<button
			className="add-button"
		>
			<img src={plusIcon} alt="" className="add-button" />
			AddButton
		</button>
	)

}

// Delete Button
export const DeleteButton = ({ onDelete }) => {

	return (
		<button
			className="delete-button"
			onClick={onDelete}
		>
			<img src={deleteIcon} alt="" />
			AddButton
		</button>
	)

}
import React, { useState } from "react";
import './progress-bar.scss';

const ProgressBar = ({ zone, progress }) => {
	const [percentage, setPercentage] = useState(progress)
	const sqSize = 150;
	const strokeWidth = 16;
	const radius = (sqSize - strokeWidth) / 2;
	const viewBox = `0 0 ${sqSize} ${sqSize}`;
	const dashArray = radius * Math.PI * 2;
	const dashOffset = dashArray - dashArray * percentage / 100;
	let className = "progress-bar";


	return (

		<svg
			className={className + " progress-bar--" + zone}
			width={sqSize}
			height={sqSize}
			viewBox={viewBox}
		>
			<circle
				className={className + "__bg" + "--" + zone}
				cx={sqSize / 2}
				cy={sqSize / 2}
				r={radius}
				strokeWidth={`${strokeWidth}px`}
			/>
			<circle
				className={className + "__progress " + className + "__progress" + "--" + zone}
				cx={sqSize / 2}
				cy={sqSize / 2}
				r={radius}
				strokeWidth={`${strokeWidth}px`}
				transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
				style={{
					strokeDasharray: dashArray,
					strokeDashoffset: dashOffset
				}} />
			<text
				className="progress-bar__text"
				x="50%"
				y="50%"
				dy=".3em"
				textAnchor="middle">
				{`1000zl`}
			</text>
		</svg>

	)

};
export default ProgressBar;
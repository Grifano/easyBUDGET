import React from "react";
import './footer.scss';

function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<p>Copyright Serhii "Gr<span>[</span>i<span>]</span>fano" Orlenko ⓒ {year}</p>
		</footer>
	);
}

export default Footer;

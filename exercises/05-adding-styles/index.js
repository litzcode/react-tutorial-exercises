import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//add the styles here
const mySuperStyles = {
	background: "black",
	border: "1px solid yellow",
	fontSize: "16px"
};

const Badge = props => {
	return (
		<button className="btn btn-primary" style={mySuperStyles} type="button">
			{props.label}
			<span className="badge badge-light">{props.number}</span>
		</button>
	);
};
Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string
};

ReactDOM.render(<Badge label="Notifications" number="2" />, document.querySelector("#myDiv"));

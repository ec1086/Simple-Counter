import React from "react";
import PropTypes from "prop-types";


const Counter = props => {
	return (
		<div className="d-flex justify-content-center align-items-center text-black">
			<div className="row">
				<div className="col my-3 mx-2 py-2 text-center bg-info align-self-center">
					<i className="far fa-clock fa-3x display-4" />
				</div>
				<div className={SecondsStyle}>{props.secondSix % 10}</div>
				<div className={SecondsStyle}>{props.secondFive % 10}</div>
				<div className={SecondsStyle}>{props.secondFour % 10}</div>
				<div className={SecondsStyle}>{props.secondThree % 10}</div>
				<div className={SecondsStyle}>{props.secondTwo % 10}</div>
				<div className={SecondsStyle}>{props.secondOne % 10}</div>
			</div>
		</div>
	);
};

Counter.propTypes = {
	secondOne: PropTypes.number,
	secondTwo: PropTypes.number,
	secondThree: PropTypes.number,
	secondFour: PropTypes.number,
	secondFive: PropTypes.number,
	secondSix: PropTypes.number
};

//Bootstrap styles to pass in className for seconds divs
let SecondsStyle = "col my-3 mx-2 py-2 px-4 display-4 text-center bg-info";

export default Counter;
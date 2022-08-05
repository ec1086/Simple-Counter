//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";



//include your index.scss file into the bundle

//import component(s)
import Counter from "./component/SecondsCounter.js";

let counter = 0;

setInterval(
	function() {
		const secondSix = Math.floor(counter / 100000);
		const secondFive = Math.floor(counter / 10000);
		const secondFour = Math.floor(counter / 1000);
		const secondThree = Math.floor(counter / 100);
		const secondTwo = Math.floor(counter / 10);
		const secondOne = counter;
		counter++;

		// Renders Counter into the DOM
		ReactDOM.render(
			<Counter
				secondOne={secondOne}
				secondTwo={secondTwo}
				secondThree={secondThree}
				secondFour={secondFour}
				secondFive={secondFive}
				secondSix={secondSix}
			/>,

			document.querySelector("#app")
		);
	},
	// Evaluates above expression every second
	1000
);
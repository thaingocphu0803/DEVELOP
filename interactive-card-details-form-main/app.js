const inputName = document.getElementById("name");
inputName.addEventListener("input", () => {
	const owner = document.getElementById("output_name");
	owner.textContent = inputName.value;
});

const number = document.getElementById("number");
number.addEventListener("input", () => {
	const cardNumber = document.getElementById("card_number");
	cardNumber.textContent = number.value.replace(/(.{4})/g, "$1 ");
});

const month = document.getElementById("month");
month.addEventListener("input", () => {
	const outputMonth = document.getElementById("output_month");
	if( month.value.length === 1){
		outputMonth.textContent = `0${month.value}`;
	}else{
		outputMonth.textContent = `${month.value}`;
	}

});

const year = document.getElementById("year");
year.addEventListener("input", () => {
	const outputYear = document.getElementById("output_year");
	if( year.value.length === 1){
		outputYear.textContent = `0${year.value}`;
	}else{
		outputYear.textContent = `${year.value}`;
	}

});

const cvc = document.getElementById("cvc");
cvc.addEventListener("input", () => {
	const cardCVC = document.getElementById("card_cvc");
	cardCVC.textContent = cvc.value;
});

const submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
	event.preventDefault();

	if (!validateInput()) return;

	const form = document.getElementById('form');

	form.innerHTML =  `
		<div id="complete">
		  	<img src="./images/icon-complete.svg" alt="">
			<h1>Thank you!</h1>
    		<p>We've added your card details</p>
			<button>Continue</button>
  		</div>
  	`;


});

const validateInput = () => {
    const namePattern = /^[a-zA-Z\s]{1,35}$/;
    const numberPattern = /^[0-9]{16}$/;
    const datePattern = /^[0-9]{1,2}$/;
    const cvcPattern = /^[0-9]{3}$/; 

    const error = {
        name: document.getElementById("error_name"),
        number: document.getElementById("error_number"),
        date: document.getElementById("error_date"),
        cvc: document.getElementById("error_cvc"),
    };

	clearErrorMessages(error);

	resetStyleOutline(inputName);
	resetStyleOutline(number);
	resetStyleOutline(month);
	resetStyleOutline(year);
	resetStyleOutline(cvc);

	

    let isValid = true;

    const message = {
        Invalid: `Can't be blank`,
        numberRule: "Wrong format, numbers only",
        stringRule: "Wrong format, alpha characters only",
    };

    if (!inputName.value) {
        error.name.textContent = message.Invalid;
		styleOutline(inputName);
        isValid = false;
    } else if (!namePattern.test(inputName.value)) {
        error.name.textContent = message.stringRule;
		styleOutline(inputName);
        isValid = false;
    }

    if (!number.value) {
        error.number.textContent = message.Invalid;
		styleOutline(number);
        isValid = false;
    } else if (!numberPattern.test(number.value)) {
        error.number.textContent = message.numberRule;
		styleOutline(number);
        isValid = false;
    }

    if (!month.value) {
        error.date.textContent = message.Invalid;
		styleOutline(month);
        isValid = false;
    } else if (!datePattern.test(month.value)) {
        error.date.textContent = message.numberRule;
		styleOutline(month);
        isValid = false;
    }

	if (!year.value) {
        error.date.textContent = message.Invalid;
		styleOutline(year);
        isValid = false;
    } else if (!datePattern.test(year.value)) {
        error.date.textContent = message.numberRule;
		styleOutline(year);
        isValid = false;
    }


    if (!cvc.value) {
        error.cvc.textContent = message.Invalid;
		styleOutline(cvc);
        isValid = false;
    } else if (!cvcPattern.test(cvc.value)) {
        error.cvc.textContent = message.numberRule;
		styleOutline(cvc);
        isValid = false;
    }

    return isValid;
};

const clearErrorMessages = (errorElement) => {
	Object.values(errorElement).forEach((element) => {
		if (element) {
			element.textContent = "";
		}
	});
};

const styleOutline = (input) => {
	input.style.outline = "1px solid var(--red)";
	input.style.border = "1px solid var(--red)";
}

const resetStyleOutline = (input) => {
	input.style.outline = "";
	input.style.border = "";
} 
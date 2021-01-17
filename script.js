function compute()
{
		//Create variables from input
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    
    //do math
    let interest = principal * years * rate / 100;
    let endYear = new Date().getFullYear() + parseInt(years);

    //compound interest formula
    let compounded = principal * (1 + rate/12) ** (12 * years)
		
    //validate the principal. If negative or 0 alert user and focus on principal
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    
    //display result
    document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,<br>at an interest rate of 
    <mark>${rate}</mark>.<br>You will receive an amount of <mark>${interest}</mark>,<br>in the year <mark>${endYear}</mark><br>
    <br>If you were to have monthly compounded interest at the end your balance instead would be <mark>${compounded}</mark>`;
}

//display rate % by slider
function rangeReader()
{
    let sliderValue = document.getElementById("rate").value;
    document.getElementById("sliderValue").innerText = `${sliderValue}%`;
}
        
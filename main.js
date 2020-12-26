var floatingInputName = document.getElementById("floatingInputName");
var floatingInputNumber = document.getElementById("floatingInputNumber");
var inputStateMonth = document.getElementById("inputStateMonth");
var inputStateYear = document.getElementById("inputStateYear");
var inputCcv = document.getElementById("inputCcv");
var frontImg = document.getElementById("frontImg");
var backImg = document.getElementById("backImg");
var inputNumberText = document.getElementById("inputNumberText");
var inputNameText = document.getElementById("inputNameText");
var inputMonthText = document.getElementById("inputMonthText");
var inputYearText = document.getElementById("inputYearText");
var inputCcvText = document.getElementById("inputCcvText");
var card1 = document.getElementById("card1");


floatingInputName.addEventListener("input",(e)=>{
    inputNameText.textContent = e.target.value;
});

floatingInputNumber.addEventListener("input",(e)=>{
   
    inputNumberText.textContent = e.target.value;
    if (e.target.value[0] == 4 && e.target.value[1]==1 || e.target.value[1]==0) {
        frontImg.setAttribute("src","images/visa.svg")
        backImg.setAttribute("src","images/visa.svg")
    }
    else if(e.target.value[0] == 5 && e.target.value[1]==5 || e.target.value[1]==1){
        frontImg.setAttribute("src","images/mastercard.svg")
        backImg.setAttribute("src","images/mastercard.svg")
    }
    else {
        frontImg.setAttribute("src","")
        backImg.setAttribute("src","")
    }
});

inputStateMonth.addEventListener("change",(e)=>{
    inputMonthText.textContent = e.target.value;
});

inputStateYear.addEventListener("change",(e)=>{
    inputYearText.textContent = e.target.value;
});

inputCcv.addEventListener("input",(e)=>{
    inputCcvText.textContent = e.target.value;
});
inputCcv.addEventListener("click",()=>{
    //card1.classList.toggle("onHover");
   

});


/* Card Formatter */
function formatCardNumber(event, element) {
	if (isNaN(event.key) && !isAllowedKey(event)) {
		event.preventDefault();
	} else {
		if (event.keyCode != 8) {
			if(element.value.length > 14) {
				var position = element.selectionStart;
				element.value = element.value.replace(/\W/gi, '').replace(/^(.{4})(.{4})(.{4})(.*)$/, "$1 $2 $3 $4");
				if(element.value.length != 19) {
					element.setSelectionRange(position, position);
				}
			}
			else {
				element.value = element.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
			}
		}
	}		
}



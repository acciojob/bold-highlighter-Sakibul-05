let boldTexts = document.getElementsByTagName("strong");
function highlight() {
    //Write your code here
	for (let boldText of boldTexts) {
		boldText.style.color = "green";
	}

}


function return_normal() {
    //Write your code here
	for (let boldText of boldTexts) {
		boldText.style.color = "black";
	}
    
}

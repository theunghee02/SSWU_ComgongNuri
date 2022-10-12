// let hasChild = document.querySelector('.hasChild');

// hasChild.addEventListener('click', function() {
//     hasChild.classList.toggle('hasChild')
// })

function childList(){
	let child = document.getElementById("li_sub_div");
	if(child.style.display=="block"){
        child.style.display = "none";
    }
	else if(child.style.display=="none"){
        child.style.display = "block";
    }
}
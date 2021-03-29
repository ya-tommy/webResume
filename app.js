function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'style.css') { 
        theme.href = 'nightStyle.css';
    } 
    else { 
        theme.href = 'style.css';
    }

    // Saves the value of checkbox
    var check = document.getElementById('cb');
    localStorage.setItem("cb", check.checked);
}

// Loading the saved value of checkbox
var checked = JSON.parse(localStorage.getItem("cb"));
document.getElementById("cb").checked = checked;

var theme = document.getElementsByTagName('link')[0];
if (document.getElementById('cb').checked ==  true) {
    theme.href = 'nightStyle.css';
}
else {
    theme.href = 'style.css';
}

if(/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.getElementById("mymenu").style.backgroundColor = "rgba(0, 0, 0)";
}

function navSideOpen() {
    document.getElementById("mymenu").style.width = "100%";
    document.getElementById("content").style.overflow = "hidden";	
    document.getElementById("content").style.height = "100%";
    document.getElementById("content").style.margin = "0%";
}

function navSideClosed() {
    document.getElementById("mymenu").style.width = "0";
}

document.addEventListener('keydown', function(e){
	if(e.key === "Escape") {
		document.getElementById("mymenu").style.width = "0";
	}
});


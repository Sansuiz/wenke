const ls = document.querySelector('#lightToggle');
const lsIcon = ls.querySelectorAll('svg');

let darkMode = localStorage.getItem("theme")

if (darkMode === "dark") enableDarkMode()

ls.addEventListener("click", e => {
  darkMode = localStorage.getItem("theme")
  if (darkMode === "dark") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
  toggleLSIcon();
})

function enableDarkMode() {
  document.body.classList.add("dark")
  localStorage.setItem("theme", "dark")
}

function disableDarkMode() {
  document.body.classList.remove("dark")
  localStorage.setItem("theme", "light")
}
window
.matchMedia("(prefers-color-scheme: dark)")
.addListener(e => (e.matches ? enableDarkMode() : disableDarkMode()))


//togle Dark mode
function toggleLSIcon() {
	lsIcon.forEach((lsi) => {
		if (lsi.classList.contains('hidden')) {
			lsi.classList.remove('hidden');
		} else {
			lsi.classList.add('hidden');
		}
	});
	
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("lightToggle").style.opacity = "1";
  } else {
    document.getElementById("lightToggle").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
} 


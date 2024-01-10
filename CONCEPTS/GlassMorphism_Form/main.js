const tutorials = document.querySelectorAll('li')
const tutorialName = document.getElementById("tutorial-name")
const paragraph = document.getElementById("paragraph")
const bigGlass = document.querySelector(".big-glass")

tutorials.forEach((tutorial) => {
    tutorial.addEventListener('click', () => {
        if(tutorial.getAttribute("data-value") == "python"){
            tutorialName.innerText = "Python"
            paragraph.innerText = "Somethings about Python"
            bigGlass.classList.remove("animation")
        }
        else if(tutorial.getAttribute("data-value") == "c++"){
            tutorialName.innerText = "C++"
            paragraph.innerText = "Somethings about C++"
            bigGlass.classList.remove("animation")
        }
        else if(tutorial.getAttribute("data-value") == "php"){
            tutorialName.innerText = "PHP"
            paragraph.innerText = "Somethings about PHP"
            bigGlass.classList.remove("animation")
        }
        else if(tutorial.getAttribute("data-value") == "javascript"){
            tutorialName.innerText = "Javascript"
            paragraph.innerText = "Somethings about JavascriptHP"
            bigGlass.classList.remove("animation")
        }
        else{
            tutorialName.innerText = "Hello, Welcome to our community!"
            paragraph.innerText = "We teach many things about programming, if you wanna be a programmer just click the tutorial and learn it!"
            bigGlass.classList.remove("animation")
        }
        setInterval(interval, 0)
    })
})
function interval(){
    bigGlass.classList.add("animation")
}
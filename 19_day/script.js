let elements = {};
document.querySelectorAll(".contents").forEach(el => {
    el.addEventListener("mouseover", () => {

        elements[el] = setTimeout(() => {
            
            el.classList.add("target");
            console.log(el.classList);
        }, 1500)
        console.log( elements);
    })
    el.addEventListener("mouseout", () => {
        clearTimeout(elements[el])
    })
});
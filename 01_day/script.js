var imgs = document.querySelectorAll(".slide");

for (const im of imgs) {
    im.addEventListener('click', () => {
        imgs.forEach(element => {
            element.classList.remove("active");
           
        });
        im.classList.add("active");
       
    })
}

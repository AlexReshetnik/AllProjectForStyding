var imgs = document.querySelectorAll(".img");

for (const im of imgs) {
    im.addEventListener('click', () => {
        imgs.forEach(element => {
            element.classList.remove("active");
           
        });
        im.classList.add("active");
       
    })
}
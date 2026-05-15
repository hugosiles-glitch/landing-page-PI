const boxes = document.querySelectorAll(".click-box");

boxes.forEach(box => {

    box.addEventListener("click", () => {

        boxes.forEach(item => {

            if(item != box){
                item.classList.remove("activa");
            }

        });

        box.classList.toggle("activa");

    });

});

const card = document.querySelector(".desplegable-card");

card.addEventListener("click", () => {
    card.classList.toggle("activa");
});

const links = document.querySelectorAll(".enlaces-navegacion a");

links.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const id = link.getAttribute("href").replace("#", "");

        const box = document.getElementById(id);

        boxes.forEach(item => {
            item.classList.remove("activa");
        });

        box.classList.add("activa");

        setTimeout(() => {

            box.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 300);

    });

});
const main = document.querySelector("#main");
for (var i = 0; i <= 50; i++) {
    const boxes = document.createElement('div')
    boxes.classList.add("box")
    main.appendChild(boxes)
}
function animateboxes() {
    anime({
        targets: ".box",
        opacity: 0.5,
        translateX: function () {
            return anime.random(-700, 700)
        }, translateY: function () {
            return anime.random(-400, 400)
        }, scale: function () {
            return anime.random(1, 7)
        },
        easing: 'linear',
        duration: 2500,
        delay: anime.stagger(30),
        complete: animateboxes
    })
}
animateboxes();
var textWrapper = document.querySelector('.text .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.text .letter',
        translateX: function () {
            return anime.random(-700, 700)
        }, translateY: function () {
            return anime.random(-500, 500)
        },
        duration: 3,
        delay: 5000
    }).add({
        targets: '.text .letter',
        translateX: 0,
        translateY: 0,
        opacity: 1,
        duration: 3000,
        easing: "linear",
        delay: anime.stagger(50)
    }).add({
        targets: '.text .letter',
        translateX: function () {
            return anime.random(-700, 700)
        }, translateY: function () {
            return anime.random(-500, 500)
        },
        opacity: 0,
        duration: 3000,
        easing: "linear",
        delay: 5000
    });
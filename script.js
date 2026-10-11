const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
    "Light travels faster than sound. This is why some people appear bright until they speak.",
    "I'm not lazy, I'm just on energy-saving mode.",
    "Wow, it compiles on the first try? Enjoy your future bugs.",
    "The reward for good work is more work. Enjoy your prize!",
    "If at first you don't succeed, then skydiving definitely isn't for you."
];

button.addEventListener("click", () => {
    globe.classList.remove("shaking");
    void globe.offsetWidth;
    globe.classList.add("shaking");
    
    const pick = Math.floor(Math.random() * messages.length);
    message.textContent = messages[pick];
});

globe.addEventListener("animationend", () => {
    globe.classList.remove("shaking");
});
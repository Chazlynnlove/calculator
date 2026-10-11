const globe = document.querySelector("#globe")
const button = document.querySelector("#shake")
const message = document.querySelector("#message")

button.addEventListener("click", () =>{
    globe.classList.add("shaking")
    setTimeout(() => globe.classList.remove("shaking"), 600);
});

const messages = [
    "Light travels faster than sound. This is why some people appear bright until they speak.",
    "I’m not lazy, I’m just on energy-saving mode.",
    "Wow, it compiles on the first try? Enjoy your future bugs.",
    "The reward for good work is more work. Enjoy your prize!",
    "If at first you don't succeed, then skydiving definitely isn't for you."
];

button.addEventListener("click", () => {
    globe.classList.add(shaking);
    setTimeout(() => globe.classList.remove("shaking"), 600);

    const pick = Math.floor(Math.random() * messages.length);
    message.textContent = messages[pick];
})
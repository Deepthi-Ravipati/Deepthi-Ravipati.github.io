// Dark mode toggle functionality
const toggleButton = document.createElement('button');
toggleButton.innerHTML = "Toggle Dark Mode";
document.body.appendChild(toggleButton);

toggleButton.style.position = "fixed";
toggleButton.style.top = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px 20px";
toggleButton.style.backgroundColor = "#007BFF";
toggleButton.style.color = "white";
toggleButton.style.border = "none";
toggleButton.style.cursor = "pointer";
toggleButton.style.zIndex = 1000;

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


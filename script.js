const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')  // splitting inner text (email) into an array, which will put each letter in its own item in the array
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)  // mapping it to create an array of the letter with a span around it
    .join('') // turning back array into a string
})
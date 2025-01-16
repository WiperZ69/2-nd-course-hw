document.querySelector('.btn').addEventListener('click', () => {
    const titleEl = document.querySelector('.title')
    titleEl.classList.toggle('hidden')
});
document.querySelector('.btn-color').addEventListener('click', () => {
    const textEl = document.querySelector('.text');
    textEl.style.color = 'blue';
});

document.querySelector('.btn-change-title').addEventListener('click', () => {
    const titleElTwo = document.querySelector('.titleTwo');
    titleElTwo.textContent = 'Привет, мир!';
});
document.querySelector('.btn-change-text').addEventListener('click', () => {
    const textElTwo = document.querySelectorAll('.description');
    textElTwo.forEach(text => text.textContent = 'Текст изменился!');
});

document.querySelector('.btn-change-desc').addEventListener('click', () => {
    const textElTwo = document.querySelectorAll('.description');
    textElTwo.forEach(text => text.textContent = 'Новый текст!');
});

document.querySelector('.btn-new').addEventListener('click', () => {
    const newtext = document.createElement('p');
    newtext.textContent = 'Новый абзац!';
    newtext.classList.add('new-text');
    document.body.appendChild(newtext);
});

document.querySelector('.btn-delete').addEventListener('click', () => {
    const firstText = document.querySelector('.description');
    document.body.removeChild(firstText);
});
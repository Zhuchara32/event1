let div = document.createElement('div');
div.innerText = 'Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.';
div.id = 'content';
document.querySelector('body').prepend(div);

let area = document.createElement('textarea');
area.innerText = div.innerText;
area.id = 'area';
document.querySelector('body').prepend(area);
area.style.width = area.style.height = '100%';
area.style.display = 'none';


document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        div.style.display = 'none';
        area.style.display = 'inline-block';
    }
    else if (event.code == 'Equal' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        area.style.display = 'none';
        div.style.display = 'block';
        div.innerText = area.value;
    }
});
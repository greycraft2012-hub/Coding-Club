let managerbtnClick = document.querySelector('.manager_btn');
let menubtnClick = document.querySelector('.leavebtn');
let resourcebtnClick = document.querySelector('.tutorials');

// Ensure the buttons exist before adding listeners
if (managerbtnClick) {
    managerbtnClick.addEventListener('click', () => {
        window.location.href = 'manager_page.html';
    });
}

if (menubtnClick) {
    menubtnClick.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

if (resourcebtnClick) {
    resourcebtnClick.addEventListener('click', () => {
        window.location.href = 'resources.html';
    });
}
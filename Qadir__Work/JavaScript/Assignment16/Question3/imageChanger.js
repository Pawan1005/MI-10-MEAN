let isChange = 0;
function imageWithHeadingChange() {
    let img = document.getElementById('legends');
    let heading = document.getElementById('heading');

    if (isChange == 0) {
        img.src = './img/Bill Gates.jpg';
        img.alt = 'Bill Gates';
        heading.innerText = 'Bill Gates';
        isChange = 1;
    }
    else if (isChange == 1) {
        img.src = './img/Elon Musk.jpg';
        img.alt = 'Elon Musk';
        heading.innerText = 'Elon Musk';
        isChange = 2;
    }
    else {
        img.src = './img/Steve Jobs.jpg';
        img.alt = 'Steve Jobs';
        heading.innerText = 'Steve Jobs';
        isChange = 0;
    }
}

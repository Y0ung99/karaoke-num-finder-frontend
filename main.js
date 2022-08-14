const searchTab = document.querySelector('.searchTab');
const popularTab = document.querySelector('.popularTab');
const newsongTab = document.querySelector('.newsongTab');
const bookmarkTab = document.querySelector('.bookmarkTab');

const selectDate = document.querySelector('#selectDate');
const selectCompany = document.querySelector('#selectCompany');
const selectOptions = document.querySelector('#selectOptions');
const searchTxt = document.querySelector('.searchTxt');
const searchBtn = document.querySelector('.searchBtn');
const list = document.querySelector('.list');

searchTab.addEventListener('click', () => {
    location.reload();
})

popularTab.addEventListener('click', () => {
    changePopularTab();
})

newsongTab.addEventListener('click', () => {
    changeNewsongTab();
})

bookmarkTab.addEventListener('click', () => {
    changeBookmarkTab();
})

searchBtn.addEventListener('click', () => {
    search()
    .then(songs => {
        console.log(songs);
        list.innerHTML = songs.map(song => listHTML(song)).join('');
    })

    
})

function changePopularTab() {
    hideSearchBar();
    selectCompany.style.visibility = 'visible'
    selectDate.style.visibility = 'visible';``
}

function changeNewsongTab() {
    hideSearchBar();
    selectCompany.style.visibility = 'visible'
    selectDate.style.visibility = 'hidden';
}

function changeBookmarkTab() {
    hideSearchBar();
    selectDate.style.visibility = 'hidden';
}

function hideSearchBar() {
    selectCompany.style.visibility = 'hidden';
    selectOptions.style.visibility = 'hidden';
    searchTxt.style.visibility = 'hidden';
    searchBtn.style.visibility = 'hidden';
}

async function search() { // 
    const text = searchTxt.value;
    const company = selectCompany.value;
    const option = selectOptions.value;
    const data = {text, company, option};

    const response = await fetch('http://127.0.0.1:8080/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })

    return response.json();
}

function listHTML(song) {
    const {num, title, singer} = song;
    return `
    <div class="line">
        <div class="num">${num}</div>
        <div class="info">
            <div class="title">
            ${title}
            </div>
            <div class="singer">${singer}</div>
        </div>
    </div>
    <div class="divider"></div>  
`
}
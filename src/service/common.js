export const logo = document.querySelector('.logo');
export const searchTab = document.querySelector('.searchTab');
export const popularTab = document.querySelector('.popularTab');
export const newsongTab = document.querySelector('.newsongTab');
export const bookmarkTab = document.querySelector('.bookmarkTab');
export const loginTab = document.querySelector('.c_login');
export const genreBtn = document.querySelector('.genreBtn');
export const newBtn = document.querySelector('.newBtn');
export const acception = document.querySelector('.acception')
export const email = document.querySelector('.email');
export const name = document.querySelector('.name')
export const welcome = document.querySelector('.welcome');
export const convertor = document.querySelector('#convertor');
export const selectDate = document.querySelector('#selectDate');
export const searchTxt = document.querySelector('.searchTxt');
export const searchBtn = document.querySelector('.searchBtn');
export const main = document.querySelector('.main');
export const list = document.querySelector('.list');
export const submit = document.querySelector('.submit');
export const anchors = document.querySelector('.anchors');
export const selectCompany = document.querySelector('#selectCompany');
export const selectOptions = document.querySelector('#selectOptions');

export function listHTML(song) {
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

export function hideSearchBar() {
    selectCompany.style.display = 'none';
    selectOptions.style.display = 'none';
    searchTxt.style.display = 'none';
    searchBtn.style.display = 'none';
    
}

export function hideGenreBtn() {
    genreBtn.style.display = 'none';
}

export function hideTabs() {
    searchTab.style.visibility = 'hidden';
    popularTab.style.visibility = 'hidden';
    bookmarkTab.style.visibility = 'hidden';
    newsongTab.style.visibility = 'hidden';
}

export function hideNameEmail() {
    name.style.display = 'none';
    email.style.display = 'none';
}

export function viewNameEmail() {
    name.style.display = 'block';
    email.style.display = 'block';
}

export function hideMain() {
    main.style.visibility = 'hidden';
}

export function changePopularTab() {
    hideSearchBar();
    selectCompany.style.display = 'inline-block';
    newBtn.style.display = 'none';
    genreBtn.style.display = 'inline-block';
}

export function changeNewsongTab() {
    hideSearchBar();
    selectCompany.style.display = 'inline-block';
    genreBtn.style.display = 'none';
    newBtn.style.display = 'inline-block';
}

export function changeBookmarkTab() {
    hideSearchBar();
    hideGenreBtn();
}

export function addSongsToList(songs) {
    list.innerHTML = songs.map(song => listHTML(song)).join('');
}

export function intervalAuth(sec, func) {
    func();
    return setInterval(func, sec);
}
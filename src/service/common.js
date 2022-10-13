export const logo = document.querySelector('.logo');
export const searchTab = document.querySelector('.searchTab');
export const popularTab = document.querySelector('.popularTab');
export const newsongTab = document.querySelector('.newsongTab');
export const bookmarkTab = document.querySelector('.bookmarkTab');
export const loginTab = document.querySelector('.c_login');
export const genreBtn = document.querySelector('.genreBtn');
export const newBtn = document.querySelector('.newBtn');
export const acception = document.querySelector('.acception')
export const name = document.querySelector('.name')
export const email = document.querySelector('.email');
export const nameTxt = document.querySelector('.nameTxt')
export const emailTxt = document.querySelector('.emailTxt');
export const listdivider = document.querySelector('.list-divider');
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
export const waitingUI = document.querySelector('.waiting');

export const store = [];
let markerBtn;
let deleteBtn;

export function listHTML(song) {
    const {num, title, singer} = song;
    return `
    <div class="line">
        <div class="song-info">
            <div class="num">${num}</div>
            <div class="info">
                <div class="title">
                ${title}
                </div>
                <div class="singer">${singer}</div>
            </div>
        </div>
        <div class="marker">
            <i class="marker-button fa-sharp fa-solid fa-star" num="${num}" title="${title}" singer="${singer}"></i>
            <i class="delete-button fa-solid fa-trash" num="${num}"></i>
        </div>
    </div>
    <div class="list-divider"></div>
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
    nameTxt.style.display = 'none';
    emailTxt.style.display = 'none';
}

export function hideAnchors() {
    anchors.style.display = 'none';
}

export function viewNameEmail() {
    name.style.display = 'block';
    email.style.display = 'block';
    nameTxt.style.display = 'inline-block';
    emailTxt.style.display = 'inline-block';
}

export function hideMain() {
    main.style.visibility = 'hidden';
}

export function changePopularTab() {
    hideSearchBar();
    clearList();
    selectCompany.style.display = 'inline-block';
    hideNewBtn();
    genreBtn.style.display = 'inline-block';
}

export function changeNewsongTab() {
    hideSearchBar();
    clearList();
    viewNewBtn();
    selectCompany.style.display = 'inline-block';
    genreBtn.style.display = 'none';
}

export function changeBookmarkTab() {
    hideSearchBar();
    hideGenreBtn();
    clearList();
    hideNewBtn();
    
}

export const addSongsToList = (songs, type) => {
    songs.map(song => {
        const isExist = store.some(s_song => s_song.num === song.num);
        if (!isExist) store.push(song);
    });
    list.innerHTML = store.map(song => listHTML(song)).join('');
    
    markerBtn = document.getElementsByClassName('marker-button');
    deleteBtn = document.getElementsByClassName('delete-button');

    if (type === 'marker') hideDeleteBtn();
    else if (type === 'delete') hideMarkerBtn();
    
    hideWaitingUI();
}

export function hideMarkerBtn() {
    for(let i = 0; i < markerBtn.length; i++) {
        markerBtn.item(i).style.display = 'none';
        deleteBtn.item(i).style.display = 'inline-block';
    }
}

export function hideDeleteBtn() {
    for(let i = 0; i < markerBtn.length; i++) {
        markerBtn.item(i).style.display = 'inline-block';
        deleteBtn.item(i).style.display = 'none';
    }
}

export function hideNewBtn(){
    newBtn.style.display = 'none';
}

export function viewNewBtn(){
    newBtn.style.display = 'inline-block';
}

export function createPageButton(songs, type) {
    clearList();
    for(let i = 1; i <= Math.ceil(songs.length / 100); i++) {
        const pageBtn = document.createElement('button');
        pageBtn.innerText = i;
        pageBtn.setAttribute('page', `${i}`);
        pageBtn.addEventListener('click', () => {
            let start = 1 + (i - 1) * 100;
            addSongsToList(songs.slice(start - 1, i * 100 - 1), type);
        });
        anchors.appendChild(pageBtn);
    }
}

export function clearList() {
    list.innerHTML = '';
    store.length = 1;
    anchors.innerHTML = '';
}

export function intervalAuth(sec, func) {
    func();
    return setInterval(func, sec);
}

export function viewWaitingUI() {
    waitingUI.style.display = 'inline';
}

export function hideWaitingUI() {
    waitingUI.style.display = 'none';
}
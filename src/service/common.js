export const searchTab = document.querySelector('.searchTab');
export const popularTab = document.querySelector('.popularTab');
export const newsongTab = document.querySelector('.newsongTab');
export const bookmarkTab = document.querySelector('.bookmarkTab');
export const loginTab = document.querySelector('.c_login');
export const acception = document.querySelector('.acception')
export const selectDate = document.querySelector('#selectDate');
export const searchTxt = document.querySelector('.searchTxt');
export const searchBtn = document.querySelector('.searchBtn');
export const main = document.querySelector('.main');
export const list = document.querySelector('.list');
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
    selectCompany.style.visibility = 'hidden';
    selectOptions.style.visibility = 'hidden';
    searchTxt.style.visibility = 'hidden';
    searchBtn.style.visibility = 'hidden';
}

export function hideTabs() {
    searchTab.style.visibility = 'hidden';
    popularTab.style.visibility = 'hidden';
    bookmarkTab.style.visibility = 'hidden';
    newsongTab.style.visibility = 'hidden';
}

export function hideMain() {
    main.style.visibility = 'hidden';
}

export function changePopularTab() {
    hideSearchBar();
    selectCompany.style.visibility = 'visible'
    selectDate.style.visibility = 'visible';``
}

export function changeNewsongTab() {
    hideSearchBar();
    selectCompany.style.visibility = 'visible'
    selectDate.style.visibility = 'hidden';
}

export function changeBookmarkTab() {
    hideSearchBar();
    selectDate.style.visibility = 'hidden';
}

export function intervalAuth(sec, func) {
    func();
    return setInterval(func, sec);
}
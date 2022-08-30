import { Search } from './search.js';
import { searchTxt, searchBtn, selectCompany, selectOptions } from './common.js';

const searchTab = document.querySelector('.searchTab');
const popularTab = document.querySelector('.popularTab');
const newsongTab = document.querySelector('.newsongTab');
const bookmarkTab = document.querySelector('.bookmarkTab');
const selectDate = document.querySelector('#selectDate');


const search = new Search();

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






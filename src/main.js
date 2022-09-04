import { searchTab, popularTab, newsongTab, bookmarkTab, loginTab, changeBookmarkTab, changePopularTab, changeNewsongTab, acception, hideSearchBar, hideMain, hideTabs, intervalAuth} from './service/common.js';
import TokenStorage from './db/token.js';
import Http from './network/http.js';
import Auth from './service/auth.js';
import Search from './service/search.js';

const baseURL = 'http://127.0.0.1:8080'
const http = new Http(baseURL);
const tokenStorage = new TokenStorage();
const search = new Search();
const auth = new Auth(http, tokenStorage);

intervalAuth(30000, verify);

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

const loginListener = () => {
    hideSearchBar();
    hideTabs();
    hideMain();
    acception.style.display = 'inherit';
}

const logoutListenr = () => {
    tokenStorage.clearToken();
    alert('로그아웃 되었습니다.');
    location.reload();
}

async function verify() {
    const response = await auth.me();
    if (response.username) {
        loginTab.innerHTML = '로그아웃';
        loginTab.removeEventListener('click', loginListener);
        loginTab.addEventListener('click', logoutListenr);
    } else {
        loginTab.innerHTML = '로그인';
        loginTab.removeEventListener('click', logoutListenr);
        loginTab.addEventListener('click', loginListener);
    }
}



import { logo, searchTab, popularTab, newsongTab, bookmarkTab, loginTab, changeBookmarkTab, changePopularTab, changeNewsongTab, acception, hideSearchBar, hideMain, hideTabs, intervalAuth, hideNameEmail, convertor, viewNameEmail, welcome, submit, hideGenreBtn} from './service/common.js';
import TokenStorage from './db/token.js';
import Http from './network/http.js';
import Auth from './service/auth.js';
import Search from './service/search.js';
import Chart from './service/chart.js';

const baseURL = 'http://127.0.0.1:8080'
const http = new Http(baseURL);
const chart = new Chart(http);
const tokenStorage = new TokenStorage();
const auth = new Auth(http, tokenStorage);
const search = new Search();

intervalAuth(30000, loginVerify);

logo.addEventListener('click', () => {
    location.reload();
})

searchTab.addEventListener('click', () => {
    location.reload();
})

popularTab.addEventListener('click', () => {
    changePopularTab();
    chart.changePopular();
})

newsongTab.addEventListener('click', () => {
    changeNewsongTab();
    chart.changeNew();
})

bookmarkTab.addEventListener('click', () => {
    changeBookmarkTab();
})


convertor.addEventListener('change', (event) => {
    if (event.target.checked) {
        viewNameEmail();
        welcome.innerHTML = '회원가입을 환영합니다!';
        submit.innerHTML = '회원가입';
    } else {
        hideNameEmail();
        welcome.innerHTML = '로그인을 환영합니다!';
        submit.innerHTML = '로그인';
    }
});

const loginListener = () => {
    hideSearchBar();
    hideTabs();
    hideGenreBtn();
    hideMain();
    hideNameEmail();

    acception.style.display = 'inherit';
}

const logoutListenr = () => {
    tokenStorage.clearToken();
    alert('로그아웃 되었습니다.');
    location.reload();
}


async function loginVerify() {
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

export default class Auth {
    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
        this.usernameTxt = document.querySelector('.usernameTxt');
        this.passTxt = document.querySelector('.passTxt');
        this.nameTxt = document.querySelector('.nameTxt');
        this.emailTxt = document.querySelector('.emailTxt');
        this.loginBtn = document.querySelector('.login');

        if (this.loginBtn) {
            this.loginBtn.addEventListener('click', async () => {
                const username = this.usernameTxt.value;
                const pass = this.passTxt.value;
                const name = this.nameTxt.value;
                const email = this.emailTxt.value;
                let data;
    
                if (name && email) {
                    data = await this.signin(username, pass, name, email);
                } else {
                    data = await this.login(username, pass);
                }

                if (data.token) {
                    location.reload();
                    alert(`${data.username}님 로그인하셨습니다.`);
                } else {
                    alert(data);
                }
            });
        }
    }

    async signin(username, password, name, email) {
        const data = await this.http.fetch('/auth/signin', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
                name,
                email,
            }),
        });
        if (data.token) {
            this.tokenStorage.saveToken(data.token);
        }
        return data;

    }

    async login(username, password) {
        const data = await this.http.fetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
        });
        if (data.token) {
            this.tokenStorage.saveToken(data.token);
        }
        return data;
    }

    me = async () => {
        const token = this.tokenStorage.getToken();
        return this.http.fetch('/auth/me', {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}`},
        });
    }

    async logout() {
        this.tokenStorage.clearToken();
    }

    getHeader() {
        const token = this.tokenStorage.getToken();
        return {
            Authorization: `Bearer ${token}`,
        }
    }
}
import { addSongsToList, baseURL, clearList, selectCompany, viewWaitingUI } from './common.js';

export default class Chart {
    constructor() {
        this.kpopBtn = document.querySelector('.kpop');
        this.jpopBtn = document.querySelector('.jpop');
        this.popBtn = document.querySelector('.pop');
        this.newBtn = document.querySelector('.newsong');
    }

    changePopular() {
        this.kpopBtn.addEventListener('click', this.kPopular);
        this.jpopBtn.addEventListener('click', this.jPopular);
        this.popBtn.addEventListener('click', this.pPopular);
    }

    changeNew() {
        this.newBtn.addEventListener('click', this.newsong);
    }

    async kPopular() {
        viewWaitingUI();
        clearList();
        const company = selectCompany.value;
        const response = await fetch(`${baseURL}/chart/popular/kpop`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ company }),
        });
        response.json().then(songs => addSongsToList(songs, 'marker'));
    }
    async jPopular() {
        viewWaitingUI();
        clearList();
        const company = selectCompany.value;
        const response = await fetch(`${baseURL}/chart/popular/jpop`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ company }),
        });
        response.json().then(songs => addSongsToList(songs, 'marker'));
    } 

    async pPopular() {
        viewWaitingUI();
        clearList();
        const company = selectCompany.value;
        const response = await fetch(`${baseURL}/chart/popular/pop`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ company }),
        });
        response.json().then(songs => addSongsToList(songs, 'marker'));
    }

    async newsong() {
        viewWaitingUI();
        clearList();
        const company = selectCompany.value;
        const response = await fetch(`${baseURL}/chart/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ company }),
        });
        response.json().then(songs => addSongsToList(songs, 'marker'));
    }
}
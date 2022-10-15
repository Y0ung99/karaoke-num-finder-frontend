import { addSongsToList, selectCompany } from './common.js';

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
        const company = selectCompany.value;
        const response = await fetch('http://127.0.0.1:8080/chart/popular/kpop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ company }),
        });
        response.json().then(songs => addSongsToList(songs, 'marker'));
    }
    async jPopular() {
        const company = selectCompany.value;
        const response = await fetch('http://127.0.0.1:8080/chart/popular/jpop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ company }),
        });
        response.json().then(songs => addSongsToList(songs, 'marker'));
    } 

    async pPopular() {
        const company = selectCompany.value;
        const response = await fetch('http://127.0.0.1:8080/chart/popular/pop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ company }),
        });
        response.json().then(songs => addSongsToList(songs, 'marker'));
    }

    async newsong() {
        const company = selectCompany.value;
        const response = await fetch('http://127.0.0.1:8080/chart/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ company }),
        });
        response.json().then(songs => addSongsToList(songs, 'marker'));
    }
}
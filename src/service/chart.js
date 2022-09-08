import { addSongsToList, selectCompany } from './common.js';

export default class Chart {
    constructor() {
        this.kpopBtn = document.querySelector('.kpop');
        this.jpopBtn = document.querySelector('.jpop');
        this.popBtn = document.querySelector('.pop');
    }

    changePopular() {
        this.kpopBtn.innerHTML = '한국인기';
        this.jpopBtn.innerHTML = '일본인기';
        this.popBtn.innerHTML = 'POP인기';
        this.deleteNewEvent();
        this.kpopBtn.addEventListener('click', this.kPopular);
        this.jpopBtn.addEventListener('click', this.jPopular);
        this.popBtn.addEventListener('click', this.pPopular);
    }

    changeNew() {
        this.kpopBtn.innerHTML = '한국신곡';
        this.jpopBtn.innerHTML = '일본신곡';
        this.popBtn.innerHTML = 'POP신곡';
        this.deletePopularEvent();
        this.kpopBtn.addEventListener('click', this.kNew);
        this.jpopBtn.addEventListener('click', this.jNew);
        this.popBtn.addEventListener('click', this.pNew);
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
        response.json().then(songs => addSongsToList(songs));
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
        response.json().then(songs => addSongsToList(songs));
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
        response.json().then(songs => addSongsToList(songs));
    }

    async kNew() {
        const company = selectCompany.value;
        const response = await fetch('http://127.0.0.1:8080/chart/new/kpop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ company }),
        });
        response.json().then(songs => console.log(songs));
    }

    async jNew() {
        const company = selectCompany.value;
        const response = await fetch('http://127.0.0.1:8080/chart/new/jpop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ company }),
        });
        response.json().then(songs => addSongsToList(songs));
    } 

    async pNew() {
        const company = selectCompany.value;
        const response = await fetch('http://127.0.0.1:8080/chart/new/pop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ company }),
        });
        response.json().then(songs => addSongsToList(songs));
    }

    deletePopularEvent() {
        this.kpopBtn.removeEventListener('click', this.kPopular);
        this.jpopBtn.removeEventListener('click', this.jPopular);
        this.popBtn.removeEventListener('click', this.pPopular);
    }

    deleteNewEvent() {
        this.kpopBtn.removeEventListener('click', this.kNew);
        this.jpopBtn.removeEventListener('click', this.jNew);
        this.popBtn.removeEventListener('click', this.pNew);
    }

    bringCompany() {
        return selectCompany.value;
    }
}
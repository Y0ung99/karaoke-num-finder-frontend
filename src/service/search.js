import {searchTxt, searchBtn, anchors, selectCompany, selectOptions, addSongsToList } from './common.js';

export default class Search {
    constructor() {
        searchBtn.addEventListener('click', () => {
            this.search()
            .then(songs => {
                const anchor = songs.pop();
                addSongsToList(songs);
                anchors.innerHTML = this.createAnchors(anchor.page);
                this.linkAnchors(anchor.page);
            });    
        });
    }

    async search(page = 1) { // 
        const text = searchTxt.value;
        const company = selectCompany.value;
        const option = selectOptions.value;
        const data = {text, company, option, page};
        const response = await fetch('http://127.0.0.1:8080/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    
        return response.json();
    }

    createAnchors(numPage) {
        let html = [];
        for (let i = 1; i < numPage + 1; i++) {
            html.push(`<li><button class="a${i}">${i}</button></li>`);
        }
        return html.join('');
    }
    
    linkAnchors(numPage) {
        for (let i = 1; i < numPage + 1; i++) {
            const a = document.querySelector(`.a${i}`);
            a.addEventListener('click', () => {
                this.search(i)
                .then(songs => {
                    const anchor = songs.pop();
                    addSongsToList(songs);
                    anchors.innerHTML = this.createAnchors(anchor.page);
                    this.linkAnchors(anchor.page);
                })
            })
        }
    }
}
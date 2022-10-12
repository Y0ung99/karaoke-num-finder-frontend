import {searchTxt, searchBtn, anchors, selectCompany, selectOptions, addSongsToList, createPageButton, viewWaitingUI, hideWaitingUI} from './common.js';

export default class Search {
    constructor() {
        searchBtn.addEventListener('click', async () => {
            viewWaitingUI();
            const songs = await this.search();
            createPageButton(songs, 'marker');
            addSongsToList(songs.slice(0, 99), 'marker');
        });
    }

    async search() { // 
        const text = searchTxt.value;
        const company = selectCompany.value;
        const option = selectOptions.value;
        const data = {text, company, option};
        const response = await fetch('http://127.0.0.1:8080/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    
        return response.json();
    }
}
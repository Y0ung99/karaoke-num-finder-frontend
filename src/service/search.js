import {searchTxt, searchBtn, anchors, selectCompany, selectOptions, addSongsToList, createPageButton} from './common.js';

export default class Search {
    constructor() {
        searchBtn.addEventListener('click', async () => {
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
        const response = await fetch('https://karanum-dy.herokuapp.com/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    
        return response.json();
    }
}
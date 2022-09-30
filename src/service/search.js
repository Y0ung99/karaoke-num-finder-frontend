import {searchTxt, searchBtn, anchors, selectCompany, selectOptions, addSongsToList, createPageButton} from './common.js';

export default class Search {
    constructor() {
        searchBtn.addEventListener('click', async () => {
            const songs = await this.search();
            console.log(songs);
            createPageButton(songs);
            addSongsToList(songs.slice(0, 99));
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
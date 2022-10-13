import {searchTxt, searchBtn, selectCompany, selectOptions, addSongsToList, createPageButton, viewWaitingUI, clearList, hideWaitingUI} from './common.js';

export default class Search {
    constructor() {
        searchBtn.addEventListener('click', async () => {
            viewWaitingUI();
            await this.search();
        });
        this.abort = new AbortController();
    }

    async getMaxPage(data) {
        const response = await fetch('https://karanum-dy.herokuapp.com/search/maxpage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (response.status >= 400) {
            hideWaitingUI();
            return alert('검색결과를 찾을 수 없습니다.');
        }

        return response.json().then(value => value.pageNum);
    }

    async search() { // 
        const text = searchTxt.value;
        const company = selectCompany.value;
        const option = selectOptions.value;
        if(text === '') return alert('검색어를 입력해주세요.');
        const data = {text, company, option};

        clearList();

        const pageNum = await this.getMaxPage(data);

        for (let page = 1; page <= pageNum; page++) {
            data.page = page;
            const response = await fetch('https://karanum-dy.herokuapp.com/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            }, this.abort.signal);
            if (this.abort.signal.aborted) break;
            response.json().then(songs => addSongsToList(songs, 'marker'));
        }
    }
}
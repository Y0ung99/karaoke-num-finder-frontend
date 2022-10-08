import { addSongsToList, bookmarkTab, changeBookmarkTab, createPageButton, list } from './common.js';

export default class Bookmark {
    constructor(me, tokenStorage) {
        this.me = me;
        this.tokenStorage = tokenStorage;

        list.onclick = event => {
            let target = event.target;
            if (target.className === 'marker-button') {
                this.addSongsToUser(target.getAttribute('num'), target.getAttribute('title'), target.getAttribute('singer'));
            }
            else if (target.className === 'delete-button') {
                this.deleteSongsToUser(target.getAttribute('num'));
            }
        }

        bookmarkTab.addEventListener('click', async () => {
            await this.showBookmarks();
        });
    }
    async showBookmarks() {
        if (await this.me instanceof Error) return alert('로그인 하셔야 사용할 수 있는 기능입니다.');
        changeBookmarkTab();
        const songs = await this.fetchSongToUser();
        createPageButton(songs, 'delete');
        addSongsToList(songs.slice(0, 99), 'delete');
    }

    async fetchSongToUser() {
        const response = await fetch('http://127.0.0.1:8080/bookmark', {
            method: 'GET',
            headers: this.getHeaders(),
        });
        return response.json();
    }

    async addSongsToUser(num, title, singer) {
        if (await this.me instanceof Error) return alert('로그인 하셔야 사용할 수 있는 기능입니다.');
        const me = await this.me;
        const data = {num, title, singer};
        
        const response = await fetch('http://127.0.0.1:8080/bookmark', {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(data),
        });
        response.status >= 400
        ? alert('이미 북마크에 있는 곡입니다')
        : alert(`[번호: ${num}, 제목: ${title}, 가수: ${singer}]라인이 ${me.username}님의 북마크에 추가되었습니다`)
    }

    async deleteSongsToUser(num) {
        if (await this.me instanceof Error) return alert('로그인 하셔야 사용할 수 있는 기능입니다.');
        const me = await this.me;
        const data = {num};
        
        const response = await fetch('http://127.0.0.1:8080/bookmark', {
            method: 'DELETE',
            headers: this.getHeaders(),
            body: JSON.stringify(data),
        });
        response.status >= 400
        ? alert('이미 삭제된 곡입니다')
        : alert(`[번호: ${num}]라인이 ${me.username}님의 북마크에서 삭제되었습니다`);
        await this.showBookmarks();
    }

    getHeaders() {
        const token = this.tokenStorage.getToken();
        return {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
}
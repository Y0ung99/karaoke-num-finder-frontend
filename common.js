export const searchTxt = document.querySelector('.searchTxt');
export const searchBtn = document.querySelector('.searchBtn');
export const list = document.querySelector('.list');
export const anchors = document.querySelector('.anchors');
export const selectCompany = document.querySelector('#selectCompany');
export const selectOptions = document.querySelector('#selectOptions');

export function listHTML(song) {
    const {num, title, singer} = song;
    return `
    <div class="line">
        <div class="num">${num}</div>
        <div class="info">
            <div class="title">
            ${title}
            </div>
            <div class="singer">${singer}</div>
        </div>
    </div>
    <div class="divider"></div>  
`
}
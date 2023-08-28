const searchBtn = document.getElementById('search-btn')
const textEl = document.getElementById('search-bar')
let valueText = ''
textEl.addEventListener('change',() =>{
    valueText = textEl.value.trim().split(' ')
})
const addPlus = function(text){
    let textPlus = ''
    for(let i = 0; i<text.length - 1;i++){
        textPlus+= text[i] + '+'
    }
    textPlus+=text[text.length - 1]
    return textPlus
}
let v = ''
searchBtn.addEventListener('click',async e => {
    e.preventDefault()
    if(valueText){
    const promise = await fetch(`https://www.omdbapi.com/?apikey=e8d4ae36&t=${addPlus(valueText)}`)
    const data = await promise.json()
    const newFilm = document.createElement('div')
    newFilm.classList.add('item')
    newFilm.innerHTML = `
    <img src="${data.Poster}" alt="">
    <div>
        <h3>${data.Title} &nbsp;&nbsp; &nbsp; ${data.Ratings[0].Value}</p></h3>
    <Aside>
        <p>${data.Runtime}</p>
    </Aside>
    <section>
        <p>${data.Genre}</p>
        <div class="add-to">
            <svg id=${data.imdbID} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="hover-svg" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V7H5C4.44772 7 4 7.44771 4 8C4 8.55228 4.44772 9 5 9H7V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H9V5Z" fill="white"/>
            </svg>
            <p>WATCHLIST</p>
        </div>
    </section>

    <p>${data.Plot}<p>`

    document.getElementsByClassName('icon')[0].style.display = 'none'

    document.querySelector('main').appendChild(newFilm)

    }
    
})
export let clickId = []
const idsInLocalStorage = JSON.parse(localStorage.getItem('clickId'))
if(idsInLocalStorage){
    clickId = idsInLocalStorage
}
document.querySelector('main').addEventListener('click',(e) =>{
    if((e.target.tagName === 'svg')){
        
            clickId.unshift(e.target.id)
            localStorage.setItem('clickId',JSON.stringify(clickId))
            console.log(clickId)
        
    }    
})
console.log(clickId)









// `<div class="item">
//     <img src="{IMAGEPATH}" alt="">
//     <div>
//         <h3>{FILMS TITLE} &nbsp;&nbsp; &nbsp; {RATING}</p></h3>
//     <Aside>
//         <p>{MIN} min</p>
//     </Aside>
//     <section>
//         <p>{ROMANCE BLAH BLAH}</p>
//         <div class="add-to">
//             <svg ID={IDIDIDI} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V7H5C4.44772 7 4 7.44771 4 8C4 8.55228 4.44772 9 5 9H7V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H9V5Z" fill="white"/>
//             </svg>
//             <p>WATCHLIST</p>
//         </div>
//     </section>

//     <p>{About fim}<p>
// </div>`
// // https://www.omdbapi.com/?apikey=e8d4ae36&t=title+title

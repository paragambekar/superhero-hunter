
const search = document.getElementById('search');

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
let superherolist = document.getElementById('superheros-list');
// searchBtn.addEventListener('click',function(){

//     console.log(searchInput.value);
//     getHero();

// });


let typingTimer;                //timer identifier
let doneTypingInterval = 1000;  //time in ms (5 seconds)
searchInput.addEventListener('keyup',() =>{
    clearTimeout(typingTimer);
    if (searchInput.value) {
        typingTimer = setTimeout(getHero, doneTypingInterval);
    }
});



function getHero(){
    
    // fetch(`https://www.superheroapi.com/api.php/5233257620086023/search/${searchInput.value}`)
    // .then((response)=>response.json())
    // .then((data)=>
    //     console.log('Data from api',data)
    // )
   
    let url = `https://www.superheroapi.com/api.php/5233257620086023/search/${searchInput.value}`;
    let xhrRequest = new XMLHttpRequest();
    xhrRequest.open('get',url,true);
    xhrRequest.send();
    xhrRequest.onload = function(){
        let data = JSON.parse(xhrRequest.responseText);
        console.log('Data',data);
        displayInfo(data);
    }
}

function showHeroInfo(hero){
    console.log('Hero clicked',hero);
    // similar behavior as an HTTP redirect
    window.location.replace(`./info.html`);
}

function addToFavorite(id,btnId){

    let favHeroes;
    if(localStorage.getItem('favHeroes') === null){
        console.log(localStorage.getItem('favHeroes'));
        favHeroes = [];
    }else{
        favHeroes = JSON.parse(localStorage.getItem('favHeroes'));
    }
    if(!favHeroes.includes(id)){
        favHeroes.push(id);
    }
    
    btnId.innerHTML = `Added to Favorites`
    btnId.style.backgroundColor = '#cc0000'; 
    localStorage.setItem('favHeroes',JSON.stringify(favHeroes));
    console.log(`hero id${id}`);
}

function displayInfo(data){

    let results = data.results;
    if(!results){
        document.getElementById('superheros-list').innerText = 'No hero found';
    }else{
        superherolist.innerHTML = '';
        for(let hero of results){
           
           let infoCard = document.createElement('div');
           infoCard.setAttribute('class','superhero');

           let imageDiv = document.createElement('div');
           imageDiv.setAttribute('class','image');
           let image = document.createElement('img');
           image.setAttribute('src',`${hero.image.url}`);
           imageDiv.appendChild(image)
           infoCard.appendChild(imageDiv);
            
           let nameDiv = document.createElement('div');
           nameDiv.setAttribute('class','name');
           nameDiv.innerHTML = `Name : ${hero.name}`
            infoCard.appendChild(nameDiv);

            let favBtn = document.createElement('div');
            if(localStorage.getItem('favHeroes')!== null){
               let heroes = JSON.parse(localStorage.getItem('favHeroes'));
               if(heroes.includes(hero.id)){
                   favBtn.innerHTML = `Added to Favorites`;
                   favBtn.setAttribute('class','fav-btn');
                   favBtn.style.backgroundColor = '#cc0000';
               }else{
                    favBtn.innerHTML = `Add to Favorite &nbsp; &nbsp;  <i class="fas fa-heart"></i>`;
                    favBtn.setAttribute('class','fav-btn');
               }
            }
            // favBtn.setAttribute('class','fav-btn');
            
            favBtn.addEventListener('click',()=>{
                addToFavorite(hero.id,favBtn);
            });

            let moreInfo = document.createElement('div');
            moreInfo.setAttribute('class','more-info');
            moreInfo.innerHTML = `More Info..`;
           
            moreInfo.addEventListener('click', (event) =>{
                console.log('Inside moreInfo');
                localStorage.setItem('id',hero.id);
                showHeroInfo(hero);
                console.log('hero', event);
            });


            infoCard.appendChild(favBtn);

            infoCard.appendChild(moreInfo);

            // let workDiv = document.createElement('div');
            // workDiv.setAttribute('class','work');
            // workDiv.innerText = `${hero.work.occupation}`;

            // infoCard.appendChild(workDiv);
            // infoCard.addEventListener('click',);

        superherolist.appendChild(infoCard);
           
}


    }

}
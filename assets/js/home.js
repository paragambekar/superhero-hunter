
const search = document.getElementById('search');

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
let superherolist = document.getElementById('superheros-list');
searchBtn.addEventListener('click',function(){

    console.log(searchInput.value);
    getHero();

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

function displayInfo(data){

    let results = data.results;
    if(!results){
        document.getElementById('superhero').innerText = 'No hero found';
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

            let workDiv = document.createElement('div');
            workDiv.setAttribute('class','work');
            workDiv.innerText = `${hero.work.occupation}`;

            infoCard.appendChild(workDiv);
            infoCard.addEventListener('click',(event) =>{
                localStorage.setItem('id',hero.id);
                showHeroInfo(hero);
                console.log('hero', event);
            });

        superherolist.appendChild(infoCard);
           
}


    }

}
console.log('Hi')

function displayFavHeros(){
    // console.log('Local storage not empty');
    if(localStorage.getItem('favHeroes') !== null){
        console.log('Local storage not empty');
        let heroes = JSON.parse(localStorage.getItem('favHeroes'));
        heroes.forEach(hero => {

            let url = `https://www.superheroapi.com/api.php/5233257620086023/${hero}`;
            console.log(url);
            let xhrRequest = new XMLHttpRequest();
            xhrRequest.open('get',url,true);
            xhrRequest.send();
            xhrRequest.onload = function(){
            let data = JSON.parse(xhrRequest.responseText);
            console.log('Data',data);
            displayInfo(data);
            }
            }
        );
    }

}

function displayInfo(hero){

    let display = document.getElementById('fav-list');

    let heroDiv = document.createElement('div');

    let sideDiv = document.createElement('div');
    sideDiv.setAttribute('class','sideDiv');

    let imageDiv = document.createElement('div');
    // heroDiv.setAttribute('class','heroCard');
    
    let image = document.createElement('img');
    image.setAttribute('src',`${hero.image.url}`);
    imageDiv.appendChild(image);

    let nameDiv = document.createElement('div');
    nameDiv.setAttribute('class','name');
    nameDiv.innerHTML = `<span>Name </span>: ${hero.name}`
    
    let remFav = document.createElement('div');
    remFav.innerHTML = `<i class="fas fa-trash"></i>`;
    remFav.addEventListener('click',()=>{

        removeFromFav(hero.id,heroDiv);
    });

    sideDiv.appendChild(nameDiv);
    // sideDiv.appendChild(remFav);

    heroDiv.appendChild(imageDiv);
    heroDiv.appendChild(nameDiv);
    heroDiv.appendChild(remFav)
    heroDiv.appendChild(sideDiv);

    heroDiv.classList.add('heroCard');
    display.appendChild(heroDiv);


    console.log('hero.id',hero.id);
}

function removeFromFav(heroId,heroDiv){
    console.log('Hero id in remove from fav',heroId);
    console.log('Hero div',heroDiv);
    heroDiv.style.display = 'none';

    if(localStorage.getItem('favHeroes')!== null){

        let heroes = JSON.parse(localStorage.getItem('favHeroes'));
        console.log('HerosList',heroes);
        const index = heroes.indexOf(heroId);
        console.log('Index of hero', index);
        if(heroes.includes(heroId)){
            console.log('Includes id');
            heroes.splice(index,1);
            localStorage.setItem('favHeroes',JSON.stringify(heroes));
            // localStorage.removeItem(`favHeroes`)
        }


    }else{
        let display = document.getElementById('fav-list');
        display.innerHTML = `Add Favorite Heroes!`
    }



}

displayFavHeros();
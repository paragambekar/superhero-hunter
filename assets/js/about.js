var heroID = localStorage.getItem('id');

console.log(heroID);

function getHeroInfo(){

    let url = `https://www.superheroapi.com/api.php/5233257620086023/${heroID}`;
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

function displayInfo(hero){

    let infoPage = document.getElementById('info-page');
    console.log('Hero------->',hero)
    let imageDiv = document.getElementById('image');

    let image = document.createElement('img');
    image.setAttribute('src',`${hero.image.url}`);
    imageDiv.appendChild(image);
    

    let heroName = document.createElement('div');
    heroName.innerText = `${hero.name}`



    let appearanceDiv = document.createElement('div');
    let gender = document.createElement('p');
    gender.innerText = `Gender : ${hero.appearance.gender}`;

    let race = document.createElement('p');
    race.innerText = `Race : ${hero.appearance.race}`

    let height = document.createElement('p');
    height.innerText = `Height : ${hero.appearance.height}`;
    
    let weight =  document.createElement('p');
    weight.innerHTML = `<b>Weight</b> : ${hero.appearance.weight}`;


    appearanceDiv.appendChild(gender);
    appearanceDiv.appendChild(race);
    appearanceDiv.appendChild(height);
    appearanceDiv.appendChild(weight);


    // Biograpghy



   

    let powerDiv = document.createElement('div');

    let intell = document.createElement('p');
    intell.innerHTML = `Intelligence : ${hero.powerstats.intelligence}`

    let strength = document.createElement('p');
    strength.innerHTML = `Strength : ${hero.powerstats.strength}`;

    let speed = document.createElement('p');
    speed.innerHTML = `Speed : ${hero.powerstats.speed}`;

    let durability = document.createElement('p');
    durability.innerHTML = `Durability : ${hero.powerstats.durability}`;

    let power = document.createElement('p');
    power.innerHTML = `Power : ${hero.powerstats.power}`;

    powerDiv.appendChild(intell);
    powerDiv.appendChild(strength);
    powerDiv.appendChild(speed);
    powerDiv.appendChild(durability);
    powerDiv.appendChild(power);





    
    // imageDiv.appendChild(heroName);
    // imageDiv.appendChild(appearanceDiv);
    
    infoPage.appendChild(imageDiv);
    infoPage.appendChild(heroName);
    infoPage.appendChild(appearanceDiv);
    infoPage.appendChild(powerDiv);

}


getHeroInfo();
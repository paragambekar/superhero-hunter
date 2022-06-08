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
    heroName.innerHTML = `<h2>${hero.name}</h2>`



    let appearanceDiv = document.getElementById('appearance');
    let gender = document.createElement('p');
    gender.innerText = `Gender : ${hero.appearance.gender}`;

    let race = document.createElement('p');
    race.innerText = `Race : ${hero.appearance.race}`

    let height = document.createElement('p');
    height.innerText = `Height : ${hero.appearance.height}`;
    
    let weight =  document.createElement('p');
    weight.innerHTML = `<b>Weight</b> : ${hero.appearance.weight}`;

    let eyeColor = document.createElement('p');
    eyeColor.innerHTML = `Eye Color : ${hero.appearance['eye-color']}`;


    appearanceDiv.appendChild(gender);
    appearanceDiv.appendChild(race);
    appearanceDiv.appendChild(height);
    appearanceDiv.appendChild(weight);
    appearanceDiv.appendChild(eyeColor);


    // Biograpghy

    let bioDiv = document.getElementById('bio');
    let fullName = document.createElement('p');
    fullName.innerHTML = `Full Name : ${hero.biography['full-name']}`;

    let allignment = document.createElement('p');
    allignment.innerHTML = `Alignment : ${hero.biography.alignment}`;

    let firstApperance = document.createElement('p');
    firstApperance.innerHTML = `First Appearance : ${hero.biography['first-appearance']}`;


    let placeOfBirth = document.createElement('p');
    placeOfBirth.innerHTML = `Place of Birth : ${hero.biography['place-of-birth']}`;

    let publisher = document.createElement('p');
    publisher.innerHTML = `Publisher : ${hero.biography.publisher}`;

    bioDiv.appendChild(fullName);
    bioDiv.appendChild(allignment);
    bioDiv.appendChild(firstApperance);
    bioDiv.appendChild(placeOfBirth);
    bioDiv.appendChild(publisher);


   

    let powerDiv = document.getElementById('power-stats');

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


    let workDiv = document.getElementById('work');

    let occupation = document.createElement('p');
    occupation.innerHTML = `Occupation: ${hero.work.occupation}`;

    let base = document.createElement('p');
    base.innerHTML = `Base : ${hero.work.base}`;

    workDiv.appendChild(occupation);
    workDiv.appendChild(base);




    
    // imageDiv.appendChild(heroName);
    // imageDiv.appendChild(appearanceDiv);
    
    infoPage.appendChild(imageDiv);
    infoPage.appendChild(heroName);
    infoPage.appendChild(bioDiv);
    infoPage.appendChild(appearanceDiv);
    infoPage.appendChild(powerDiv);
    infoPage.appendChild(workDiv);

}


getHeroInfo();
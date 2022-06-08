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
    // let infoPage = document.createElement('div');
    // infoPage.setAttribute('id','info-page')
    console.log('Hero------->',hero);

    let imageDiv = document.createElement('div');
    imageDiv.setAttribute('id','image');
    // let imageDiv = document.getElementById('image');

    let image = document.createElement('img');
    image.setAttribute('src',`${hero.image.url}`);
    imageDiv.appendChild(image);
    

    let heroName = document.createElement('div');
    heroName.innerHTML = `<h2>${hero.name}</h2>`



    // let appearanceDiv = document.getElementById('appearance');
    let appearanceDiv = document.createElement('div');
    appearanceDiv.setAttribute('id','appearance')
    appearanceDiv.innerHTML = `<h3>Appereance</h3>`;
    let gender = document.createElement('p');
    gender.innerHTML = `<span>Gender :</span> ${hero.appearance.gender}`;

    let race = document.createElement('p');
    race.innerHTML = `<span>Race :</span> ${hero.appearance.race}`

    let height = document.createElement('p');
    height.innerHTML = `<span>Height :</span> ${hero.appearance.height}`;
    
    let weight =  document.createElement('p');
    weight.innerHTML = `<span>Occupation :</span> : ${hero.appearance.weight}`;

    let eyeColor = document.createElement('p');
    eyeColor.innerHTML = `<span>Eye Color :</span> ${hero.appearance['eye-color']}`;


    appearanceDiv.appendChild(gender);
    appearanceDiv.appendChild(race);
    appearanceDiv.appendChild(height);
    appearanceDiv.appendChild(weight);
    appearanceDiv.appendChild(eyeColor);


    // Biograpghy

    // let bioDiv = document.getElementById('bio');
    let bioDiv = document.createElement('div');
    bioDiv.setAttribute('id','bio');
    bioDiv.innerHTML = `<h3>Biography</h3>`
    let fullName = document.createElement('p');
    fullName.innerHTML = `<span>Full Name:</span> ${hero.biography['full-name']}`;

    let allignment = document.createElement('p');
    allignment.innerHTML = `<span>Alignment:</span>${hero.biography.alignment}`;

    let firstApperance = document.createElement('p');
    firstApperance.innerHTML = `<span>First Appearance:</span> : ${hero.biography['first-appearance']}`;


    let placeOfBirth = document.createElement('p');
    placeOfBirth.innerHTML = `<span>Place of Birth :</span> ${hero.biography['place-of-birth']}`;

    let publisher = document.createElement('p');
    publisher.innerHTML = `<span>Publisher:</span> ${hero.biography.publisher}`;

    bioDiv.appendChild(fullName);
    bioDiv.appendChild(allignment);
    bioDiv.appendChild(firstApperance);
    bioDiv.appendChild(placeOfBirth);
    bioDiv.appendChild(publisher);


   

    // let powerDiv = document.getElementById('power-stats');
    let powerDiv = document.createElement('div');
    powerDiv.setAttribute('id','power-stats');
    powerDiv.innerHTML = `<h3>Power Stats</h3>`;

    let intell = document.createElement('p');
    intell.innerHTML = `<span>Intelligence :</span> ${hero.powerstats.intelligence}`

    let strength = document.createElement('p');
    strength.innerHTML = `<span>Strength :</span> ${hero.powerstats.strength}`;

    let speed = document.createElement('p');
    speed.innerHTML = `<span>Speed :</span> ${hero.powerstats.speed}`;

    let durability = document.createElement('p');
    durability.innerHTML = `<span>Durability :</span> ${hero.powerstats.durability}`;

    let power = document.createElement('p');
    power.innerHTML = `<span>Power :</span> ${hero.powerstats.power}`;

    powerDiv.appendChild(intell);
    powerDiv.appendChild(strength);
    powerDiv.appendChild(speed);
    powerDiv.appendChild(durability);
    powerDiv.appendChild(power);


    // let workDiv = document.getElementById('work');
    let workDiv = document.createElement('div');
    workDiv.setAttribute('id','work');
    workDiv.innerHTML = `<h3>Work</h3>`;

    let occupation = document.createElement('p');
    occupation.innerHTML = `<span>Occupation:</span> ${hero.work.occupation}`;

    let base = document.createElement('p');
    base.innerHTML = `<span>Base:</span> ${hero.work.base}`;

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
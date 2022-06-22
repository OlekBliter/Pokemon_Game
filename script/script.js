let mainPage = document.querySelector('.main-page')
let choosePage = document.querySelector('.choose-page')
let gamePage = document.querySelector('.game-page')

let achievements = [
    {
        img: 'img/achievements/Common.png',
        description: 'Catch a common pokemon'
    },
    {
        img: 'img/achievements/Rare.png',
        description: 'Catch a rare pokemon'
    },
    {
        img: 'img/achievements/Legendary.png',
        description: 'Catch a legendary pokemon'
    },
    {
        img: 'img/achievements/Special.png',
        description: 'Catch a special pokemon'
    }
]

let shopItems = [
    {
        img: "img/items/RareSummoner.png",
        name: "Rare pokemon summoner",
        price: 5,
        is: false
    },
    {
        img: "img/items/LegendarySummoner.png",
        name: "Legendary pokemon summoner",
        price: 20,
        is: false
    },
    {
        img: "img/items/SpecialSummoner.png",
        name: "Special pokemon summoner",
        price: 50,
        is: false
    }
]

let pokemonStorage = [
    {
        name: 'Ratata',
        img: 'img/pokemon/ratata.webp',
        is: false,
        rarity: 'common'
    },
    {
        name: 'Caterpie',
        img: 'img/pokemon/caterpie.webp',
        is: false,
        rarity: 'common'
    },
    {
        name: 'Pidgey',
        img: 'img/pokemon/pidgey.webp',
        is: false,
        rarity: 'common'
    },
    {
        name: 'Charmander',
        img: 'img/pokemon/charmander.webp',
        is: false,
        rarity: 'rare'
    },
    {
        name: 'Bulbazaur',
        img: 'img/pokemon/bulbazaur.webp',
        is: false,
        rarity: 'rare'
    },
    {
        name: 'Squirtle',
        img: 'img/pokemon/squirtle.webp',
        is: false,
        rarity: 'rare'
    },
    {
        name: 'Moltres',
        img: 'img/pokemon/moltres.webp',
        is: false,
        rarity: 'legendary'
    },
    {
        name: 'Zapdos',
        img: 'img/pokemon/zapdos.webp',
        is: false,
        rarity: 'legendary'
    },
    {
        name: 'Articuno',
        img: 'img/pokemon/articuno.webp',
        is: false,
        rarity: 'legendary'
    },
    {
        name: 'Mewtwo',
        img: 'img/pokemon/mewtwo.webp',
        is: false,
        rarity: 'special'
    },
    {
        name: 'Pikachu',
        img: 'img/pokemon/pikachu.webp',
        is: false,
        rarity: 'special'
    }
] 

let itemsStorage = []

let targetPokemon = [
    {
        name: 'Ratata',
        img: 'img/targetPokemon/targetRatata.png',
        is: false,
        rarity: 'common'
    },
    {
        name: 'Caterpie',
        img: 'img/targetPokemon/targetCaterpie.png',
        is: false,
        rarity: 'common'
    },
    {
        name: 'Pidgey',
        img: 'img/targetPokemon/targetPidgey.png',
        is: false,
        rarity: 'common'
    },
    {
        name: 'Charmander',
        img: 'img/targetPokemon/targetCharmander.png',
        is: false,
        rarity: 'rare'
    },
    {
        name: 'Bulbazaur',
        img: 'img/targetPokemon/targetBulbazaur.png',
        is: false,
        rarity: 'rare'
    },
    {
        name: 'Squirtle',
        img: 'img/targetPokemon/targetSquirtle.png',
        is: false,
        rarity: 'rare'
    },
    {
        name: 'Moltres',
        img: 'img/targetPokemon/targetMoltres.png',
        is: false,
        rarity: 'legendary'
    },
    {
        name: 'Zapdos',
        img: 'img/targetPokemon/targetZapdos.png',
        is: false,
        rarity: 'legendary'
    },
    {
        name: 'Articuno',
        img: 'img/targetPokemon/targetArticuno.png',
        is: false,
        rarity: 'legendary'
    },
    {
        name: 'Mewtwo',
        img: 'img/targetPokemon/targetMewtwo.png',
        is: false,
        rarity: 'special'
    },
    {
        name: 'Pikachu',
        img: 'img/targetPokemon/targetPikachu.png',
        is: false,
        rarity: 'special'
    }
]

// main-page

document.querySelector('.start').onclick = function(){
    mainPage.style.display = 'none'
    choosePage.style.display = 'flex'
}

// choose-page

let squirtleBtn = document.getElementById('squirtleBtn')
let charmanderBtn = document.getElementById('charmanderBtn')
let bulbazaurBtn = document.getElementById('bulbazaurBtn')

let charClick = false
let bulbClick = false
let squirtClick = false

charmanderBtn.onclick = function(){
    choosePage.style.display = 'none'
    gamePage.style.display = 'flex'
    pokemonStorage.find(pokemon => pokemon.name == 'Charmander').is = true
    document.querySelectorAll('.pokemon')[pokemonStorage.indexOf(pokemonStorage.find(pokemon => pokemon.name == 'Charmander'))].style.display = 'flex'
}
squirtleBtn.onclick = function(){
    choosePage.style.display = 'none'
    gamePage.style.display = 'flex'
    pokemonStorage.find(pokemon => pokemon.name == 'Squirtle').is = true
    document.querySelectorAll('.pokemon')[pokemonStorage.indexOf(pokemonStorage.find(pokemon => pokemon.name == 'Squirtle'))].style.display = 'flex'
}
bulbazaurBtn.onclick = function(){
    choosePage.style.display = 'none'
    gamePage.style.display = 'flex'
    pokemonStorage.find(pokemon => pokemon.name == 'Bulbazaur').is = true
    document.querySelectorAll('.pokemon')[pokemonStorage.indexOf(pokemonStorage.find(pokemon => pokemon.name == 'Bulbazaur'))].style.display = 'flex'
}
charmanderBox.onclick = function(){
    charClick = true
    checkClickTrue()
}
bulbazaurBox.onclick = function(){
    bulbClick = true
    checkClickTrue()
}
squirtleBox.onclick = function(){
    squirtClick = true
    checkClickTrue()
}

function checkClickTrue(){
    if(charClick==true && bulbClick == true && squirtClick == true){
        document.querySelectorAll('.choosePokemonBox').forEach(box => {
            box.style.display = 'none'
        });
        document.querySelector('.pikachu-box').style.display = 'flex'
    }
}
checkPikachuInput.onclick = function(){
    if(pikachuInput.value.toString().toLowerCase() == 'pikachu'){
        choosePage.style.display = 'none'
        gamePage.style.display = 'flex'
        pokemonStorage.find(pokemon => pokemon.name == 'Pikachu').is = true
            document.querySelectorAll('.pokemon')[pokemonStorage.indexOf(pokemonStorage.find(pokemon => pokemon.name == 'Pikachu'))].style.display = 'flex'
    }else{
        document.querySelectorAll('.choosePokemonBox').forEach(box => {
            box.style.display = 'flex'
        });
        document.querySelector('.pikachu-box').style.display = 'none'
        charClick = false
        bulbClick = false
        squirtClick = false
        pikachuInput.value = ''
    }
}
// game-page

let coins = 0 

// fill achievements window

for(i=0; i<achievements.length; i++){
    Array.from(document.querySelectorAll('#achrp'))[i].textContent = achievements[i].description
    Array.from(document.querySelectorAll('#achimg'))[i].src = achievements[i].img
}

// fill shop window

for(i=0; i<shopItems.length; i++){
    Array.from(document.querySelectorAll('#shopImg'))[i].src = shopItems[i].img
    Array.from(document.querySelectorAll('#shopMd'))[i].textContent = shopItems[i].name
    Array.from(document.querySelectorAll('#shopP'))[i].textContent = shopItems[i].price + ' coins'
}

// fill pokemon storage window

for(i=0; i<pokemonStorage.length; i++){
    Array.from(document.querySelectorAll('#pokeName'))[i].textContent = pokemonStorage[i].name
    Array.from(document.querySelectorAll('#pokeImg'))[i].src = pokemonStorage[i].img
    Array.from(document.querySelectorAll('#pokeRarity'))[i].textContent = pokemonStorage[i].rarity
    if(pokemonStorage[i].rarity == 'common'){
        Array.from(document.querySelectorAll('#pokeRarity'))[i].style.color = 'gray'
    }else if(pokemonStorage[i].rarity == 'rare'){
        Array.from(document.querySelectorAll('#pokeRarity'))[i].style.color = 'blue'
    }else if(pokemonStorage[i].rarity == 'legendary'){
        Array.from(document.querySelectorAll('#pokeRarity'))[i].style.color = 'rgb(196, 196, 0)'
    }else if(pokemonStorage[i].rarity == 'special'){
        Array.from(document.querySelectorAll('#pokeRarity'))[i].style.color = 'purple'
    }
}

let achievementsBtn = document.getElementById('achievementsBtn')
let shopBtn = document.getElementById('shopBtn')
let pokemonSpawnBtn = document.getElementById('pokemonSpawnBtn')
let pokemonStorageBtn = document.getElementById('pokemonStorageBtn')
let itemsStorageBtn = document.getElementById('itemsStorageBtn')
let returnBtns = document.querySelectorAll('#return')

achievementsBtn.onclick = function(){
    document.querySelectorAll('.window').forEach(element => {
        element.style.display = 'none'
    })
    document.querySelector('.navWindows').style.display = 'block'
    document.querySelector('.achievementsWindow').style.display = 'flex'
}
shopBtn.onclick = function(){
    document.querySelectorAll('.window').forEach(element => {
        element.style.display = 'none'
    })
    document.querySelector('.navWindows').style.display = 'block'
    document.querySelector('.shopWindow').style.display = 'flex'
}
pokemonStorageBtn.onclick = function(){
    document.querySelectorAll('.window').forEach(element => {
        element.style.display = 'none'
    })
    document.querySelector('.navWindows').style.display = 'block'
    document.querySelector('.pokemon_storageWindow').style.display = 'flex'
}
itemsStorageBtn.onclick = function(){
    document.querySelectorAll('.window').forEach(element => {
        element.style.display = 'none'
    })
    document.querySelector('.navWindows').style.display = 'block'
    document.querySelector('.itemsWindow').style.display = 'flex'
}
returnBtns.forEach(retbtn => {
    retbtn.onclick = function(){
        document.querySelector('.navWindows').style.display = 'none'
        document.querySelectorAll('.window').forEach(element => {
            element.style.display = 'none'
        })
    }
});

// gameplay

let topPos = 50
let leftPos = 50

let randTarget = Math.floor(Math.random()*targetPokemon.length)

pokemonSpawnBtn.onclick = function(){
    document.querySelector('.navWindows').style.display = 'none'
    document.querySelectorAll('.window').forEach(element => {
        element.style.display = 'none'
    })
    leftPos = 50
    topPos = 50
    document.getElementById('targetPokemon').style.display = 'block'
    document.getElementById('targetPokemon').style.backgroundImage = 'url(' + targetPokemon[randTarget].img + ')'
}

document.getElementById('targetPokemon').onmouseenter = function(){
    topPos = Math.floor(Math.random()*80)
    leftPos = Math.floor(Math.random()*95)
    document.getElementById('targetPokemon').style.top = topPos + '%'
    document.getElementById('targetPokemon').style.left = leftPos + '%'
}

document.getElementById('targetPokemon').onclick = function(){
    document.getElementById('targetPokemon').style.display = 'none'
    pokemonStorage[randTarget].is = true
    Array.from(document.querySelectorAll('.pokemon'))[randTarget].style.display = 'flex'
    
    randTarget = Math.floor(Math.random()*targetPokemon.length)
}

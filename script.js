const url = 'https://api.tronalddump.io/random/quote'

const getTextElement = document.getElementById('main')

const button = document.getElementById('trumpButton')
button.addEventListener('click',() => {
    generateQuote()       
})

function generateQuote() {
    getTextElement.innerHTML='Loading...'
    fetch(url)
        .then((response) => response.json())
        .then((data) => getTextElement.innerHTML=data.value)
}
    

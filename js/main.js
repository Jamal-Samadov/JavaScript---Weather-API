

const  url = 'https://api.openweathermap.org/data/2.5/'
const  key = '9369b4689e94de041c2ef221c29ccede'
const search = document.getElementById('search')

const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(search.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) =>{
    console.log(result);
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}'C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax= document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}'c / ${Math.round(result.main.temp_max)}'c `
}

search.addEventListener('keypress',setQuery)























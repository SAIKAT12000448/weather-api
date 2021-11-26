const loadWeather = ()=>{
    const weatherInput = document.getElementById('weather-input')
    const weatherValue = weatherInput.value;
    // console.log(weatherValue)
    const url =`
    https://api.openweathermap.org/data/2.5/weather?q=${weatherValue}&units=metric&appid=cf05df20a4a2c0ca9a0dbd526c20ee07
    `

     fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
    document.getElementById('weather-input').value='';
   
}
const setValue = (id,cityValue)=>{
    document.getElementById(id).innerText = cityValue;
}

const displayData = city =>{
    console.log(city);
    setValue('degree',city.main.temp)
    setValue('text',city.name)
    setValue('weather',city.weather[0].main)
    
    // set icon
    const url =`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`
    
    const imgIcon = document.getElementById('img-icon');
    imgIcon.setAttribute('src',url)

   

}



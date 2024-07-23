// https://api.openweathermap.org/data/2.5/weather?lat={Cat}&lon={lon}&appid={API key}
// function apiContent() {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=a9b8469ec46dbad0f51f92cd79698970`).then(data=>data.json())
// .then(res=>console.log(res))}
// apiContent()

// console.log(value);
// let but=document.getElementById('but')

// function onclick() {
//   let value= document.getElementById('city-input').value
//     console.log(value);
// }
let API_KEY  = "a9b8469ec46dbad0f51f92cd79698970";
getWeatherDate = (city)=>{
  const URL= 'https://api.openweathermap.org/data/2.5/weather'
  const Full_Url = '${URL}?q==${city}&appid=${API_key}&units =imperial';
  const weatherPromise = fetch(Full_Url);
  return weatherPromise.then(()=>{
    return response.json()})
  }


  function searchCity(){
    const city= document.getElementById("city-input").ariaValueMax;
    getWeatherData(city)
    .then((response) => {
      console.log(response)

    })
    .catch((err) =>{
      console.log(err)
    })
  }

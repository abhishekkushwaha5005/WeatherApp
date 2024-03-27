let work = (url) => {
   loading = document.querySelector(".loading")
   city1 = document.querySelector(".cityname")
   weatherIcon = document.querySelector(".weathericon")
   condition = document.querySelector(".condition")
   temp = document.querySelector(".temp")
   humidity = document.querySelector(".humidity")
   speed = document.querySelector(".speed")
   mainDiv = document.querySelector(".maindiv")
   fetch(url)
      .then((response) => {
         return response.json()
      }).then((data) => {
         let lat = data[0]["lat"]
         let lot = data[0]["lon"]
         url1 = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lot + "&appid=" + key
         fetch(url1)
            .then((response) => {
               return response.json()
            }).then((data) => {
               loading.style.display = "none";
               mainDiv.style.display = "block"
               weatherIcon.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
               city1.innerText = city.charAt(0).toUpperCase() + city.slice(1)
               condition.innerText = data["weather"][0].main
               temp.innerText = Math.round((data["main"].temp - 273.15) * 100) / 100
               speed.innerText = Math.round((data["wind"].speed * 3.6) * 100) / 100
               humidity.innerText = data["main"].humidity
            }).catch(() => {
               console.log("Some problem")
            })
      }).catch(() => {
         console.error("Error Occured")
      })
}




city = "Delhi"
key = "ebeda67faa3eb6c6b75f6f57622216d4"

url = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + key
work(url)

btn = document.querySelector(".icondiv")
btn.addEventListener("click", () => {
   inputcity = document.querySelector("#input")
   if (inputcity.value != "") {
      city = inputcity.value
      url = url = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + key
      work(url)
   } else {
      alert("Please Enter city name")
   }
})
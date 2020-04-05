const axios=require('axios');


const getClima=async(lat,lng)=>{
  
  let resp=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=cb6a4f1af218c5fd33664c61a82b3b89`)
 
  return resp.data.main.temp
}


module.exports={
   getClima
}


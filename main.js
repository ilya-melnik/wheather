
// let select = document.querySelector('.select')
// for(let option of select){
// 	option.onclick = t2 = () => {
// 		console.log(option.value)
// 	}
// }

const findFunc = (codeCity) => {
	//703845
	fetch(`http://api.openweathermap.org/data/2.5/weather?id=${codeCity}&appid=0db48c216c96f30bd3f970f8364644fe`)
	.then(response=>response.json())
	.then(data=> {  
		console.log(data);
		
		document.querySelector('h3').innerHTML = data.name
		document.querySelector('.img_whether').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
		document.querySelector('.degrees').innerHTML = Math.floor(data.main.temp -273)
	})
	.catch( err=> {
		console.error(err)
	});	
}
//first start

findFunc(703845)
document.querySelector('.select').addEventListener('change', function(e) {
	findFunc(e.currentTarget.value);

  })


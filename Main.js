let randomInt = 0;
let listOfQuotes = [];
let quotes = [
	["Вами управляет тот, кто вас злит."],
	["Путь в тысячу ли начинается с первого шага."],
	["Когда народ много знает, им трудно управлять."],
	["Если кто-то причинил тебе зло, не мсти. Сядь на берегу реки, и вскоре ты увидишь, как мимо тебя проплывает труп твоего врага."],
	["Тот, кто знает — не говорит. Тот, кто говорит — не знает."],
	["Из-за большой любви человек мужественен."],
	["Если невыгодно, не двигайся."],
	["Когда нет врагов, то не бывает войны. "],
	["Истинно мудрый никогда не воюет. "],
	["Достойный муж может надеть на себя худую одежду, но в себе имеет драгоценный камень."],
	["Кто, зная границы своей деятельности, не приблизится к опасностям, тот будет жить долго."],
	["Будьте внимательны к своим мыслям, - они начало поступков."],
	["Лишь тот, кто имеет силу, может давать ее другим."],
	["Кто много обещает, тот не заслуживает доверия."],
	["Кто, имея знания, делает вид, что не знает, тот выше всех. Кто, не имея знаний, делает вид, что знает, тот болен."]
];

alert("не нажимайта на like без ненадобности, это к ничему хорошему не приведёт! ")

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function add() {
	let conteiner = document.querySelector(".conteiner");
	let span = document.getElementById("quote");
	randomInt = getRandomIntInclusive(0, 14);
	//console.log(randomInt);
	//console.log(conteiner);
	if (randomInt == "undefined") {
		alert("упсс");
	}
	span.innerHTML = quotes[randomInt];
}

function addQuote() {
	let spanAdd = document.getElementById("quote");

	for (let i = 0; i < quotes.length; ++i) {
		if (spanAdd.innerHTML == listOfQuotes[i]) {
			alert("quote already saved");
			return
		}
	} 
	console.log(spanAdd.innerHTML);
	listOfQuotes.push(spanAdd.innerHTML);
	console.log(listOfQuotes);
}	// придумать что будет делаться если нажать на дизлайк

function dislikeAdd() {
	let quoneDiv = document.querySelector(".quote");
	let spanFind = document.getElementById("quote");
	result = confirm("Эта цитата удалится навсегда. Вы уверены в своём выборе?");
	if (result == true) {
		console.log(quoneDiv.innerHTML);
		quoneDiv.removeChild(spanFind.innerHTML);

	} else {
		return
	}
}

function showList() {
	alert(listOfQuotes);
}
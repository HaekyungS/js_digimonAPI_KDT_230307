const XML = new XMLHttpRequest();
const DigimonAPI = 'https://digimon-api.vercel.app/api/digimon';

XML.open('GET', DigimonAPI);
//API 에서 데이터를 갖고온다.
XML.send();
//데이터를 보낸다.

XML.addEventListener('load', function () {
  const Digimon = JSON.parse(XML.response);
  // console.log(Digimon)
  
  const DigimonData = {};
  for (i = 0; i < Object.keys(Digimon).length; i++) {
    DigimonData[Digimon[i].name] = Digimon[i].img;
    // console.log(Digimon[i].img);
  }
  console.log(DigimonData);
  let DigimonName = [];

  for (let name in DigimonData) {
    DigimonName.push(name);
  }
  console.log(DigimonName);

  let number = [Math.floor(Math.random() * DigimonName.length)];

  CreateDoc("div", Div);
  Div.children[0].style.cssText = "width:50%; height:70%;"
  Display(Div.children[0]);

  CreateDoc("img", Div.children[0], "src", DigimonData[DigimonName[number]]);
  Div.children[0].children[0].style.cssText = "width:80%; height:70%"

  CreateDoc("p", Div.children[0]);
  Div.children[0].children[1].style.cssText = "width:50%; text-align:center; font-size:25px; font-weight:500"
  Div.children[0].children[1].textContent = DigimonName[number];

  CreateDoc("div", Div);
  console.dir(Div.style)
  Div.children[1].style.cssText = "width:30%; height:30%; background:url(./digivice.jpg); background-size:cover"

  Div.children[1].addEventListener("click", function () {
    alert("디지몬 진화!");
    window.location.reload();
  })


})
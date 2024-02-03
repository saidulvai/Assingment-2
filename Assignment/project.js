const loadAllData = () => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
   .then((res) => res.json())
   .then((info) => displayData(info.data));

   const sortD = document.getElementById("sorted");
   sortD.addEventListener("click", function (e){
    sortByView(1000)
   });
};
const sortByView = (e) => {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${e}`)
    .then((res) => res.json())
    .then((info) => {
        // console.log(info.data)
        const outdata = info.data;
        console.log(outdata);
        const listSorted = outdata.sort(function(a, b)
        {
            return parseInt(b.others.views) -  parseInt(a.others.views);
        })
        // console.log(listSorted);
        displayData(listSorted);
    })
    

}
const loadMusicData = () => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1001")
   .then((res) => res.json())
   .then((info) => displayData(info.data));

   const sortD = document.getElementById("sorted");
   sortD.addEventListener("click", function (e){
    sortByView(1001)
   });
};
const loadComedyData = () => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1003")
   .then((res) => res.json())
   .then((info) => displayData(info.data));

   const sortD = document.getElementById("sorted");
   sortD.addEventListener("click", function (e){
    sortByView(1003)
   });
};
const loadDrawingData  = () => {
    fetch("https://openapi.programming-hero.com/api/videos/category/1005")
   .then((res) => res.json())
   .then((info) => displayData(info.data));

   const sortD = document.getElementById("sorted");
   sortD.addEventListener("click", function (e){
    sortByView(1005)
   });
};

var header = document.getElementById("mybtn");
var btns = header.getElementsByClassName("btnss");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

const displayData = (info) => {
    if(info.length == 0)
    {
        const mealsContainer = document.getElementById("noData-container");
        const mealsContainer1 = document.getElementById("data-container");
        mealsContainer1.innerHTML = "";
        const card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML = `
        <img class="nodata" src="./imagee/Icon.png" alt="">
        <h1 class="">Sorry, There is no content</h1>
        
        `;
        mealsContainer.appendChild(card);
        
    }
    else{
        const mealsContainer = document.getElementById("data-container");
        const mealsContainer1 = document.getElementById("noData-container");
        mealsContainer.innerHTML = "";
        mealsContainer1.innerHTML ="";
    info.forEach((infor) => {
        const card = document.createElement("div");
        card.classList.add("box");
        let x = "";
        let y = "";
        let z = "";
        let w = true
        for (let i in infor.authors) {
            x +=  infor.authors[i].profile_name;
            y +=  infor.authors[i].profile_picture;
            z +=  infor.authors[i].verified;
        }

          
		given_seconds = infor.others.posted_date;

		dateObj = new Date(given_seconds * 1000);
		hours = dateObj.getUTCHours();
		minutes = dateObj.getUTCMinutes();
		seconds = dateObj.getSeconds();

		timeString = hours.toString().padStart(2, '0')
			+ ':' + minutes.toString().padStart(2, '0')
			+ ':' + seconds.toString().padStart(2, '0');

		
		

        card.innerHTML = `
        <img class="box-img" src="${infor.thumbnail}" alt="" />
    <h6 class="time">${timeString}</h6>
    <h4 class="title">${infor?.title}</h4>
    <img class="profile_picture" src="${y}" alt="" />
    <h6 class="name">${x} ${infor.authors[0].verified ? '<span><img class="bage" src="./imagee/6928921.png" alt=""></span>' : ''}
    </h6>
    <h9>${infor.others.views} views</h9>

        `;
        mealsContainer.appendChild(card);
    });
    }
    
};

loadAllData();



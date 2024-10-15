let ota = document.getElementById(`ota`)
fetch(`https://fakestoreapi.com/products?limit=10`)
.then((response) => response.json())
.then((data)=> getdata(data));




function getdata(params) {
    console.log(params);


    params.map((item) =>{
        let div = document.createElement(`div`)
        let rasmi = document.createElement(`img`)
        let nomi = document.createElement(`h3`)
        let narxi= document.createElement(`p`)
        let disp = document.createElement(`p`)
        let disp2 = document.createElement(`p`)
        rasmi.src = item.image
        nomi.innerHTML =  item.title;
        narxi.innerHTML = ` <b>narxi:</b> ` + item.price + `$`
        disp.innerHTML = item.description
        disp2.innerHTML = item.category
        




        div.appendChild(rasmi)
        div.appendChild(nomi)
        div.appendChild(narxi)
        div.appendChild(disp)
        div.appendChild(disp2)
        div.classList.add(`card`)
        ota.appendChild(div)
    })
 }
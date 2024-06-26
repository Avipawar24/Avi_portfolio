let main= document.getElementById('container');

let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`
async function getData(){

    let res = await fetch(url)
    let data= await res.json();
    data = data.data
    console.log(data)
    displayData(data)
}
getData();

// {country: 'France', id: 1, Rank: 22, population: 64938716}

function displayData(arr){

    arr.forEach((ele)=>{

        let card = document.createElement('div');

        let country = document.createElement('h1')
        country.innerText= `Country: ${ele.country}`;
        let id = document.createElement('h2')
        id.innerText= `ID : ${ele.id}`;
        let Rank = document.createElement('h3')
        Rank.innerText= `Rank : ${ele.Rank}`;
        let population = document.createElement('h2')
        population.innerText= `Population : ${ele.population}`;

        card.append(country,id,Rank,population);
        main.append(card);
    })
}
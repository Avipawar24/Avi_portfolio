let main = document.querySelector('#container')

async function getData(url){
    try {
        let res = await fetch(`${url}`)
    pagination(res.headers.get('X-Total-count'),6)
    let data = await res.json()
    console.log(data)
    displayData(data);
    } catch (error) {
        console.log(error);
    }
}

getData(`https://jsonplaceholder.typicode.com/users?_page=1&_limit=6`);

function displayData(arr){
    main.innerHTML="";
    arr.forEach((ele)=>{
        let div = document.createElement('div')

        let id = document.createElement('p')
        id.innerText= ele.id;

        let name = document.createElement('h1')
        name.innerText=`Name: ${ele.name}`;

        let username = document.createElement('h2')
        username.innerText= `username: ${ele.username}`;

        let email = document.createElement('h3')
        email.innerText=`Email: ${ele.email}`;

        let address = document.createElement('p');
        address.innerText=`City: ${ele.address.city}`;

        div.append(id,name,username,email,address)
        main.append(div);
    })
}

let paginationDiv=document.querySelector('#pagination')

function pagination(total,limit){
    paginationDiv.innerHTML="";
    let noOfBtn= Math.ceil(total/limit);
    for(let i=1; i<=noOfBtn; i++){
        let btn = document.createElement('button')
        btn.innerText=i;
        btn.addEventListener('click',()=>{
            getData(`https://jsonplaceholder.typicode.com/users?_page=${i}&_limit=6`)
        })
        paginationDiv.append(btn)
    }
}
pagination()

let main = document.querySelector('#container');

async function getData(url,queryparams=""){

    let res = await fetch(`${url}${queryparams}`)
    pagination(res.headers.get('X-Total-count'),8,queryparams)
    let data = await res.json()
    console.log(data);
    displayData(data);
}

getData(`https://jsonplaceholder.typicode.com/todos?_page=1&_limit=8`)

function displayData(arr) {
    main.innerHTML="";
    arr.forEach((ele) => {
      let div = document.createElement("div");

      let userId = document.createElement("h6");
      userId.innerText = ele.userId;

      let id = document.createElement("p");
      id.innerText = `ID : ${ele.id}`;

      let title = document.createElement("h2");
      title.innerText = ele.title;

      let status = document.createElement('h2');
      status.innerText=ele.completed;

      div.append(userId,title,status);
      main.append(div);
    });
  }
  

  let sort = document.querySelector('#sort')
  sort.addEventListener('input',function(){
    sortData();
  })

  function sortData(){
    let sortVal= sort.value
    getData(`https://jsonplaceholder.typicode.com/todos?_page=1&_limit=8`,`&_sort=id&_order=${sortVal}`)
  }

  let filter = document.querySelector('#filter')
  filter.addEventListener('input',function(){
    filterData();
  })

  function filterData(){
    let filterVal= filter.value;
    getData(`https://jsonplaceholder.typicode.com/todos?_page=1&_limit=8`,`&completed_like=${filterVal}`)
  }

  let paginationDiv = document.querySelector("#pagination")

  function pagination(total,limit,queryparams){
    paginationDiv.innerHTML=""
    let noOfBtn= Math.ceil(total/limit);
    for(let i=1;i<=noOfBtn;i++){
        let btn = document.createElement('button')
        btn.innerText=i;
        btn.addEventListener('click',()=>{
            getData(`https://jsonplaceholder.typicode.com/todos?_page=${i}&_limit=8`,queryparams)
        })
        paginationDiv.append(btn)
    }
  }
  pagination()
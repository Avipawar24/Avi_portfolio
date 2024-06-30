let url = `http://localhost:3000/tasks?_page=1&_limit=4`;

let main = document.getElementById('container');

async function getData(url, queryparams="") {
    try {
        let response = await fetch(`${url}${queryparams}`);
        let data = await response.json();
        let totalCount = response.headers.get("X-Total-Count");
        displayData(data);
        pnation(totalCount, 4, queryparams);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

function displayData(arr) {
    main.innerHTML = "";
    arr.forEach((ele) => {
        let card = document.createElement('div');

        let id = document.createElement('p');
        id.innerText = ele.id;

        let title = document.createElement('h2');
        title.innerText = ele.title;

        let desc = document.createElement('h4');
        desc.innerText = ele.description;

        let status = document.createElement('h2');
        status.innerText = ele.status;

        let dueDate = document.createElement('p');
        dueDate.innerText = ele.dueDate;

        let editBtn = document.createElement('button');
        editBtn.innerText = 'Edit Content';

        editBtn.addEventListener("click", function() {
            localStorage.setItem("editItem", ele.id);
            window.location.href = "edit.html";
        });

        let delBtn = document.createElement('button');
        delBtn.innerText = 'Delete';

        delBtn.addEventListener('click', async function() {
            try {
                let response = await fetch(`${url}/${ele.id}`, {
                    method: "DELETE",
                });
                getData();
            } catch (error) {
                console.log('Delete error:', error);
            }
        });

        card.append(id, title, desc, status, dueDate, editBtn, delBtn);
        main.append(card);
    });
}

getData(url);

let filter = document.getElementById('filter');
filter.addEventListener("input", function() {
    filterData();
});

function filterData() {
    let value = filter.value;
    getData(`http://localhost:3000/tasks?status_like=${value}`);
}

let pagination = document.getElementById("pagination");

function pnation(total, limit, queryparams) {
    pagination.innerHTML = "";
    let num = Math.ceil(total / limit);
    for (let i = 1; i <= num; i++) {
        let btn = document.createElement("button");
        btn.innerText = i;
        btn.addEventListener("click", function() {
            getData(`http://localhost:3000/tasks?_page=${i}&_limit=4`,queryparams);
        });
        pagination.append(btn);
    }
}
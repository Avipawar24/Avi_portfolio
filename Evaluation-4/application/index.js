const baseURL = `http://localhost:3000/tasks`;

const main = document.getElementById('container');
const pagination = document.getElementById('pagination');
const filter = document.getElementById('filter');

async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayData(data);

        const totalCount = response.headers.get("X-Total-Count");
        const totalPages = Math.ceil(totalCount / 4);
        setupPagination(totalPages);
    } catch (error) {
        console.log(error);
    }
}

function displayData(data) {
    main.innerHTML = "";
    data.forEach(item => {
        const card = document.createElement('div');

        const id = document.createElement('p');
        id.innerText = `ID: ${item.id}`;

        const title = document.createElement('h2');
        title.innerText = item.title;

        const desc = document.createElement('h4');
        desc.innerText = item.description;

        const status = document.createElement('p');
        status.innerText = `Status: ${item.status}`;

        const dueDate = document.createElement('p');
        dueDate.innerText = `Due Date: ${item.dueDate}`;

        const editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.addEventListener('click', () => {
            localStorage.setItem("editItem", item.id);
            window.location.href = "edit.html";
        });

        const delBtn = document.createElement('button');
        delBtn.innerText = 'Delete';
        delBtn.addEventListener('click', async () => {
            try {
                await fetch(`${baseURL}/${item.id}`, { method: 'DELETE' });
                filterData();
            } catch (error) {
                console.log('Delete error:', error);
            }
        });

        card.append(id, title, desc, status, dueDate, editBtn, delBtn);
        main.append(card);
    });
}

function setupPagination(totalPages) {
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.addEventListener('click', () => {
            const statusFilter = filter.value;
            const queryParams = `?_page=${i}&_limit=4${statusFilter ? `&status_like=${statusFilter}` : ''}`;
            getData(`${baseURL}${queryParams}`);
        });
        pagination.append(btn);
    }
}

filter.addEventListener('input', filterData);

function filterData() {
    const value = filter.value;
    const queryParams = `?_page=1&_limit=4${value ? `&status_like=${value}` : ''}`;
    getData(`${baseURL}${queryParams}`);
}

// Initial data load
getData(`${baseURL}?_page=1&_limit=4`);

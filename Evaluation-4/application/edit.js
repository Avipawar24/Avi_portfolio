let url = `http://localhost:3000/tasks`;

document.querySelector('#edit').addEventListener('click',function(){
    editData()
})

async function editData(){

    let id = localStorage.getItem("editItem")
    let value = document.querySelector('#input').value;

    let obj = {
        title:value
    }
    let response = await fetch(`${url}/${id}`,{
        method:"PATCH",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(obj)
    })
    window.location.href="index.html";
}

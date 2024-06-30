let url = `http://localhost:3000/tasks`;

let form = document.querySelector('form').addEventListener('submit',function(){
    getData()
})

async function getData(){
    event.preventDefault()

    let id = document.getElementById("input1").value
    let title = document.getElementById('input2').value;
    let description = document.getElementById('input3').value;
    let status = document.getElementById('input4').value;
    let dueDate = document.getElementById('input5').value;

    let obj = {
        id,
        title,
        description,
        status,
        dueDate
    }
    let res = await fetch(`${url}`,{
        method: "POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(obj)
    })
    window.location.href="index.html"
}
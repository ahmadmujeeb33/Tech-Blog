

let updateButton = $('.Update');
let deleteButton = $('.Delete');
let tableClass = $('.tableId');

let id = tableClass.attr('id');


updateButton.on('click','.id',async function(){
    const title1 = document.querySelector('.edittitle').value.trim();
    const content1 = document.querySelector('.editcontent').value.trim();
    const response = await fetch(`/api/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title:title1,content:content1}),  
        headers: { 'Content-Type': 'application/json' },
    }); 
    window.location.replace("http://localhost:2081/dashboard");
    
})

deleteButton.on('click','.deletebutton', async()=>{
    const response = await fetch(`/api/deletePosts/${id}`, {
        method: 'DELETE',
    });
    window.location.replace("http://localhost:2081/dashboard");

})
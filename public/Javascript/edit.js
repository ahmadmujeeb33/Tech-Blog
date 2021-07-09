const title = document.querySelector('.edittitle').value.trim();
const content = document.querySelector('.editcontent').value.trim();

let updateButton = $('.Update');


updateButton.on('click','.id',async function(){

    const id = $(this).attr('id');
    console.log("id " + id);
    const response = await fetch(`/api/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title,content}),  
        headers: { 'Content-Type': 'application/json' },
      });
  


})

document
.querySelector('.Delete')
.addEventListener('click', ()=>{

});
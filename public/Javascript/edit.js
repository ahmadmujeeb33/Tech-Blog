

let updateButton = $('.Update');


updateButton.on('click','.id',async function(){
    const title1 = document.querySelector('.edittitle').value.trim();
    const content1 = document.querySelector('.editcontent').value.trim();
    console.log("title1 " + title1);
    const id = $(this).attr('id');
    console.log("id " + id);
    const response = await fetch(`/api/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title:title1,content:content1}),  
        headers: { 'Content-Type': 'application/json' },
      });
  


})

document
.querySelector('.Delete')
.addEventListener('click', ()=>{

});


let updateButton = $('.Update');

async function getDashBoard(){
    console.log("eo;ihlfdkukjducxjohlj0");
    const response1 = await fetch('/dashboard', {
        method: 'GET',  
        headers: { 'Content-Type': 'application/json' },
    });
}


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
  
    getDashBoard();
})

document
.querySelector('.Delete')
.addEventListener('click', ()=>{

});
const submit = document.querySelector('.submit');


submit.addEventListener('click',async()=>{
    let tableClass = $('.tableId');
    let id = tableClass.attr('id');
    let content = document.querySelector('.comment').value;
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({content, post_id:id}),
        headers: { 'Content-Type': 'application/json' },
      });
  
})
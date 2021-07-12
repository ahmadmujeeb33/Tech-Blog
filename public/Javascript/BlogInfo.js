const submit = document.querySelector('.submit');


submit.addEventListener('click',async()=>{
    console.log("in tihdsofukh");
    let tableClass = $('.tableId');
    let id = tableClass.attr('id');
    let content = document.querySelector('.commentText').value;
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({content, post_id:id}),
        headers: { 'Content-Type': 'application/json' },
      });

    window.location.replace(`http://localhost:2081/BlogInfo/${id}`);
  
})
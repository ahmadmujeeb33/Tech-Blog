





document.querySelector('.createButton').addEventListener('click', ()=>{
    console.log("in this here ");

    const title = document.querySelector('.title').value.trim();
    const content = document.querySelector('.content').value.trim();




    const response = fetch('/api/createPost', {
        method: 'POST',
        body: JSON.stringify({title, content}),
        headers: { 'Content-Type': 'application/json' },
    });
});
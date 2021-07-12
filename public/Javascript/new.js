
document.querySelector('.createButton').addEventListener('click', async()=>{
    console.log("in this here ");

    const title = document.querySelector('.title2').value.trim();
    const content = document.querySelector('.content2').value.trim();




    const response = await fetch('/api/createPost', {
        method: 'POST',
        body: JSON.stringify({title, content}),
        headers: { 'Content-Type': 'application/json' },


    });

    console.log("in here")

    document.location.replace('/dashboard');

});
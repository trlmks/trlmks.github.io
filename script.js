const scriptURL = 'https://script.google.com/macros/s/AKfycbz3ai5LwbcW1gl04iKD0WLktkUgFLNlYNmFxgoWkNN713d6uIOioSDfh3R9nhPfo8GewA/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            alert('terima kasih, pesan anda sudah terkirim')
            form.reset();
            console.log('Success!', response)})
        .catch(error => console.error('Error!', error.message))
    })
//============================= 
const toggle=document.querySelector('.menu-toggle input');
const ul = document.querySelector('nav ul');

toggle.addEventListener('click',function(){
    ul.classList.toggle('slide');
})
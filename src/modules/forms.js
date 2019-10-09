'use strict';
const forms = () => {

    const bannerForm = document.getElementById('banner-form'),
        thanks = document.getElementById('thanks'),
        overlay = document.querySelector('.overlay'),
        closeForm = document.querySelector('.close-form');
      
        
    const sendForm = (form) => {
        const errorMessage = "Ошибка",
         loadMessage = "Загрузка...",
         agreeMessage = "Вы должны дать согласие на обработку данных",
         statusMessage = document.createElement('div');
         statusMessage.style.cssText = 'font-size: 1.5rem;';
         statusMessage.classList.add('form-text');

         form.querySelector('button').addEventListener('click', () => {
            if (!form.querySelector('label').checked) { 
                form.appendChild(statusMessage);
                statusMessage.textContent = agreeMessage;
             } 
         })

         form.addEventListener('submit', (event) => {
             event.preventDefault();
             const formData = new FormData(form);
             statusMessage.textContent = loadMessage;

             postData(formData)
             .then((response) => {
                 if (response.status !== 200) {
                     throw new Error('status network not 200');
                 }
                    thanks.style.display = 'block';
                    setTimeout(() =>  thanks.style.display = 'none', 8000);
    
                    thanks.addEventListener('click', () =>  {
                         thanks.style.display = 'none';
                         form.querySelectorAll('input').forEach(element => {
                             element.value = '';
                         });
                     });
                    form.querySelector('input[type=checkbox]').checked = false;
                    statusMessage.textContent = '';
                    form.querySelectorAll('input').forEach(element => {
                        element.value = '';
                    });
                })
                .catch ((error) => {
                    statusMessage.textContent = errorMessage;
                    console.log(error);
                })  
        });

       
       
        const postData = (formData) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Conent-Type': 'application/json'
                },
                body: formData
            });
        };      
    };

    sendForm(bannerForm);
}
forms();
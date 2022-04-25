import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2'


const sendingEmail=(form:any,id:string)=>{
    emailjs.sendForm('service_yta96hj', id, form, process.env.REACT_APP_EMAIL_KEY)
    .then((result) => {
        console.log(result.text);
        Swal.fire({
            title: 'Success',
            text: 'Mail sent successfully',
            icon: 'success',
            confirmButtonText: 'ok',
            // backdrop:true
          })
    }, (error) => {
        console.log(error.text);
        Swal.fire({
            title: 'Error',
            text: 'Mail not sent, check your network connection',
            icon: 'error',
            confirmButtonText: 'ok'
          })
    })

    
    
    ;
}

export default sendingEmail
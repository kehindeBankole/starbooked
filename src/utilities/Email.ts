import emailjs from '@emailjs/browser';



const sendingEmail=(form:any,id:string)=>{
    emailjs.sendForm('service_yta96hj', id, form, 'wKcVoY0oBaK0dDUj5')
    .then((result) => {
        console.log(result.text);
        console.log(form.current);
    }, (error) => {
        console.log(error.text);
    });
}

export default sendingEmail
import styles from "./Booking.module.scss";
import { Input, Button,TextArea } from "../../utilities";
import { useEffect, useRef,useState } from 'react';
import Swal from 'sweetalert2'
import sendingEmail from "../../utilities/Email";

// CommonJS
function Booking({title , subtitle}:{title:string , subtitle:string}) {
  const [name,setName]=useState("")
  const [location,setLocation]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")
  const form:any = useRef();


  const sendEmail = (e:any) => {
    e.preventDefault();
console.log("working");

    if(name&&location&&phone&&email){
sendingEmail(form.current,"contact_form")

      clearForm()
    }

    else{
      Swal.fire({
        title: 'Error',
        text: 'Mail not sent, fill all fields',
        icon: 'error',
        confirmButtonText: 'ok',
        backdrop:true

      })
    }


};

const clearForm=()=>{
setName("")
setLocation("")
setPhone("")
setEmail("")
setMessage("")
}







  return (
    <section className={`${styles.section} capitalize items-center justify-center flex`}>
      <div className="flex flex-wrap flex-row container items-center justify-center">
        <div className="w-[80%] md:w-[40%] mx-auto mb-[50px] self-start">
          <h2 className={`mb-[18px]`}>{title}</h2>
          <p>
        {subtitle}
          </p>
        </div>

        <form onSubmit={sendEmail} ref={form} className="w-[80%] md:w-[40%] lg:w-[50%] mx-auto">
          <div className="">
            <Input type="text" onChange={setName} value={name} label="name" height="50px" width="100%" />
          </div>
          <div className="mt-[40px]">
            <Input onChange={setEmail} value={email} type="email" label="email" height="50px" width="100%" />
          </div>
          <div className="mt-[40px]">
            <Input onChange={setPhone} value={phone} type="text" label="phone" height="50px" width="100%" />
          </div>
          <div className="mt-[40px]">
            <Input onChange={setLocation} value={location} type="text" label="location" height="50px" width="100%" />
          </div>

          <div className="mt-[40px]">
            <TextArea onChange={setMessage} value={message}  label="additional details" />
          </div>

          <div className="mt-[40px]">
            <Button submit={true} text="send a message"/>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Booking;

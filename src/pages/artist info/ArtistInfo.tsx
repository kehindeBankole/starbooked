import React from 'react'
import { ArtistInfoGallery } from '../../utilities'
import {FB,Insta,Twitter2,BandInfo,ComedianInfo,DjInfo,InfluencerInfo,McInfo,MusicianInfo} from "../../assets/images"
import { Input, Button,TextArea } from "../../utilities";
import Box from '@mui/material/Box';
import * as BI from "react-bootstrap-icons"
import sendingEmail from "../../utilities/Email";
import Swal from 'sweetalert2'

import Modal from '@mui/material/Modal';
import { useParams } from 'react-router-dom';
import {useContext,useState,useRef} from "react"



const AboutArtist=[
{
header:"the band hitz",
about:<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien enim, volutpat vitae pulvinar. Condimentum sit quis tellus tortor lacinia egestas ornare. Vulputate at viverra ut gravida. Aenean nibh quis amet varius dui dui habitasse. Sapien egestas nascetur feugiat orci. Dui non tincidunt massa amet. Velit ullamcorper est pellentesque ultrices enim. Ultrices arcu volutpat, vel proin id. Velit lacinia pretium velit metus, in. <br /> <br /> Malesuada magna eros, viverra enim praesent at sed. Sit consectetur ac, nunc placerat. Ornare semper rhoncus hac sit erat. Eget lacus viverra sit amet pellentesque in mauris dis auctor. Semper ipsum lectus ante et nulla. Sit vulputate elit, libero aenean rhoncus. Facilisis consectetur aenean vitae, vitae at egestas. Tellus vulputate viverra cras lacus. Sit aliquet ut mattis praesent. Aliquet proin in amet consequat ipsum vitae velit at. Neque, nec at nunc, venenatis pellentesque viverra tellus amet diam. Enim sit iaculis ut adipiscing rutrum tristique auctor etiam eget. Aliquet elit ut amet velit ut risus morbi nunc. <br /><br /> Ullamcorper faucibus tellus egestas risus nibh quis quam proin pellentesque. Dui, nulla porttitor volutpat mi ultrices. Eu eget dolor lacus, mauris duis eget. Diam nisl dictum sapien etiam nunc tincidunt ipsum proin massa. Porta ut sagittis velit, pharetra sagittis proin urna at. Varius elementum ultrices enim etiam mauris, curabitur proin faucibus. Felis in ornare nulla magna. Eu mauris semper id mattis. Auctor elementum viverra venenatis, ut interdum purus in et.</>
,
img:BandInfo},
{
    header:"arole",
    about:<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien enim, volutpat vitae pulvinar. Condimentum sit quis tellus tortor lacinia egestas ornare. Vulputate at viverra ut gravida. Aenean nibh quis amet varius dui dui habitasse. Sapien egestas nascetur feugiat orci. Dui non tincidunt massa amet. Velit ullamcorper est pellentesque ultrices enim. Ultrices arcu volutpat, vel proin id. Velit lacinia pretium velit metus, in. <br /> <br />
    Malesuada magna eros, viverra enim praesent at sed. Sit consectetur ac, nunc placerat. Ornare semper rhoncus hac sit erat. Eget lacus viverra sit amet pellentesque in mauris dis auctor. Semper ipsum lectus ante et nulla. Sit vulputate elit, libero aenean rhoncus. Facilisis consectetur aenean vitae, vitae at egestas. Tellus vulputate viverra cras lacus. Sit aliquet ut mattis praesent. Aliquet proin in amet consequat ipsum vitae velit at. Neque, nec at nunc, venenatis pellentesque viverra tellus amet diam. Enim sit iaculis ut adipiscing rutrum tristique auctor etiam eget. Aliquet elit ut amet velit ut risus morbi nunc. <br /> <br />
    Ullamcorper faucibus tellus egestas risus nibh quis quam proin pellentesque. Dui, nulla porttitor volutpat mi ultrices. Eu eget dolor lacus, mauris duis eget. Diam nisl dictum sapien etiam nunc tincidunt ipsum proin massa. Porta ut sagittis velit, pharetra sagittis proin urna at. Varius elementum ultrices enim etiam mauris, curabitur proin faucibus. Felis in ornare nulla magna. Eu mauris semper id mattis. Auctor elementum viverra venenatis, ut interdum purus in et.</>
    ,
    img:ComedianInfo},
    {
        header:"dj rock",
        about:<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien enim, volutpat vitae pulvinar. Condimentum sit quis tellus tortor lacinia egestas ornare. Vulputate at viverra ut gravida. Aenean nibh quis amet varius dui dui habitasse. Sapien egestas nascetur feugiat orci. Dui non tincidunt massa amet. Velit ullamcorper est pellentesque ultrices enim. Ultrices arcu volutpat, vel proin id. Velit lacinia pretium velit metus, in. <br /> <br />
        Malesuada magna eros, viverra enim praesent at sed. Sit consectetur ac, nunc placerat. Ornare semper rhoncus hac sit erat. Eget lacus viverra sit amet pellentesque in mauris dis auctor. Semper ipsum lectus ante et nulla. Sit vulputate elit, libero aenean rhoncus. Facilisis consectetur aenean vitae, vitae at egestas. Tellus vulputate viverra cras lacus. Sit aliquet ut mattis praesent. Aliquet proin in amet consequat ipsum vitae velit at. Neque, nec at nunc, venenatis pellentesque viverra tellus amet diam. Enim sit iaculis ut adipiscing rutrum tristique auctor etiam eget. Aliquet elit ut amet velit ut risus morbi nunc. <br /> <br />
        Ullamcorper faucibus tellus egestas risus nibh quis quam proin pellentesque. Dui, nulla porttitor volutpat mi ultrices. Eu eget dolor lacus, mauris duis eget. Diam nisl dictum sapien etiam nunc tincidunt ipsum proin massa. Porta ut sagittis velit, pharetra sagittis proin urna at. Varius elementum ultrices enim etiam mauris, curabitur proin faucibus. Felis in ornare nulla magna. Eu mauris semper id mattis. Auctor elementum viverra venenatis, ut interdum purus in et.</>
        ,
        img:DjInfo},
        {
            header:"good vibes",
            about:<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien enim, volutpat vitae pulvinar. Condimentum sit quis tellus tortor lacinia egestas ornare. Vulputate at viverra ut gravida. Aenean nibh quis amet varius dui dui habitasse. Sapien egestas nascetur feugiat orci. Dui non tincidunt massa amet. Velit ullamcorper est pellentesque ultrices enim. Ultrices arcu volutpat, vel proin id. Velit lacinia pretium velit metus, in. <br /><br />
            Malesuada magna eros, viverra enim praesent at sed. Sit consectetur ac, nunc placerat. Ornare semper rhoncus hac sit erat. Eget lacus viverra sit amet pellentesque in mauris dis auctor. Semper ipsum lectus ante et nulla. Sit vulputate elit, libero aenean rhoncus. Facilisis consectetur aenean vitae, vitae at egestas. Tellus vulputate viverra cras lacus. Sit aliquet ut mattis praesent. Aliquet proin in amet consequat ipsum vitae velit at. Neque, nec at nunc, venenatis pellentesque viverra tellus amet diam. Enim sit iaculis ut adipiscing rutrum tristique auctor etiam eget. Aliquet elit ut amet velit ut risus morbi nunc. <br /> <br />
            Ullamcorper faucibus tellus egestas risus nibh quis quam proin pellentesque. Dui, nulla porttitor volutpat mi ultrices. Eu eget dolor lacus, mauris duis eget. Diam nisl dictum sapien etiam nunc tincidunt ipsum proin massa. Porta ut sagittis velit, pharetra sagittis proin urna at. Varius elementum ultrices enim etiam mauris, curabitur proin faucibus. Felis in ornare nulla magna. Eu mauris semper id mattis. Auctor elementum viverra venenatis, ut interdum purus in et.</>
            ,
            img:InfluencerInfo},
            {
                header:"mc laughs",
                about:<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien enim, volutpat vitae pulvinar. Condimentum sit quis tellus tortor lacinia egestas ornare. Vulputate at viverra ut gravida. Aenean nibh quis amet varius dui dui habitasse. Sapien egestas nascetur feugiat orci. Dui non tincidunt massa amet. Velit ullamcorper est pellentesque ultrices enim. Ultrices arcu volutpat, vel proin id. Velit lacinia pretium velit metus, in. <br /> <br />
                Malesuada magna eros, viverra enim praesent at sed. Sit consectetur ac, nunc placerat. Ornare semper rhoncus hac sit erat. Eget lacus viverra sit amet pellentesque in mauris dis auctor. Semper ipsum lectus ante et nulla. Sit vulputate elit, libero aenean rhoncus. Facilisis consectetur aenean vitae, vitae at egestas. Tellus vulputate viverra cras lacus. Sit aliquet ut mattis praesent. Aliquet proin in amet consequat ipsum vitae velit at. Neque, nec at nunc, venenatis pellentesque viverra tellus amet diam. Enim sit iaculis ut adipiscing rutrum tristique auctor etiam eget. Aliquet elit ut amet velit ut risus morbi nunc. <br /> <br />
                Ullamcorper faucibus tellus egestas risus nibh quis quam proin pellentesque. Dui, nulla porttitor volutpat mi ultrices. Eu eget dolor lacus, mauris duis eget. Diam nisl dictum sapien etiam nunc tincidunt ipsum proin massa. Porta ut sagittis velit, pharetra sagittis proin urna at. Varius elementum ultrices enim etiam mauris, curabitur proin faucibus. Felis in ornare nulla magna. Eu mauris semper id mattis. Auctor elementum viverra venenatis, ut interdum purus in et.</>
                ,
                img:McInfo},
                {
                    header:"big dom whiz",
                    about:<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien enim, volutpat vitae pulvinar. Condimentum sit quis tellus tortor lacinia egestas ornare. Vulputate at viverra ut gravida. Aenean nibh quis amet varius dui dui habitasse. Sapien egestas nascetur feugiat orci. Dui non tincidunt massa amet. Velit ullamcorper est pellentesque ultrices enim. Ultrices arcu volutpat, vel proin id. Velit lacinia pretium velit metus, in.
                    <br /><br />
                    Malesuada magna eros, viverra enim praesent at sed. Sit consectetur ac, nunc placerat. Ornare semper rhoncus hac sit erat. Eget lacus viverra sit amet pellentesque in mauris dis auctor. Semper ipsum lectus ante et nulla. Sit vulputate elit, libero aenean rhoncus. Facilisis consectetur aenean vitae, vitae at egestas. Tellus vulputate viverra cras lacus. Sit aliquet ut mattis praesent. Aliquet proin in amet consequat ipsum vitae velit at. Neque, nec at nunc, venenatis pellentesque viverra tellus amet diam. Enim sit iaculis ut adipiscing rutrum tristique auctor etiam eget. Aliquet elit ut amet velit ut risus morbi nunc. <br /><br />
                    Ullamcorper faucibus tellus egestas risus nibh quis quam proin pellentesque. Dui, nulla porttitor volutpat mi ultrices. Eu eget dolor lacus, mauris duis eget. Diam nisl dictum sapien etiam nunc tincidunt ipsum proin massa. Porta ut sagittis velit, pharetra sagittis proin urna at. Varius elementum ultrices enim etiam mauris, curabitur proin faucibus. Felis in ornare nulla magna. Eu mauris semper id mattis. Auctor elementum viverra venenatis, ut interdum purus in et.</>
                    ,
                    img:MusicianInfo},
]


function ArtistInfo() {
    const params=useParams()
    const {aboutArtist}=params

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'black',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        color:"white",
      };
      
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      const [name,setName]=useState("")
const [location,setLocation]=useState("")
const [phone,setPhone]=useState("")
const [email,setEmail]=useState("")
const [message,setMessage]=useState("")
const form:any = useRef();

const sendEmail = (e:any) => {
  e.preventDefault();
handleClose()
  if(name&&location&&phone&&email){
sendingEmail(form.current,"contact_form")


    clearForm()
  }

  else{
    Swal.fire({
      title: 'Error',
      text: 'Mail not sent, fill all fields',
      icon: 'error',
      confirmButtonText: 'ok'
    })
  }


};
const clearForm=()=>{
  setName("")
  setLocation("")
  setPhone("")
  setEmail("")
  // setMessage("")
  }


    return (
        <section className=''>
        <div className='container'>
        
    {AboutArtist.map((item,index)=>`about ${item.header}`=== aboutArtist&&(<React.Fragment key={index}>
<>
<header className='text-center uppercase  lg:text-[4rem] text-[1.5rem] md:text-[2rem] font-[700]'>
           {item.header}
          </header>

        {<ArtistInfoGallery handleOpen={handleOpen} handle1={FB}handle2={Twitter2} handle3={Insta} img={item.img} header={item.header} about={item.about}/>}
        </>
    </React.Fragment>))}
        
    <div>
    
    </div>
        </div>
        <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <form ref={form} onSubmit={sendEmail} className="relative capitalize">
      <div className=' '>

<Input type="text" onChange={setName} value={name} label="name" important={true} height="50px" width="100%" />
</div>
<div className="mt-[10px]">
<Input type="text" onChange={setEmail} value={email} label="email" important={true} height="50px" width="100%" />
</div>
<div className="mt-[10px]">
<Input type="text" onChange={setPhone} value={phone} label="phone" height="50px"  width="100%" />
</div>
<div className="mt-[10px]">
<Input type="text" onChange={setLocation} value={location} label="location" important={true} height="50px" width="100%" />
</div>

<div className="mt-[10px]">
<TextArea label="message" important={true}/>
</div>

<div className="mt-[10px]">
<Button submit={true}  text="Send a message" height="68px" width="100%" />
</div>
<button onClick={()=>handleClose()} className='absolute top-[-5%] right-[-10%] text-light  text-[2.5rem] font-[700]'><BI.X/></button>
              </form>
    
      </Box>
    </Modal>
      </section>
      )
}

export default ArtistInfo
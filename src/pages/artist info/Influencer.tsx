import React from 'react'
import {FB,Insta,Twitter2,InfluencerInfo} from "../../assets/images"

import { ArtistInfoGallery } from '../../utilities'

import { Input, Button,TextArea } from "../../utilities";
import Box from '@mui/material/Box';
import * as BI from "react-bootstrap-icons"

import Modal from '@mui/material/Modal';

function Influencer() {
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
  return (
    <section>
    <div className='container'>
      <header className='text-center uppercase  lg:text-[4rem] text-[1.5rem] md:text-[2rem] font-[700]'>
      good vibes
      </header>

<ArtistInfoGallery handleOpen={handleOpen} action="good vibes" img={InfluencerInfo}about={<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien enim, volutpat vitae pulvinar. Condimentum sit quis tellus tortor lacinia egestas ornare. Vulputate at viverra ut gravida. Aenean nibh quis amet varius dui dui habitasse. Sapien egestas nascetur feugiat orci. Dui non tincidunt massa amet. Velit ullamcorper est pellentesque ultrices enim. Ultrices arcu volutpat, vel proin id. Velit lacinia pretium velit metus, in. <br /><br />
Malesuada magna eros, viverra enim praesent at sed. Sit consectetur ac, nunc placerat. Ornare semper rhoncus hac sit erat. Eget lacus viverra sit amet pellentesque in mauris dis auctor. Semper ipsum lectus ante et nulla. Sit vulputate elit, libero aenean rhoncus. Facilisis consectetur aenean vitae, vitae at egestas. Tellus vulputate viverra cras lacus. Sit aliquet ut mattis praesent. Aliquet proin in amet consequat ipsum vitae velit at. Neque, nec at nunc, venenatis pellentesque viverra tellus amet diam. Enim sit iaculis ut adipiscing rutrum tristique auctor etiam eget. Aliquet elit ut amet velit ut risus morbi nunc. <br /> <br />
Ullamcorper faucibus tellus egestas risus nibh quis quam proin pellentesque. Dui, nulla porttitor volutpat mi ultrices. Eu eget dolor lacus, mauris duis eget. Diam nisl dictum sapien etiam nunc tincidunt ipsum proin massa. Porta ut sagittis velit, pharetra sagittis proin urna at. Varius elementum ultrices enim etiam mauris, curabitur proin faucibus. Felis in ornare nulla magna. Eu mauris semper id mattis. Auctor elementum viverra venenatis, ut interdum purus in et.</>} handle1={FB} handle2={Twitter2} handle3={Insta}/>
    
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
  <div className="relative capitalize">
    <div className=' '>

            <Input label="name*" height="50px" width="100%" />
          </div>
          <div className="mt-[10px]">
            <Input label="email*" height="50px" width="100%" />
          </div>
          <div className="mt-[10px]">
            <Input label="phone" height="50px" width="100%" />
          </div>
          <div className="mt-[10px]">
            <Input label="location*" height="50px" width="100%" />
          </div>

          <div className="mt-[10px]">
            <TextArea label="message*" />
          </div>

          <div className="mt-[10px]">
            <Button text="Send a message" height="68px" width="100%" />
          </div>
          <button  onClick={handleClose}  className='absolute top-[-5%] right-[-10%] text-light  text-[2.5rem] font-[700]'><BI.X/></button>
          </div>

  </Box>
</Modal>
  </section>
  )
}

export default Influencer
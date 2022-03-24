import React from 'react'
import { ArtistInfoGallery } from '../../utilities'
import {FB,Insta,Twitter2,DjInfo} from "../../assets/images"



function Dj() {
  return (
    <section>
    <div className='container'>
      <header className='text-center uppercase  lg:text-[4rem] text-[1.5rem] md:text-[2rem] font-[700]'>
        dj rock
      </header>

<ArtistInfoGallery action="dj rock" img={DjInfo} about={<>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien enim, volutpat vitae pulvinar. Condimentum sit quis tellus tortor lacinia egestas ornare. Vulputate at viverra ut gravida. Aenean nibh quis amet varius dui dui habitasse. Sapien egestas nascetur feugiat orci. Dui non tincidunt massa amet. Velit ullamcorper est pellentesque ultrices enim. Ultrices arcu volutpat, vel proin id. Velit lacinia pretium velit metus, in. <br /> <br />
Malesuada magna eros, viverra enim praesent at sed. Sit consectetur ac, nunc placerat. Ornare semper rhoncus hac sit erat. Eget lacus viverra sit amet pellentesque in mauris dis auctor. Semper ipsum lectus ante et nulla. Sit vulputate elit, libero aenean rhoncus. Facilisis consectetur aenean vitae, vitae at egestas. Tellus vulputate viverra cras lacus. Sit aliquet ut mattis praesent. Aliquet proin in amet consequat ipsum vitae velit at. Neque, nec at nunc, venenatis pellentesque viverra tellus amet diam. Enim sit iaculis ut adipiscing rutrum tristique auctor etiam eget. Aliquet elit ut amet velit ut risus morbi nunc. <br /> <br />
Ullamcorper faucibus tellus egestas risus nibh quis quam proin pellentesque. Dui, nulla porttitor volutpat mi ultrices. Eu eget dolor lacus, mauris duis eget. Diam nisl dictum sapien etiam nunc tincidunt ipsum proin massa. Porta ut sagittis velit, pharetra sagittis proin urna at. Varius elementum ultrices enim etiam mauris, curabitur proin faucibus. Felis in ornare nulla magna. Eu mauris semper id mattis. Auctor elementum viverra venenatis, ut interdum purus in et.</>} handle1={FB} handle2={Twitter2} handle3={Insta}/>
    
<div>

</div>
    </div>
  </section>
  )
}

export default Dj
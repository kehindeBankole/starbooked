import React, { useEffect, useState } from 'react'
import {wizkid,davido,tems,olamide,phyno,donjazzy,psquare,yemi_alade,nasty_c,flavour,burnaboy, buju,} from "../../assets/images"


function SearchArtist() {

const artist=[
    {
        image:wizkid,
        name:"wizkid"
    },
    {
        image:davido,
        name:"davido"
    },
    {
        image:tems,
        name:"tems"
    },
    {
        image:olamide,
        name:"olamide"
    },
    {
        image:phyno,
        name:"phyno"
    },
    {
        image:donjazzy,
        name:"donjazzy"
    },
    {
        image:psquare,
        name:"psquare"
    },
    {
        image:yemi_alade,
        name:"yemi_alade"
    },
    {
        image:nasty_c,
        name:"nasty_c"
    },
    {
        image:flavour,
        name:"flavour"
    },
    {
        image:burnaboy,
        name:"burnaboy"
    }
    ,
    {
        image:buju,
        name:"buju"
    }
]
const [artSearch,setArtSearch]=useState(artist)


const filterArtist=(input:string)=>{

if(input) setArtSearch(artist.filter((item)=>(item.name.includes(input))))
else setArtSearch(artist)



    // console.log(artSearch);
    
}



    return (
    <div className='md:pl-[61px] md:pr-[57px] container'>
        <div className='flex w-full md:justify-end justify-center mb-[20px]'>
            <div>
                <div className='w-[100%]'>
                <label htmlFor="artist" className='capitalize pb-[20px]  text-center'>search artist</label> 
                </div>
      
            <input type="text" onChange={(e)=>filterArtist(e.target.value)} className='w-[300px] border border-[lightgray]' />
            </div>
           </div>

        <div className='flex flex-wrap '>
{artSearch.map((item,index)=>(<>
<div className='my-[20px] m-auto hover:translate-y-[-1%] transition-all'>
    <img src={item.image} className="w-[254px] shadow-lg rounded-sm h-[280px]" alt={item.name} />
    <p className='text-center mt-[10px] uppercase font-bold'>{item.name}</p>
</div>
</>))}
        </div>
    </div>
  )
}

export default SearchArtist
import React from 'react'
import {NewsCard} from "../../utilities"
import {ManReading,PostedNews,News,Phone} from "../../assets/images"
function NewsGallery() {
  return (    <>
<NewsCard text="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor do amet sint. Velit officia 
 duis enim velit mollit. Exercitation veniam 
 sunt nostrud amet............" img={Phone} title="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor."/>

<NewsCard text="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor do amet sint. Velit officia 
 duis enim velit mollit. Exercitation veniam 
 sunt nostrud amet............" img={ManReading} title="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor."/>

<NewsCard text="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor do amet sint. Velit officia 
 duis enim velit mollit. Exercitation veniam 
 sunt nostrud amet............" img={PostedNews} title="Amet minim mollit non deserunt ullamco est 
sit aliqua dolor."/>

  </>
  )
}

export default NewsGallery
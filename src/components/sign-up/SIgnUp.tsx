import "./booking.module.scss"
import {Input} from "../../utilities";
function Booking() {
  return (
    <section className="pt-[130px] capitalize">
      <div className="flex flex-wrap">

        <div className="w-[80%] md:w-[35%] mx-auto mb-[50px]">
           <h2 className="mb-[18px]">Get in touch</h2>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu duis donec non fames tellus.
           </p>
        </div>

<div className="w-[80%] md:w-[35%] mx-auto">
  <div className="">
  <Input label="name" height="50px" width="100%"/>
  </div>
  <div className="mt-[40px]">
  <Input label="email" height="50px" width="100%" />
  </div>
  <div className="mt-[40px]">
  <Input label="phone" height="50px" width="100%"/>
  </div>
  <div className="mt-[40px]">
<Input label="location" height="50px" width="100%"/>
  </div>
</div>
</div>
      
    </section>
  )
}

export default Booking
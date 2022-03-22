import styles from "./Booking.module.scss";
import { Input, Button } from "../../utilities";
function Booking({title , subtitle}:{title:string , subtitle:string}) {
  return (
    <section className={`${styles.section} capitalize items-center justify-center flex`}>
      <div className="flex flex-wrap flex-row container items-center justify-center">
        <div className="w-[80%] md:w-[40%] mx-auto mb-[50px] self-start">
          <h2 className={`mb-[18px]`}>{title}</h2>
          <p>
        {subtitle}
          </p>
        </div>

        <div className="w-[80%] md:w-[40%] mx-auto">
          <div className="">
            <Input label="name" height="50px" width="100%" />
          </div>
          <div className="mt-[40px]">
            <Input label="email" height="50px" width="100%" />
          </div>
          <div className="mt-[40px]">
            <Input label="phone" height="50px" width="100%" />
          </div>
          <div className="mt-[40px]">
            <Input label="location" height="50px" width="100%" />
          </div>

          <div className="mt-[40px]">
            <Button text="send a message"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;

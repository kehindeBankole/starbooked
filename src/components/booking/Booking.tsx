import styles from "./Booking.module.scss";
import { Input, Button,TextArea } from "../../utilities";
function Booking() {
  return (
    <section className={`${styles.section} capitalize`}>
      <div className="container flex flex-wrap py-[100px] md:py-[130px]">
        <div className="w-[80%] md:w-[60%] lg:w-[30%] mx-auto mb-[50px]">
          <h2 className={`mb-[18px]`}>get in touch</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu duis donec non fames tellus.
          </p>
        </div>

        <div className="w-[80%] md:w-[60%] lg:w-[40%] mx-auto">
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
            <TextArea label="message" />
          </div>

          <div className="mt-[40px]">
            <Button text="Send a message" height="68px" width="100%" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;

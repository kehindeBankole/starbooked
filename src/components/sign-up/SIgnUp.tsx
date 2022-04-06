import styles from "./SignUp.module.scss";
import { Input, Button, TextArea } from "../../utilities";
function SignUp() {
  return (
    <section className={`${styles.section} capitalize`}>
      <div className="container flex flex-wrap py-[100px] md:py-[130px]">
        <div className="w-[80%] md:w-[60%] lg:w-[30%] mx-auto mb-[50px]">
          <h2 className={`mb-[18px]`}>be the first to know</h2>
          <p>
            Sign up to get exclusive information about our new signings, rosters
            and labels. We only send you information that you tell us is
            relevant, and won’t share your email with anyone else.
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
            <TextArea label="additional details" />
          </div>

          <div className="mt-[40px]">
            <Button text="Sign up" height="68px" width="100%" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;

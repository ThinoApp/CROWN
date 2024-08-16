import { baseUrl } from "@/config";
import "./MeetTheStylistsLeft.scss";
import { motion } from "framer-motion";

const MeetTheStylistsLeft = () => {
  return (
    <div className="MeetTheStylistsLeft">
      <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 0.15,
        }}
        src={`${baseUrl}/assets/images/Cta-bg.png`}
        alt="images"
      />
      <motion.h2
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        MEET STYLISTS
      </motion.h2>
      <motion.p
        initial={{
          x: 100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        YOU'LL BE MATCHED WITH YOUR OWN PERSONAL STYLIST WHO WILL HAND PICK
        OUTFITS SPECIFICALLY FOR YOU. AS A PREMIUM CUSTOMER YOU CAN SELECT THE
        STYLIST WHO YOU THINK BEST MEETS YOUR NEEDS AND CONTINUE TO WORK WITH
        THEM TO DEVELOP YOUR LOOK AND BUILD OUT YOUR WARDROBE.
      </motion.p>
    </div>
  );
};
export default MeetTheStylistsLeft;

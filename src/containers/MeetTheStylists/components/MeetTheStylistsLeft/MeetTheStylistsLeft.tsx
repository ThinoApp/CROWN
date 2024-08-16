import { baseUrl } from "@/config";
import "./MeetTheStylistsLeft.scss";
const MeetTheStylistsLeft = () => {
  return (
    <div className="MeetTheStylistsLeft">
      <img src={`${baseUrl}/assets/images/Cta-bg.png`} alt="images" />
      <h2>MEET STYLISTS</h2>
      <p>
        YOU'LL BE MATCHED WITH YOUR OWN PERSONAL STYLIST WHO WILL HAND PICK
        OUTFITS SPECIFICALLY FOR YOU. AS A PREMIUM CUSTOMER YOU CAN SELECT THE
        STYLIST WHO YOU THINK BEST MEETS YOUR NEEDS AND CONTINUE TO WORK WITH
        THEM TO DEVELOP YOUR LOOK AND BUILD OUT YOUR WARDROBE.
      </p>
    </div>
  );
};
export default MeetTheStylistsLeft;

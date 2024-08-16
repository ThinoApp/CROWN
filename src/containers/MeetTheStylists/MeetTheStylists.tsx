import MeetTheStylistsCaroussel from "./components/MeetTheStylistsCaroussel/MeetTheStylistsCaroussel";
import MeetTheStylistsLeft from "./components/MeetTheStylistsLeft/MeetTheStylistsLeft";
import "./MeetTheStylists.scss";
const MeetTheStylists = () => {
  return (
    <div className="MeetTheStylists">
      <MeetTheStylistsLeft />
      <MeetTheStylistsCaroussel />
    </div>
  );
};
export default MeetTheStylists;

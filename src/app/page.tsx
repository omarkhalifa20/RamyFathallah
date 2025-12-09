import AboutCom from "@/Components/About/AboutCom";
import AtcComp from "@/Components/Atc/AtcComp";
import BolgComp from "@/Components/Blog/BolgComp";
import EventsComp from "@/Components/Events/EventsComp";
import FathallahComp from "@/Components/Fathallah/FathallahComp";
import HomeComp from "@/Components/Home/HomeComp";

 
export default function Home() {
  return (
  <>
  <HomeComp/>
  <AboutCom/>
  <FathallahComp/>
  <EventsComp/>
  <AtcComp/>
  <BolgComp/>
  </>
  );
}

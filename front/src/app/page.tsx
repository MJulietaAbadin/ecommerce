import LandingComponent from "@/components/LandingComponent";
import backgroundImage from "../../public/landingBackground.jpg"


export default function LandingPage() {
  return (
    <div className="bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${backgroundImage.src})` }}>
      <LandingComponent/>
    </div>
  );
}

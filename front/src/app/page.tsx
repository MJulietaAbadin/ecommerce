import LandingPageComponent from "@/components/LandingPageComponent";
import background from "../../public/fondo.jpeg";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <main className="flex-grow">
        <LandingPageComponent />
      </main>
    </div>
  );
}

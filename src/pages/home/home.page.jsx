import { useUser } from "@clerk/clerk-react";
import Hero from "./components/Hero";
import JobSection from "./components/jobsection";

function HomePage() {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <div>
      <Hero />

      <JobSection />
    </div>
  );
}

export default HomePage;

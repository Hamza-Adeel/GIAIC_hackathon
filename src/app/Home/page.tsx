import About from "./About";
import FoodCategory from "./food_category";
import Hero from "./hero";
import MeetShef from "./meetchef";

// import { LoginProvider } from "@/context/login/login";
export default function Homepage() {
  return (

    
    <div>
      <Hero/>
      <About/>
      <FoodCategory/>
      <MeetShef/>
    </div>
  );
}
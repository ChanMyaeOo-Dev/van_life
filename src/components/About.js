import { Link } from "react-router-dom";
import VanNavBar from "./VanNavBar";

export default function About() {
  return (
    <div>
      <VanNavBar />
      <div className="px-4 py-3">
        <p className="text-primary">About Page</p>
      </div>
    </div>
  );
}

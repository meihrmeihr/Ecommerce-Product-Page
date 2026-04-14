import { Link } from "react-router-dom";
import Buy from "./Buy";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
export default function Home() {
    return (
        <>
            <Navbar/>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-x-10 lg:mt-10">
                <Carousel/>
                <Buy/>
            </div>
            <footer className="text-center my-6 mx-2">
                Challenge by <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-orange-500 underline">Frontend Mentor</Link>. 
                Coded by <Link to="https://github.com/meihrmeihr" target="_blank" className="text-orange-500 underline">Mahir</Link>.
            </footer>
        </>
    );
}


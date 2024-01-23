import MenuItem from "@/components/MenuItem";
import { AiFillHome} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs";

export default function Header() {
    return (
        <div className='flex justify-between p-3 max-w-6xl mx-auto'>
            <div className='ml-4 mt-5 flex gap-4'>
            <MenuItem title="Home" address="/" Icon={AiFillHome}/>
            <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill}/>
            </div>
            <div className='flex mt-2 mr-20 items-center'>
                <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDB</span>
                <span className='text-xl hidden sm:inline'>Clone</span>
            </div>

        </div>
    )
}
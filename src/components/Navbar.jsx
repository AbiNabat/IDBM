import NavbarItem from "@/components/NavbarItem";

export default function Navbar() {
    return (
        <>
        <div className='flex items-center dark:bg-amber-500 bg-amber-100 p-4 lg:text-lg justify-center gap-4'>
            <NavbarItem title="Trending" param="fetchTrending"/>
            <NavbarItem title="Top Rated" param="fetchTopRated"/>
        </div>
        </>
    )
}
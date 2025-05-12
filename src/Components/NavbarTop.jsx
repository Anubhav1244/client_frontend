import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";

const NavbarTop = () => {
  return (
    <section className='w-full flex justify-around items-center px-24 '>
        <div className="w-48">
            <img src="/images/logo.png" alt="logo" className="w-full object-cover" />
        </div>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
        <HiOutlineMail className="text-3xl"  />
            <p className="text-lg">info@nurturedisability.com.au</p>
            </div>
            <div className="flex items-center gap-2">
        <MdOutlineLocalPhone  className="text-3xl" />
        <p className="text-lg">1234567890</p>

            </div>
        </div>
    </section>
  )
}

export default NavbarTop
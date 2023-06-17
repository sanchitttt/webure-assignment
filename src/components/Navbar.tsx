import OrangeButton from "./buttons"
import { Logo } from "./icons"

function NavbarLink({ children, href }: { children: React.ReactNode, href: string }) {
  return <a href={href} className='md:text-[18px] xl:text-[21px] text-grey3 font text-sans font-bold'>
    {children}
  </a>
}

function Navbar() {
  return (
    <header className='w-[100vw] h-[135px] flex justify-center items-center shadow-v1'>
      <div className='flex items-center justify-between w-[95%]'>
        <div className='flex items-center sm:gap-[5px] md:gap-[10px]'>
          <div className='sm:w-[60px] sm:h-[60px] xl:w-[95px] xl:h-[92px]'>
            <Logo />
          </div>
          <div className='text-[27px] font-bold text-grey4 text-nunito'>Webure</div>
        </div>
        <nav className='flex items-center justify-around w-[50%] sm:hidden md:flex'>
          <NavbarLink href='#'>Home</NavbarLink>
          <NavbarLink href='#'>About Us</NavbarLink>
          <NavbarLink href='#'>Services</NavbarLink>
          <NavbarLink href='#'>Career</NavbarLink>
          <NavbarLink href='#'>Clientele</NavbarLink>
        </nav>
        <OrangeButton ariaLabel="Contact us">Contact us</OrangeButton>
      </div>
    </header>

  )
}

export default Navbar
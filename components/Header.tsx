
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';
const Header = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='flex items-center justify-between max-w-[1440px] mx-auto sm:px-16 py-4 bg-transparent'>
            <Link href='/' className='flex justify-center items-center'>
                <Image src='images/logo.svg'
                alt='logo'
                width={120}
                height={80}
                className='object-contain'
                />
                
            </Link>
            <CustomButton 
            title='Sign In'
            btnType='button'
            containerStyles='text-blue-800 rounded-full bg-white min-w-10 min-w-[130px]'/>
        </nav>
    </header>
  )
}

export default Header;
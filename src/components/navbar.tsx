import Link from 'next/link';

export default function Navbar() {
    return (
 <header className="bg-[#252b42] text-white">
    <div className="flex w-[1046px] h-[91px] pt-4 pr-8  mx-auto">
        <div className="w-[186px] h-[58px] pt-4"><h3 className="font-sans font-bold leading-8 text-[24px] text-white  ">
            BrandName
        </h3>
        </div>
       <nav>
    <div className="flex items-center justify-center w-[815px] h-14 pt-4 pr-8 ">

            <div className="flex items-center justify-center w-[275px] h-6 top-4 gap-5 mr-60">

                <Link href="/" > Home</Link>
                <Link href="/product">Product</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/contact">Contact</Link>
                
            </div>   
    <div className="flex items-center justify-around p-8 w-[214px] h-[52px] gap-8 ">
        <button className='w-[41px] h-[22px]'>
            Login
        </button>
        <button className='w-[110px] h-[52px] bg-[#23a6f0] rounded-sm'>
            JOIN US
        </button>
        {/* <button className='w-6 h-[13.71px]'>.</button>  */}
        
    </div>
    </div>
       </nav>
    </div>

 </header>
    )
}
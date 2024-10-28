
import Image from "next/image";

export default function Home() {
  return (
    <section className=" bg-[#252b42] h-[1,028px] pt-20 pb-20 gap-20">
      <div className="flex text-center items-center justify-center " >
        <div className="w-[701px] h-[496px] ">

      <h5 className="h-[24px] text-[#23a6f0] leading-6 font-serif font-bold text-base text-center pb-20">Welcome</h5>

      <h1 className=" h-[160px] font-bold text-[58px] pb-28 font-sans leading-[80px] tracking-wide">Selling on the<br /> internet like a pro</h1>

      <h4 className="h-[60px] text-[20px] leading-8 pt-10 pb-28">We know how large objects will act, but things on a<br /> small scale just do not act that way.</h4>
      <div className=" h-[52px]">
        <button className="w-[193px] h-[52px] rounded-[5px] mr-2 gap-10 pt-4 pr-10 pb-4 pl-10 bg-[#23A6F0] text-white">Get Quote Now</button>
        <button className="[w-193px] h-[52px] rounded-[5px] pt-4 pr-10 pb-4 pl-10 border-[1px] border-[#23A6F0] text-[#23A6F0]">Learn More</button>
      </div>
        </div>
      </div>

      
    </section>
  );
}

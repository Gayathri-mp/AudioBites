import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#7A1C1C] text-[#E7E9E4] px-[30px] py-[40px] flex flex-wrap justify-between items-start">
      <div className="flex gap-[10px]">
        <Link href="/overview" className="text-[#fdfdfd] font-elsie text-[18px] transition-colors duration-300 hover:text-[#C4AE45] no-underline">Overview</Link>
        <Link href="/menu" className="text-[#fdfdfd] font-elsie text-[18px] transition-colors duration-300 hover:text-[#C4AE45] no-underline">Menu</Link>
        <Link href="/review" className="text-[#fdfdfd] font-elsie text-[18px] transition-colors duration-300 hover:text-[#C4AE45] no-underline">Review</Link>
        <Link href="/payment#events" className="text-[#fdfdfd] font-elsie text-[18px] transition-colors duration-300 hover:text-[#C4AE45] no-underline">Event</Link>
        <Link href="/review#questionaire" className="text-[#fdfdfd] font-elsie text-[18px] transition-colors duration-300 hover:text-[#C4AE45] no-underline">Contact</Link>
      </div>

      <div className="flex flex-col items-center flex-1">
        <div className="font-gloock text-[32px] font-bold text-center">AUDIOBYTES</div>
        <div className="flex gap-[18px]">
          <Link href="https://www.instagram.com" className="p-[10px] mt-[20px] group">
            <Image src="/instagram-svgrepo-com.svg" alt="Instagram" width={28} height={28} className="grayscale-[0.3] transition-all duration-200 group-hover:grayscale-0 group-hover:brightness-125" />
          </Link>
          <Link href="https://www.facebook.com" className="p-[10px] mt-[20px] group">
            <Image src="/facebook-svgrepo-com (1).svg" alt="Facebook" width={28} height={28} className="grayscale-[0.3] transition-all duration-200 group-hover:grayscale-0 group-hover:brightness-125" />
          </Link>
          <Link href="https://www.twitter.com" className="p-[10px] mt-[20px] group">
            <Image src="/twitter-svgrepo-com.svg" alt="Twitter" width={28} height={28} className="grayscale-[0.3] transition-all duration-200 group-hover:grayscale-0 group-hover:brightness-125" />
          </Link>
          <Link href="https://www.youtube.com" className="p-[10px] mt-[20px] group">
            <Image src="/youtube-svgrepo-com.svg" alt="YouTube" width={28} height={28} className="grayscale-[0.3] transition-all duration-200 group-hover:grayscale-0 group-hover:brightness-125" />
          </Link>
        </div>
      </div>

      <form className="flex flex-col gap-[8px] max-w-full sm:max-w-max">
        <label htmlFor="newsletter-email" className="font-sans">Sign up to our newsletter</label>
        <input 
          type="text" 
          id="newsletter-email" 
          placeholder="Enter Email" 
          className="px-[16px] py-[8px] rounded-[20px] border border-[#D68240] bg-[#fffbe6] font-sans text-black focus:outline-none focus:ring-2 focus:ring-[#D68240]" 
        />
      </form>
    </footer>
  );
}

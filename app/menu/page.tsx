"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodCard, { FoodItem } from "@/components/FoodCard";
import { useRouter } from "next/navigation";

const MENU_CATEGORIES = [
  "Appetizers", "Pasta", "Pizza", "Salads", "Soups", "Desserts", "Drinks", "Specials", "Kids"
];

const FOOD_ITEMS: FoodItem[] = [
  { id: "1", name: "Green Broccoli", description: "Fresh & healthy", price: 8.00, oldPrice: 9.50, image: "/food1.png", badge: "-15%" },
  { id: "2", name: "Purple Onion", description: "Chef special", price: 10.00, oldPrice: 12.00, image: "/food2.png", badge: "-23%" },
  { id: "3", name: "Chile Bell Pepper", description: "Smoky & spicy", price: 18.00, image: "/food3.png" },
  { id: "4", name: "Green Cabbage", description: "Crispy & fresh", price: 15.00, image: "/food4.png" },
  { id: "5", name: "Roasted Corn", description: "Smoky & buttery", price: 15.00, image: "/food5.png" },
  { id: "6", name: "Organic Asparagus", description: "Seasonal", price: 16.00, oldPrice: 19.00, image: "/food6.png", badge: "-10%" },
  { id: "7", name: "Purple Onion Skewers", description: "Popular choice", price: 18.00, image: "/food7.png", badge: "SOLD OUT", isSoldOut: true },
  { id: "8", name: "Cherry Tomato Wrap", description: "Light & tasty", price: 14.00, image: "/food8.png" },
];

export default function MenuPage() {
  const router = useRouter();
  const menuListRef = useRef<HTMLDivElement>(null);
  const [cart, setCart] = useState<Set<string>>(new Set());

  const scrollMenu = (amount: number) => {
    if (!menuListRef.current) return;
    const el = menuListRef.current;
    if (window.getComputedStyle(el).overflowX !== 'hidden' && el.scrollWidth > el.clientWidth && window.innerWidth < 900) {
      el.scrollBy({ left: amount, behavior: 'smooth' });
    } else {
      el.scrollBy({ top: amount, behavior: 'smooth' });
    }
  };

  const handleAdd = (id: string, added: boolean) => {
    setCart(prev => {
      const next = new Set(prev);
      if (added) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  const handlePlaceOrder = () => {
    if (cart.size === 0) return;
    const orderIds = Array.from(cart);
    alert('Order placed for items: ' + orderIds.join(', ') + '\nClick OK for Payment gateway simulation');
    router.push("/payment");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E7E9E4] text-[#0F0C27] font-sans">
      {/* Background #7A1C1C is only for Navbar on this page, but we use the fixed Navbar */}
      <Navbar />

      {/* HERO / MENU HEADER */}
      <header className="bg-[#7A1C1C] relative pt-[30px] min-h-[720px] overflow-hidden">
        <div className="font-gloock text-[#EADDBA] text-[80px] tracking-[1px] absolute top-[18px] left-1/2 -translate-x-[300%] translate-y-[70%] z-10 m-0">
          MENU
        </div>
        
        <div className="flex items-center justify-between gap-[30px] max-w-[1200px] mx-auto px-[30px] py-[20px] h-full flex-col lg:flex-row mt-[50px]">
          
          <div className="flex-1 flex items-center justify-start py-[20px] px-[10px]">
            <Image src="/WATCH_VIDEO-01.svg" alt="Watch video" width={1000} height={600} priority className="w-full max-w-[680px] lg:max-w-[1000px] h-auto object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]" />
          </div>

          <div className="w-full lg:w-[260px] flex lg:flex-col items-center gap-[18px] ml-0 lg:ml-[12px] relative py-[18px] lg:py-0 pb-[18px]">
            <button onClick={() => scrollMenu(-120)} className="w-[48px] h-[48px] rounded-full border border-white/15 flex items-center justify-center cursor-pointer bg-transparent text-[#EADDBA] font-bold transition-transform hover:-translate-y-[3px] hidden lg:flex" title="Scroll up" aria-label="Scroll menu up">▲</button>

            <div ref={menuListRef} className="w-full max-h-[120px] lg:max-h-[360px] overflow-y-hidden lg:overflow-y-scroll overflow-x-auto lg:overflow-x-hidden flex lg:flex-col items-center gap-[16px] px-[6px] py-[10px] scrollbar-hide">
              {MENU_CATEGORIES.map(cat => (
                <button key={cat} className="w-[124px] lg:w-[200px] shrink-0 bg-transparent border-[1.5px] border-[rgba(196,174,69,0.8)] text-[#EADDBA] px-[16px] py-[14px] rounded-[14px] font-bold cursor-pointer text-[18px] tracking-[0.02em] transition-all duration-150 hover:bg-[rgba(196,174,69,0.08)] hover:text-white hover:translate-x-[2px]">
                  {cat}
                </button>
              ))}
            </div>

            <div className="hidden lg:block h-[10px]" />
            <button onClick={() => scrollMenu(120)} className="w-[48px] h-[48px] rounded-full border border-white/15 flex items-center justify-center cursor-pointer bg-transparent text-[#EADDBA] font-bold transition-transform hover:-translate-y-[3px] hidden lg:flex" title="Scroll down" aria-label="Scroll menu down">▼</button>
          </div>
        </div>
      </header>

      {/* Grab Your Food Section */}
      <section id="menu" className="py-[72px] pb-[36px] bg-[#E7E9E4]">
        <h2 className="text-center m-0 mb-[34px] font-abril text-[34px] md:text-[40px] lg:text-[56px] text-[#0F0C27] tracking-[0.01em]">
          Grab Your Food !
        </h2>

        <div className="w-full max-w-[1100px] mx-auto px-[16px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[26px] items-start justify-items-center">
            {FOOD_ITEMS.map((item) => (
              <FoodCard key={item.id} item={item} onAdd={handleAdd} />
            ))}
          </div>
        </div>

        <div className="text-center mt-[40px] mb-[56px]">
          <button 
            disabled={cart.size === 0} 
            onClick={handlePlaceOrder}
            className="bg-[#D68240] text-white border-none py-[12px] px-[26px] rounded-[8px] cursor-pointer font-extrabold tracking-[0.02em] shadow-[0_8px_20px_rgba(0,0,0,0.12)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {cart.size > 0 ? `PLACE ORDER (${cart.size})` : "PLACE ORDER"}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

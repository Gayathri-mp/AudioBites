"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

interface BasketItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  desc: string;
  image: string;
}

const INITIAL_BASKET: BasketItem[] = [
  { id: "1", name: "Green Broccoli", price: 8.00, qty: 1, desc: "Healthy", image: "/food1.png" },
  { id: "2", name: "Purple Onion", price: 10.00, qty: 2, desc: "Chef special", image: "/food2.png" },
  { id: "3", name: "Chile Bell Pepper", price: 18.00, qty: 1, desc: "Spicy", image: "/food3.png" },
];

export default function PaymentPage() {
  const router = useRouter();
  const [basket, setBasket] = useState<BasketItem[]>(INITIAL_BASKET);
  const [showModal, setShowModal] = useState(false);
  const [account, setAccount] = useState("");
  const [pin, setPin] = useState("");

  const updateQty = (id: string, delta: number) => {
    setBasket(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, qty: Math.max(1, item.qty + delta) };
      }
      return item;
    }));
  };

  const subtotal = basket.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const delivery = 4.00;
  const total = subtotal + delivery;

  const handlePay = () => {
    if (account && pin) {
      alert("Payment Successful! Redirecting to Review Page...");
      setShowModal(false);
      router.push("/review");
    } else {
      alert("Please enter account number and PIN.");
    }
  };

  return (
    <div className="bg-[#10181B] text-white min-h-screen font-sans">
      <Navbar />

      <header className="pt-[92px] pb-[24px] max-w-[1200px] mx-auto px-[24px]">
        <h1 className="m-0 font-abril text-[56px] tracking-[0.02em] text-[#EADDBA]">CHECKOUT</h1>
      </header>

      <main className="max-w-[1200px] mx-auto px-[24px] flex flex-col xl:flex-row justify-between items-start gap-[32px] py-[10px] pb-[40px]">
        <section className="flex flex-col gap-[20px] w-full">
          {[1, 2, 3, 4].map((idx) => (
            <div key={idx} className="flex justify-between items-center bg-white rounded-[12px] p-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
              <div className="flex-1">
                <h2 className="text-[20px] font-bold mb-[8px] text-[#0B1115]">Farm House Xtreme Pizza</h2>
                <div className="text-[18px] text-[#e63946] mb-[8px]">⭐ ⭐ ⭐ ⭐ ☆</div>
                <p className="text-[14px] text-[#555] mb-[15px]">1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks</p>
                <div className="flex flex-wrap gap-[10px]">
                  <button className="px-[14px] py-[8px] border-none rounded-[8px] cursor-pointer bg-[#2c934b] text-white text-[14px] transition-colors hover:bg-[#0F0C27]">Small £21.90</button>
                  <button className="px-[14px] py-[8px] border-none rounded-[8px] cursor-pointer bg-[#2c934b] text-white text-[14px] transition-colors hover:bg-[#0F0C27] ml-[10px]">Medium £25.90</button>
                  <button className="px-[14px] py-[8px] border-none rounded-[8px] cursor-pointer bg-[#2c934b] text-white text-[14px] transition-colors hover:bg-[#0F0C27] ml-[10px]">Large £27.90</button>
                  <button className="px-[14px] py-[8px] border-none rounded-[8px] cursor-pointer bg-[#2c934b] text-white text-[14px] transition-colors hover:bg-[#0F0C27] ml-[10px]">XL Large with Sauces £32.90</button>
                </div>
              </div>
              <div className="w-[160px] ml-[20px]">
                <Image src={`/food${idx}.png`} alt="Pizza" width={160} height={160} className="w-[160px] rounded-[12px] object-cover" />
              </div>
            </div>
          ))}
        </section>

        <aside className="w-full xl:w-[360px] xl:min-w-[360px] xl:sticky xl:top-[92px] h-auto xl:h-[1000px] bg-[#0B1115] rounded-[16px] shadow-[0_14px_34px_rgba(0,0,0,0.25)] flex flex-col p-[16px] gap-[14px]">
          <h3 className="m-0 mb-[8px] font-gloock text-[22px] rounded-[16px] tracking-[0.02em] text-center bg-[#2c934b] p-[20px]">
            My Basket
          </h3>
          <div className="h-[1px] bg-white/5 my-[4px]" />

          {basket.map(item => (
            <div key={item.id} className="flex items-center gap-[10px] bg-[#0E1216] rounded-[10px] p-[10px] shadow-[0_10px_18px_rgba(0,0,0,0.18)]">
              <div className="w-[56px] h-[56px] rounded-[8px] overflow-hidden shrink-0">
                <Image src={item.image} alt={item.name} width={56} height={56} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] mb-[4px] whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</div>
                <div className="text-[12px] text-[#a8b0b6]">${item.price.toFixed(2)} • {item.desc}</div>
                <div className="flex items-center gap-[8px] mt-[4px]">
                  <button onClick={() => updateQty(item.id, -1)} className="w-[28px] h-[28px] flex items-center justify-center rounded-[8px] bg-[#131A1E] border border-white/10 text-white cursor-pointer">−</button>
                  <span className="text-[14px] w-[20px] text-center">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)} className="w-[28px] h-[28px] flex items-center justify-center rounded-[8px] bg-[#131A1E] border border-white/10 text-white cursor-pointer">+</button>
                </div>
                <div className="flex justify-between mt-[8px] font-bold text-[14px]">
                  <span>Item</span>
                  <span>${(item.price * item.qty).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-auto pt-[8px]">
            <div className="flex justify-between py-[6px] text-[#cbd3d7] text-[14px]">
              <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-[6px] text-[#cbd3d7] text-[14px]">
              <span>Delivery</span><span>${delivery.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-[6px] text-white font-black text-[18px]">
              <span>Total</span><span>${total.toFixed(2)}</span>
            </div>
            <button onClick={() => setShowModal(true)} className="w-full mt-[10px] px-[16px] py-[12px] border-none rounded-[10px] cursor-pointer bg-[#D68240] text-white font-black tracking-[0.02em] text-[16px]">
              PAY ${total.toFixed(2)}
            </button>
          </div>
        </aside>
      </main>

      <section className="py-[56px] pb-[46px] bg-transparent mt-[150px] mb-[150px]">
        <div className="max-w-[1200px] mx-auto px-[24px] flex flex-wrap gap-[26px] justify-center">
          <div className="w-[250px] rounded-[12px] p-[16px] text-center shadow-[0_14px_34px_rgba(0,0,0,0.25)]">
            <div className="flex justify-center mb-[10px]"><Image src="/Figure → van.svg.svg" alt="Van" width={50} height={50} /></div>
            <h4 className="m-[6px_0_4px] font-gloock text-[16px]">Free Delivery</h4>
            <p className="m-0 text-[13px] text-[#FCE9AA] leading-[1.5] font-sans">For orders above the threshold in certain zones.</p>
          </div>
          <div className="w-[250px] rounded-[12px] p-[16px] text-center shadow-[0_14px_34px_rgba(0,0,0,0.25)]">
            <div className="flex justify-center mb-[10px]"><Image src="/clock.svg fill.svg" alt="Clock" width={40} height={40} /></div>
            <h4 className="m-[6px_0_4px] font-gloock text-[16px]">Express Shipping</h4>
            <p className="m-0 text-[13px] text-[#FCE9AA] leading-[1.5] font-sans">60-minute delivery process. Learn more in FAQs.</p>
          </div>
          <div className="w-[250px] rounded-[12px] p-[16px] text-center shadow-[0_14px_34px_rgba(0,0,0,0.25)]">
            <div className="flex justify-center mb-[10px]"><Image src="/card.svg fill.svg" alt="Card" width={40} height={40} /></div>
            <h4 className="m-[6px_0_4px] font-gloock text-[16px]">Secure Payment</h4>
            <p className="m-0 text-[13px] text-[#FCE9AA] leading-[1.5] font-sans">We accept Visa, Amex, PayPal, MasterCard & Discover.</p>
          </div>
          <div className="w-[250px] rounded-[12px] p-[16px] text-center shadow-[0_14px_34px_rgba(0,0,0,0.25)]">
            <div className="flex justify-center mb-[10px]"><Image src="/call.svg fill.svg" alt="Call" width={40} height={40} /></div>
            <h4 className="m-[6px_0_4px] font-gloock text-[16px]">Outstanding Support</h4>
            <p className="m-0 text-[13px] text-[#FCE9AA] leading-[1.5] font-sans">Contact us 24/7, 7 days a week. Call: 0123-555-789.</p>
          </div>
        </div>
      </section>

      <section className="bg-white text-[#111] py-[80px] pb-[36px] shadow-[inset_0_1px_0_rgba(0,0,0,0.1),inset_0_-1px_0_rgba(0,0,0,0.18)] min-h-[500px]">
        <div className="max-w-[1200px] mx-auto px-[24px] flex gap-[26px] justify-center flex-wrap">
          <div className="w-[355px] bg-[#7A1C1C] text-white rounded-[8px] p-[16px_16px_14px] shadow-[0_14px_34px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-[8px] font-black m-[2px_0_10px]"><span className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white/20">📍</span> Delivery information</div>
            <ul className="m-0 pl-[18px]">
              <li className="text-[18px] leading-[1.75]"><b>Monday:</b> 12:00 AM–3:00 AM; 8:00 AM–3:00 AM</li>
              <li className="text-[18px] leading-[1.75]"><b>Tuesday:</b> 8:00 AM–3:00 AM</li>
              <li className="text-[18px] leading-[1.75]"><b>Wednesday:</b> 8:00 AM–3:00 AM</li>
              <li className="text-[18px] leading-[1.75]"><b>Thursday:</b> 8:00 AM–3:00 AM</li>
              <li className="text-[18px] leading-[1.75]"><b>Friday:</b> 8:00 AM–3:00 AM</li>
              <li className="text-[18px] leading-[1.75]"><b>Saturday:</b> 8:00 AM–3:00 AM</li>
              <li className="text-[18px] leading-[1.75]"><b>Sunday:</b> 8:00 AM–12:00 AM</li>
            </ul>
          </div>
          <div className="w-[355px] bg-[#ffffff] text-[#0F0C27] rounded-[8px] p-[16px_16px_14px] shadow-[0_14px_34px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-[8px] font-black m-[2px_0_10px]"><span className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-black/5">📞</span> Contact information</div>
            <p className="text-[18px] leading-[1.75]">If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.</p>
            <p className="text-[18px] leading-[1.75] mt-[10px]"><b>Phone:</b> +9843443-43</p>
            <p className="text-[18px] leading-[1.75]"><b>Website:</b> http://mcdonalds.uk/</p>
          </div>
          <div className="w-[355px] bg-[#7A1C1C] text-white rounded-[8px] p-[16px_16px_14px] shadow-[0_14px_34px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-[8px] font-black m-[2px_0_10px]"><span className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white/20">⏰</span> Operational Times</div>
            <ul className="m-0 pl-[18px]">
              <li className="text-[18px] leading-[1.75]"><b>Monday:</b> 8:00 AM–3:00 AM</li>
              <li className="text-[18px] leading-[1.75]"><b>Tuesday:</b> 8:00 AM–3:00 AM</li>
              <li className="text-[18px] leading-[1.75]"><b>Wednesday:</b> 8:00 AM–3:00 AM</li>
              <li className="text-[18px] leading-[1.75]"><b>Thursday:</b> 8:00 AM–3:00 AM</li>
              <li className="text-[18px] leading-[1.75]"><b>Friday:</b> 8:00 AM–3:00 AM</li>
              <li className="text-[18px] leading-[1.75]"><b>Saturday:</b> 8:00 AM–3:00 AM</li>
              <li className="text-[18px] leading-[1.75]"><b>Sunday:</b> 8:00 AM–3:00 AM</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-[200px] text-center mb-[40px]" id="events">
        <div className="max-w-[1200px] mx-auto px-[24px]">
          <h2 className="m-[0_0_10px] font-abril text-[#EADDBA] text-[34px]">Would you like our team to help organize your event?</h2>
          <p className="m-[0_auto_14px] max-w-[680px] font-elsie text-[22px] text-[#E8E0CD] leading-[1.6]">We’d be delighted to bring the same care <br /> and flavor to your special occasion.</p>
          <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="bg-[#D68240] text-white py-[10px] px-[18px] rounded-[8px] font-black cursor-pointer font-sans border-none">Event Planning</button>
        </div>
      </section>

      <section className="py-[10px] pb-[64px]">
        <div className="max-w-[1200px] mx-auto px-[24px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-[16px] mb-[18px]">
            <h3 className="m-0 font-abril text-[#EADDBA] text-[36px]">EVENTS</h3>
            <div className="flex gap-[10px] items-center w-full md:w-auto">
              <input type="text" placeholder="Write a short description about your event, venue, timings" className="flex-1 w-full md:w-[360px] max-w-full md:max-w-[52vw] px-[14px] py-[12px] rounded-[8px] border border-white/10 bg-[#0E1216] text-white outline-none" />
              <button className="px-[16px] py-[10px] bg-[#D68240] text-white font-black cursor-pointer rounded-[8px] border-none shrink-0">Submit</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] auto-rows-[240px] md:auto-rows-[280px]">
            <div className="relative rounded-[8px] overflow-hidden shadow-[0_14px_34px_rgba(0,0,0,0.25)]">
              <Image src="/Event-photo.png" alt="Event 1" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 text-white flex items-end p-[14px] font-extrabold tracking-[0.02em]">Corporate Events</div>
            </div>
            <div className="relative rounded-[8px] overflow-hidden shadow-[0_14px_34px_rgba(0,0,0,0.25)]">
              <Image src="/Event-photo (1).png" alt="Event 2" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 text-white flex items-end p-[14px] font-extrabold tracking-[0.02em]">Celebrations</div>
            </div>
            <div className="relative rounded-[8px] overflow-hidden shadow-[0_14px_34px_rgba(0,0,0,0.25)]">
              <Image src="/Event-photo (3).png" alt="Event 3" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 text-white flex items-end p-[14px] font-extrabold tracking-[0.02em]">Meetups</div>
            </div>
            <div className="relative rounded-[8px] overflow-hidden shadow-[0_14px_34px_rgba(0,0,0,0.25)]">
              <Image src="/Event-photo (2).png" alt="Event 4" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 text-white flex items-end p-[14px] font-extrabold tracking-[0.02em]">Parties</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[2000]">
          <div className="bg-white p-[20px] rounded-[10px] text-center w-[300px] text-[#0F0C27]">
            <h3 className="mb-[15px] font-bold">Payment Details</h3>
            <label className="block text-left text-[14px] font-semibold text-[#555] mb-[5px]">Account Number:</label>
            <input 
              type="text" 
              placeholder="Enter account number" 
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              className="w-full mb-[15px] p-[8px] border border-gray-300 rounded text-[#0F0C27]" 
              required 
            />
            <label className="block text-left text-[14px] font-semibold text-[#555] mb-[5px]">PIN:</label>
            <input 
              type="password" 
              placeholder="Enter PIN" 
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full mb-[20px] p-[8px] border border-gray-300 rounded text-[#0F0C27]" 
              required 
            />
            <button 
              onClick={handlePay}
              className="bg-[#C4AE45] border-none text-white px-[20px] py-[10px] rounded-[5px] cursor-pointer font-bold transition-colors hover:bg-[#a99539]"
            >
              Pay
            </button>
            <button 
              onClick={() => setShowModal(false)}
              className="mt-[10px] block w-full bg-transparent border-none text-[#9aa3aa] cursor-pointer text-[14px] underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const REVIEWS = [
  {
    id: 1,
    name: "St Gix",
    place: "South London · 24th September, 2023",
    text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual standard — hot and satisfying.",
    rating: 5,
    date: "Dined: Sep 2023",
    image: "/team1.jpg"
  },
  {
    id: 2,
    name: "A. Morgan",
    place: "Notting Hill · 12th Oct, 2023",
    text: "Music and food combined seamlessly — the playlist and the chef’s menu felt made for each other. Warm, welcoming staff.",
    rating: 5,
    date: "Dined: Oct 2023",
    image: "/team8.jpg"
  },
  {
    id: 3,
    name: "S. Lee",
    place: "Shoreditch · 18th Nov, 2023",
    text: "Cozy corners and a lively acoustic night — loved the vegetarian options and the attentive staff.",
    rating: 4,
    date: "Dined: Nov 2023",
    image: "/team7.jpg"
  }
];

export default function ReviewPage() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (trackRef.current) {
      const cardWidth = 338;
      trackRef.current.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: 'smooth' });
    }
  };

  const submitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    alert(`Thanks!\nName: ${formData.get("fullname")}\nPlace: ${formData.get("place")}\nRating: ${rating}\n\n(Integrate with backend to save reviews.)`);
    e.currentTarget.reset();
    setRating(0);
  };

  const submitQuery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    alert(`Thanks for reaching out, ${formData.get("qname")}!\nWe will contact you soon.`);
    e.currentTarget.reset();
  };

  return (
    <div className="bg-[#F7E7B3] text-[#0F0C27] font-sans min-h-screen">
      <Navbar />

      <section className="relative min-h-[540px] flex items-center justify-start overflow-hidden">
        <div className="w-full h-[420px] md:h-[600px] lg:h-[950px] relative pointer-events-none">
          <Image src="/REFLECT_REVIEW-01.svg" alt="Decorative Artwork" fill className="object-cover object-center lg:object-top" priority />
        </div>
        
        <h1 className="absolute left-[6%] lg:left-[8%] top-[14%] lg:top-[18%] max-w-[420px] lg:max-w-[540px] font-abril text-[36px] md:text-[48px] lg:text-[100px] leading-[1.2] text-[#0F0C27] m-0">
          Your <span className="text-[#C4AE45]">Voice</span><br/>makes<br/>our melody<br/>complete.
        </h1>
      </section>

      <section className="py-[56px] pb-[40px] border-b border-black/5" id="user-review">
        <div className="max-w-[1100px] mx-auto px-[24px] pt-[60px] pb-[10px] lg:py-[100px]">
          <h2 className="font-abril text-[42px] m-[0_0_8px] text-[#0F0C27]">Every bite, every note—your story matters.</h2>
          <p className="font-elsie text-[18px] text-[#0F0C27] m-[0_0_24px]">Your story matters. We listen beyond the music, to you.</p>

          <form onSubmit={submitReview} className="flex flex-col lg:flex-row gap-[12px] items-start">
            <input type="text" name="fullname" placeholder="Full Name" required className="p-[12px_14px] rounded-[6px] border border-[#0F0C27]/10 bg-white min-w-[220px] text-[14px] w-full lg:w-auto outline-none focus:ring-2 focus:ring-[#C4AE45]" />
            <input type="text" name="place" placeholder="Place" required className="p-[12px_14px] rounded-[6px] border border-[#0F0C27]/10 bg-white min-w-[220px] text-[14px] w-full lg:w-auto outline-none focus:ring-2 focus:ring-[#C4AE45]" />
            <textarea name="details" placeholder="Tell us about your experiences in AudioBites" required className="p-[14px] rounded-[6px] border border-[#0F0C27]/10 bg-white w-full min-h-[56px] resize-y outline-none focus:ring-2 focus:ring-[#C4AE45]"></textarea>

            <div className="flex flex-col gap-[8px] min-w-[200px] w-full lg:w-auto ml-0 lg:ml-auto">
              <label className="font-bold text-[14px] mb-[6px]">Rating</label>
              <div className="flex gap-[8px] text-[20px] cursor-pointer" onMouseLeave={() => setHoverRating(0)}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span 
                    key={star} 
                    className="select-none"
                    style={{ color: star <= (hoverRating || rating) ? 'gold' : 'rgba(0,0,0,0.12)' }}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button type="submit" className="bg-[#D68240] text-white border-none p-[10px_18px] rounded-[6px] cursor-pointer font-bold ml-[6px] self-start">Submit</button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-[#0F0C27] text-[#F7E7B3] py-[100px]">
        <div className="max-w-[1100px] mx-auto px-[24px] relative">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-[18px] gap-[12px]">
            <div>
              <h3 className="m-0 font-abril text-[28px] text-[#F7E7B3]">Customer Reviews</h3>
              <p className="m-0 font-elsie text-white/85">What our guests say — real stories from real visits.</p>
            </div>
            <div className="flex gap-[8px]">
              <button onClick={() => scrollCarousel("left")} className="w-[48px] h-[48px] rounded-full bg-[#F7E7B3] text-[#0F0C27] border-none cursor-pointer flex items-center justify-center font-bold text-[24px]">‹</button>
              <button onClick={() => scrollCarousel("right")} className="w-[48px] h-[48px] rounded-full bg-[#F7E7B3] text-[#0F0C27] border-none cursor-pointer flex items-center justify-center font-bold text-[24px]">›</button>
            </div>
          </div>

          <div ref={trackRef} className="flex gap-[12px] lg:gap-[18px] overflow-hidden scroll-smooth">
            {REVIEWS.map(rev => (
              <article key={rev.id} className="min-w-[280px] lg:min-w-[400px] max-w-full lg:max-w-[320px] bg-white text-[#0F0C27] rounded-[8px] p-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] flex flex-col gap-[10px] shrink-0">
                <div className="flex gap-[12px] items-center">
                  <Image src={rev.image} alt={rev.name} width={48} height={48} className="w-[48px] h-[48px] rounded-full object-cover" />
                  <div>
                    <div className="font-extrabold font-elsie">{rev.name}</div>
                    <div className="text-[12px] text-[#6d6d6d]">{rev.place}</div>
                  </div>
                </div>
                <div className="text-[14px] text-[#333] leading-[1.45] mt-[6px] flex-1">{rev.text}</div>
                <div className="flex justify-between items-center gap-[12px] mt-[10px]">
                  <div className="text-yellow-400 text-[18px]">
                    {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
                  </div>
                  <div className="text-[12px] text-[#6d6d6d]">{rev.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[100px] bg-[#F7E7B3]" id="questionaire">
        <div className="max-w-[1100px] mx-auto px-[24px]">
          <h2 className="font-abril text-[36px] mb-[12px] text-center">What's on your mind?</h2>
          <form onSubmit={submitQuery} className="grid grid-cols-1 lg:grid-cols-2 gap-[12px] items-start mt-[12px]">
            <input type="text" name="qname" placeholder="Full Name" required className="p-[12px_14px] rounded-[6px] border border-[#0F0C27]/10 bg-white text-[14px] col-span-1 lg:col-span-2 outline-none focus:ring-2 focus:ring-[#C4AE45]" />
            <input type="text" name="qplace" placeholder="Place" required className="p-[12px_14px] rounded-[6px] border border-[#0F0C27]/10 bg-white text-[14px] outline-none focus:ring-2 focus:ring-[#C4AE45]" />
            <input type="text" name="phone" placeholder="Phone No" className="p-[12px_14px] rounded-[6px] border border-[#0F0C27]/10 bg-white text-[14px] outline-none focus:ring-2 focus:ring-[#C4AE45]" />
            <input type="email" name="email" placeholder="Email" className="p-[12px_14px] rounded-[6px] border border-[#0F0C27]/10 bg-white text-[14px] outline-none focus:ring-2 focus:ring-[#C4AE45]" />
            <input type="text" name="query" placeholder="Query" required className="p-[12px_14px] rounded-[6px] border border-[#0F0C27]/10 bg-white text-[14px] col-span-1 lg:col-span-2 outline-none focus:ring-2 focus:ring-[#C4AE45]" />
            <button type="submit" className="bg-[#D68240] text-white p-[10px_18px] rounded-[6px] border-none cursor-pointer w-[140px] justify-self-end mt-[12px] font-bold">Submit</button>
          </form>
        </div>
      </section>

      <section className="py-[48px] pb-[80px] bg-[#F7E7B3] flex flex-col items-center gap-[18px]">
        <h2 className="m-0 font-abril text-[36px]">Planning an event?</h2>
        <p className="m-0 font-elsie text-[18px] text-[#6d6d6d] max-w-[780px] text-center">Let our team create the perfect blend of food and live music for your occasion. From intimate gatherings to lively celebrations — we’ll handle everything.</p>
        <button className="p-[10px_18px] rounded-[6px] bg-[#D68240] text-white border-none cursor-pointer font-sans font-bold" onClick={() => window.location.href='/payment#events'}>Yes — Plan my event</button>

        <div className="w-full max-w-[900px] mt-[20px] px-[24px]">
          <Image src="/team-01.svg" alt="Team illustration" width={900} height={400} className="w-full h-auto object-contain block mx-auto" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

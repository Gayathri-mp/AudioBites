"use client";

import Image from "next/image";
import { useState } from "react";

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  isSoldOut?: boolean;
}

interface FoodCardProps {
  item: FoodItem;
  onAdd: (id: string, added: boolean) => void;
}

export default function FoodCard({ item, onAdd }: FoodCardProps) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (item.isSoldOut) return;
    const newAddedState = !added;
    setAdded(newAddedState);
    onAdd(item.id, newAddedState);
  };

  return (
    <article className="w-full max-w-[260px] bg-white rounded-[14px] shadow-[0_10px_25px_rgba(12,12,12,0.12)] overflow-hidden relative flex flex-col">
      <div className="relative w-full h-[170px] bg-gray-100 rounded-tl-[14px] rounded-tr-[14px]">
        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 260px" />
        
        {item.badge && (
          <div className={`absolute left-[12px] top-[12px] px-[8px] py-[6px] rounded-[8px] text-[12px] text-white font-bold shadow-[0_6px_14px_rgba(0,0,0,0.16)] ${
            item.isSoldOut ? "bg-[#2b2b2b]" : "bg-[#39A84D]"
          }`}>
            {item.badge}
          </div>
        )}

        <div className="absolute right-[12px] top-[12px] w-[28px] h-[28px] rounded-full bg-white/95 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.12)] cursor-pointer">
          <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-[#e74c3c] opacity-90"><path d="M12 21s-7.5-4.9-9.1-7.2C.9 10.9 3 7 6.4 7c1.8 0 3.2.9 4 2 .8-1.1 2.2-2 4-2 3.4 0 5.5 3.9 3.5 6.8C19.5 16.1 12 21 12 21z"/></svg>
        </div>
      </div>

      <div className="px-[16px] py-[14px] pb-[18px] flex flex-col gap-[6px] flex-1">
        <div className="text-[#d6d9dc] text-[12px] tracking-[1px]">★★★★★</div>
        <div className="font-gloock text-[16px] my-[2px] mt-[6px] text-[#0F0C27]">{item.name}</div>
        <div className="text-[13px] text-[#9aa3aa] mb-[8px]">{item.description}</div>

        <div className="flex items-center justify-between gap-[8px] mt-auto">
          <div>
            <span className="font-extrabold text-[#198754] text-[15px]">${item.price.toFixed(2)}</span>
            {item.oldPrice && (
              <span className="text-[#a7a9ab] line-through text-[13px] ml-[8px] font-medium">${item.oldPrice.toFixed(2)}</span>
            )}
          </div>
          <button 
            onClick={handleAdd}
            disabled={item.isSoldOut}
            className="bg-transparent border-none p-[8px] cursor-pointer rounded-[8px] shadow-[0_6px_14px_rgba(0,0,0,0.08)] flex items-center gap-[8px] disabled:opacity-60 disabled:cursor-not-allowed group"
            title={item.isSoldOut ? "Sold out" : "Add to bag"}
          >
            <span className={`w-[34px] h-[34px] rounded-full flex items-center justify-center transition-colors ${
              added ? "bg-[#D68240]" : "bg-[#f3f3f3]"
            }`}>
              {item.isSoldOut ? "⛔" : "🛍️"}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}

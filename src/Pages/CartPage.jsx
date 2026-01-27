import CartItem from "../components/componentItemDerails/CartItem";
import { useCart } from "../store";

export default function CartPage() {
  const { items, total } = useCart();

  return (
    <div className="container mx-auto flex flex-col items-center px-4 py-10 lg:py-[40px] font-chau">
      <div className="w-full flex flex-col lg:flex-row justify-center gap-8 lg:gap-[48px]">
        <div className="w-full h-[590px] flex flex-col gap-[40px]">
          <h1 className="text-[24px] leading-[24px] tracking-normal font-semibold">Shopping Cart</h1>
          <div className="flex flex-col gap-[80px] overflow-auto">
            {items.map((el) => (
              <CartItem key={el.documentId} product={el} />
            ))}
          </div>
        </div>
        <div className="w-full lg:max-w-[536px] h-fit border border-[#EBEBEB] rounded-[10px] px-6 py-8 lg:px-[64px] lg:py-[56px] flex flex-col gap-[40px] bg-white">
          <h2 className="text-[20px] font-semibold text-black">Order Summary</h2>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-[#6B6B6B]">Discount code / Promo code</label>
            <input type="text" placeholder="Code" className="input input-bordered border-[#9F9F9F] w-full h-[56px] bg-white text-[14px] text-black placeholder:text-[#9E9E9E]" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[14px] text-[#6B6B6B]">Your bonus card number</label>

            <div className="relative w-full">
              <input type="text" placeholder="Enter Card Number" className="input input-bordered border-[#9F9F9F] w-full h-[64px] pr-[120px] text-[14px] bg-white text-black placeholder:text-[#9E9E9E]" />

              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 
                   px-6 h-9 rounded-md border border-black 
                   text-black text-sm bg-white hover:bg-gray-50 cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span className="text-black font-semibold text-[18px]">Subtotal</span>
              <span className="text-black font-semibold">${total}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#6B6B6B] font-medium">Estimated Tax</span>
              <span className="text-black font-semibold">${(14 * total) / 100}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#6B6B6B] font-medium">Estimated shipping & Handling</span>
              <span className="text-black font-semibold">$50</span>
            </div>

            <div className="flex justify-between pt-2">
              <span className="text-black font-semibold text-[18px]">Total</span>
              <span className="text-black font-semibold text-[18px]">${(114 * total) / 100 + 50}</span>
            </div>
          </div>
          <button className="w-full h-[56px] bg-black text-white rounded-lg text-base cursor-pointer hover:opacity-90 transition-opacity">Checkout</button>
        </div>
      </div>
    </div>
  );
}

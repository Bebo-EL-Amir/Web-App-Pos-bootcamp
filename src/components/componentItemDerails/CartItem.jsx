import { IoMdClose } from 'react-icons/io';
import { domain, useCart } from '../../../store';

export default function CartItem({ product }) {
  const { incrmentQty, decrmentQty, removeFromCart } = useCart();

  // Handle Image URL logic to match Strapi data structure
  const imageUrl = product?.img?.[0]?.url || product?.img?.url || product?.image?.url || product?.img?.data?.attributes?.url || product?.img?.data?.[0]?.attributes?.url || product?.coverImg?.url;
  
  const fullImageUrl = imageUrl
    ? imageUrl.startsWith('http')
      ? imageUrl
      : domain + imageUrl
    : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

  return (
    <div className="flex w-full gap-2 items-center">
      <div className="flex justify-center items-center h-[100px] w-[100px] border shadow-sm rounded-xl overflow-hidden bg-gray-50">
        <img className="w-full h-full object-cover" src={fullImageUrl} alt={product.name} />
      </div>
      <div className="flex w-[431px] h-[88px] justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="w-[200px] font-semibold text-[16px] leading-[24px] tracking-normal">{product.name}</h1>
          <h1 className="font-semibold text-[14px] leading-[24px] tracking-normal">Total : $ {product.qty * (product.discountPrice ? product.discountPrice : product.originalPrice)} </h1>
        </div>
        <div className="flex flex-col w-[110px] h-[88px] gap-[24px]">
          <div className="flex justify-center items-center gap-10">
            <h1>${product.discountPrice ? product.discountPrice : product.originalPrice}</h1>
            <IoMdClose onClick={() => removeFromCart(product.documentId)} className="cursor-pointer" />
          </div>
          <div className="flex items-center rounded-md overflow-hidden">
            <button className="px-3 py-1 hover:bg-gray-100 cursor-pointer" onClick={() => decrmentQty(product.documentId)}>
              −
            </button>

            <div className="px-4 select-none">{product.qty}</div>

            <button className="px-3 py-1 hover:bg-gray-100 cursor-pointer" onClick={() => incrmentQty(product.documentId)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

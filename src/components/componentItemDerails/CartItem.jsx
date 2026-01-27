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
      <div className="flex justify-center items-center h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] border shadow-sm rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
        <img className="w-full h-full object-cover" src={fullImageUrl} alt={product.name} />
      </div>
      <div className="flex flex-1 justify-between items-center gap-2">
        <div className="flex flex-col gap-1 min-w-0">
          <h1 className="font-semibold text-sm sm:text-base leading-tight truncate max-w-[120px] sm:max-w-[200px]">{product.name}</h1>
          <h1 className="font-semibold text-xs sm:text-sm text-gray-500">Unit: ${product.discountPrice ? product.discountPrice : product.originalPrice}</h1>
          <h1 className="font-bold text-sm sm:text-base text-gray-800">Total: ${product.qty * (product.discountPrice ? product.discountPrice : product.originalPrice)}</h1>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <IoMdClose onClick={() => removeFromCart(product.documentId)} className="cursor-pointer text-gray-400 hover:text-red-500 transition-colors text-lg" />
          </div>
          <div className="flex items-center border rounded-lg overflow-hidden bg-white shadow-sm">
            <button className="px-2 sm:px-3 py-1 hover:bg-gray-50 cursor-pointer text-gray-600 font-bold transition-colors" onClick={() => decrmentQty(product.documentId)}>
              −
            </button>
            <div className="px-2 sm:px-3 text-sm sm:text-base font-semibold select-none min-w-[30px] text-center border-x">{product.qty}</div>
            <button className="px-2 sm:px-3 py-1 hover:bg-gray-50 cursor-pointer text-gray-600 font-bold transition-colors" onClick={() => incrmentQty(product.documentId)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

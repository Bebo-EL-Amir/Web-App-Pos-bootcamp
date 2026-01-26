import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCart } from '../store';

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const { productId } = useParams();
  const STRAPI_API = 'https://intuitive-cactus-25a6544a8c.strapiapp.com';
  const STRAPI_MEDIA = 'https://intuitive-cactus-25a6544a8c.media.strapiapp.com';
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product) return;
    addToCart({
      ...product,
      originalPrice: product.price,
      documentId: product.documentId || product.id
    });
  };

  useEffect(() => {
    if (!productId) return;

    // Fetch single food item by ID and populate all fields (including images)
    const url = `${STRAPI_API}/api/foods/${productId}?populate=*`;

    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        console.log('Product Details Response:', res.data);
        const data = res?.data?.data;
        
        if (data) {
          // Flatten Strapi v4 response
          const item = data.attributes ? { id: data.id, ...data.attributes } : data;
          setProduct(item);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch Product Error:', err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white text-2xl font-bold">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-white">
        <h1 className="text-2xl font-bold text-red-500">Product not found!</h1>
        <Link to="/FoodDrinks" className="mt-4 text-blue-500 underline">Back to Menu</Link>
      </div>
    );
  }

  // Handle Image URL
  let imageUrl = product?.img?.[0]?.url || product?.img?.url || product?.image?.url || product?.img?.data?.attributes?.url || product?.img?.data?.[0]?.attributes?.url;
  if (imageUrl && typeof imageUrl === 'string') {
      imageUrl = imageUrl.trim();
      if (imageUrl.startsWith('https//')) {
          imageUrl = imageUrl.replace('https//', 'https://');
      } else if (imageUrl.startsWith('http//')) {
            imageUrl = imageUrl.replace('http//', 'http://');
      }
  }

  const fullImageUrl = imageUrl
    ? (imageUrl.startsWith('http') || imageUrl.startsWith('//'))
      ? imageUrl
      : `${STRAPI_MEDIA}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`
    : 'https://via.placeholder.com/400';

  return (
    <div className='w-full h-full overflow-auto bg-gray-50 p-6'>
      {/* Header / Back Button */}
      <div className="flex items-center gap-4 mb-8">
        <Link to={-1} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
          <IoMdArrowRoundBack className="text-[22px] text-gray-700" />
        </Link>
        <h1 className="text-3xl font-extrabold text-gray-800 ">Product Details</h1>
      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Product Image Section */}
        <div className="md:w-1/2 p-8 bg-gray-100 flex items-center justify-center">
          <img 
            className='w-full max-w-sm h-auto object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500' 
            src={fullImageUrl} 
            alt={product.name} 
          />
        </div>

        {/* Product Info Section */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <span className="text-sm font-semibold text-yellow-600 uppercase tracking-widest mb-2">Food Item</span>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>{product.name}</h2>
          
          <div className="text-3xl font-bold text-green-600 mb-6">
            $ {product.price} <span className="text-sm text-gray-500 font-normal">EGP</span>
          </div>

          <div className="border-t border-b border-gray-100 py-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description || "No description available for this delicious item. High quality ingredients and great taste guaranteed!"}
            </p>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform active:scale-95 transition-all"
            >
              Add to Invoice
            </button>
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="p-4 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all duration-300 flex items-center justify-center"
            >
              {isLiked ? (
                <FaHeart className="text-2xl text-red-500 animate-pulse" />
              ) : (
                <FaRegHeart className="text-2xl text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

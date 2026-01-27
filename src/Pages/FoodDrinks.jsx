import { useEffect, useState } from 'react';
import catImg from '../assets/burger.jpg';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function FoodDrinks() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const STRAPI_API = 'https://intuitive-cactus-25a6544a8c.strapiapp.com';
  const STRAPI_MEDIA = 'https://intuitive-cactus-25a6544a8c.media.strapiapp.com';

  useEffect(() => {
    const url = `${STRAPI_API}/api/categories?populate=*`;
    axios
      .get(url)
      .then((res) => {
        console.log('Categories Response:', res.data);
        // Support both flattened and Strapi v4 structuresL
        const raw = res?.data?.data || res?.data || [];
        const parsed = raw.map((item) => {
          // If Strapi v4: { id, attributes: { name, img } }
          if (item?.attributes) {
            const { attributes, id } = item;
            return { id, ...attributes };
          }
          // Already flattened
          return item;
        });
        setCategories(parsed || []);
      })
      .catch((err) => {
        console.log('Categories Error:', err);
      });
  }, []);

  return (
    <div className='w-full h-full overflow-auto bg-white'>
      <h1 className='text-3xl font-extrabold text-gray-800 p-4'>Foods & Drinks</h1>

<div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
{categories?.map((el, idx) => {       let imageUrl = el?.img?.[0]?.url || el?.img?.url || el?.image?.url || el?.img?.data?.[0]?.attributes?.url;
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
            : null;

          return (
            <Link to={ `${el.documentId}`} key={el.id || el.documentId || idx} className="bg-white flex flex-col items-center p-3 rounded-2xl shadow border hover:bg-yellow transition duration-500">
              {fullImageUrl ? (
                <img className='w-50 h-50' src={fullImageUrl} alt={el.name || 'category'} />
              ) : (
                <img className='w-50 h-50' src={catImg} alt='fallback' />
              )}
              <h2 className='p-2 text-2xl'>{el.name}</h2>
              
            </Link>
          );
        })}
      
</div>
    </div>
  )
}

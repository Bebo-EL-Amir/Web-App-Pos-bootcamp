import { useEffect, useState } from "react";
import catImg from "../assets/burger.jpg";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function MenuPage() {
  const STRAPI_API = 'https://intuitive-cactus-25a6544a8c.strapiapp.com';
  const STRAPI_MEDIA = 'https://intuitive-cactus-25a6544a8c.media.strapiapp.com';
  const params = useParams();
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState();

  useEffect(() => {
    let catId = params.catId;
    console.log(params);
    if (!params.catId) return;
    let url = `${STRAPI_API}/api/categories/${catId}`;

    axios
      .get(url, {
        params: {
          populate: {
            foods: {
              populate: "*",
            },
          },
        },
      })

      .then((res) => {
        setCategories(res.data.data);
        setItems(res.data.data?.foods || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.catId]);

  return (
    <div className="w-full h-full overflow-auto bg-white ">
      {/* product-card max-w-full w-72  md:w-80 hover:-translate-y-2 ease-in-out duration-1000 cursor-pointer flex flex-col */}
      <div className="flex items-center gap-4 mb-8 pl-5 pt-4">
         <Link to={`/FoodDrinks`} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
          <IoMdArrowRoundBack className="text-[22px] text-gray-700" />
        </Link>

        <h1 className=" text-3xl font-extrabold text-gray-800   pl-2">{categories?.name}</h1>
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-4 gap-4 ">
        {items?.map((el) => {
          let imageUrl = el.img?.url;
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
            <Link
              to={`/FoodDrinks/${params.catId}/${el.documentId || el.id}`}
              key={el.id}
              className="bg-white flex flex-col items-center p-3 rounded-2xl shadow border hover:bg-yellow max-w-full w-72  md:w-80 hover:-translate-y-2 ease-in-out duration-1000 cursor-pointer ">
              <img
                className="w-50 h-50"
                src={fullImageUrl}
              />
              <h2 className="p-2 text-2xl">{el.name}</h2>
            <p>Price : $ {el.price} EGP </p>
            <div className="flex pt-4 w-full ">
              <button className="btn btn-primary w-full flex justify-center items-center ">
                Add to Invoice
              </button>
            </div>
          </Link>
        );
        })}
      </div>
    </div>
  );
}

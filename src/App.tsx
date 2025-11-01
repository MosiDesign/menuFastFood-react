import React, { useState } from 'react';

const menuItems = [
  {
    id: 1,
    title: 'Buttermilk Pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './src/image/item-1.jpeg',
    desc: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
  },
  {
    id: 2,
    title: 'Diner Double',
    category: 'lunch',
    price: 13.99,
    img: './src/image/item-2.jpeg',
    desc: 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats.',
  },
  {
    id: 3,
    title: 'Godzilla Milkshake',
    category: 'shakes',
    price: 6.99,
    img: './src/image/item-3.jpeg',
    desc: 'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
  },
  {
    id: 4,
    title: 'Country Delight',
    category: 'breakfast', // در عکس آیتم چهارم صبحانه بود، این رو هم صبحانه گذاشتم
    price: 20.99,
    img: './src/image/item-4.jpeg',
    desc: 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,',
  },
  {
    id: 5,
    title: 'Egg Attack',
    category: 'lunch',
    price: 22.99,
    img: './src/image/item-5.jpeg',
    desc: 'franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90s pop-up',
  },
  {
    id: 6,
    title: 'Oreo Dream',
    category: 'shakes',
    price: 18.99,
    img: './src/image/item-6.jpeg',
    desc: 'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday',
  },
  {
    id: 7,
    title: 'Bacon Overflow',
    category: 'breakfast',
    price: 8.99,
    img: './src/image/item-7.jpeg',
    desc: 'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread everyday.',
  },
  {
    id: 8,
    title: 'American Classic',
    category: 'lunch',
    price: 12.99,
    img: './src/image/item-8.jpeg',
    desc: 'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut,',
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes', 
    price: 16.99,
    img: './src/image/item-9.jpeg',
    desc: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
  },
  {
    id: 10,
    title: 'bison steak',
    category: 'dinner', 
    price: 22.99,
    img: './src/image/item-10.jpeg',
    desc: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
  },
];

const categories = ['All', 'Breakfast', 'Lunch', 'Shakes', 'Dinner'];

const MenuSection = () => {
  
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' ? menuItems : menuItems.filter((item) => item.category === activeCategory.toLowerCase());

  const filterItems = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section className="bg-[#F1F5F8] py-20 px-8">
      <div className="max-w-6xl mx-auto">
       
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#102a42] mb-4 tracking-widest">Our Menu</h2>
          
          <div
            className="w-20 h-1 mx-auto bg-[#c59d5f]"
          ></div>
        </div>

        <div className="flex justify-center flex-wrap mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterItems(category)}
              className={`
                px-4 py-1.5 rounded-md capitalize font-medium transition-all duration-300 mx-2 my-1 cursor-pointer
                ${
                  activeCategory === category
                    ? 'bg-[#c59d5f] text-white shadow-xs shadow-black hover:outline-0 hover:border-0'
                    : 'shadow-md shadow-black bg-[#F1F5F8] text-[#C59D5F] border border-amber-400 hover:bg-[#c59d5f] hover:text-white hover:border-[#c59d5f]' // 4b. استایل دکمه غیرفعال + هاور
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="md:flex md:gap-6"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md border-4 md:w-60 md:h-40 border-[#C59D5F]"
              />

              <div className="flex-1 mt-4 md:mt-0">
              
                <header className="flex justify-between items-baseline mb-2">
                  <h4 className="font-bold capitalize text-gray-800 tracking-[4px]">
                    {item.title}
                  </h4>
                  <span
                    className="font-bold text-lg text-[#c59d5f]"
                  >
                    ${item.price.toFixed(2)}
                  </span>
                </header>

                <hr className="border-gray-500 border-dotted mb-4" />

                <p className="text-gray-600">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
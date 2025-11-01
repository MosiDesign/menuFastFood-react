import { useState } from 'react'

import './App.css'

function App() {
  const allItem = [
    {
    id: 1,
    title: "Buttermilk Pancakes",
    price: "15.99",
    description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    img: "./src/image/item-1.jpeg",
    type: "Breakfast"
  },
]

  const [items, setItems] = useState(allItem)

  return (
    <section id='root' className='flex flex-col  items-center bg-[#F1F5F8] pt-18'>
      {/* our menu */}
      <div className='flex flex-col gap-0.5 font-Roboto'>
        <div className='text-[40px] font-bold tracking-widest'>Our Menu</div>
        <div className='underline text-[#c59d5f] border-2 w-[90px] ml-15'></div>
      </div>

      <div className='flex flex-row gap-4 mt-10 font-openSans'>
        <button className='py-1 px-3 text-[#c59d5f] border-2 border-[#c59d5f] cursor-pointer capitalize box-border shadow-sm shadow-black hover:bg-[#c59d5f] hover:text-white rounded-lg transition-colors duration-300 ease-linear'
        onClick={()=>{
          setItems(allItem)
        }}>All</button>
        <button className='py-1 px-3 text-[#c59d5f] border-2 border-[#c59d5f] cursor-pointer hover:bg-[#c59d5f] hover:text-white rounded-lg transition-colors duration-300 ease-out'
        onClick={()=>{
          const filterBreakItem = allItem.filter((item)=>{
            return item.type === "Breakfast"
          });
          setItems(filterBreakItem)
        }}>Breakfast</button>
        <button className='py-1 px-3 text-[#c59d5f] border-2 border-[#c59d5f] cursor-pointer hover:bg-[#c59d5f] hover:text-white rounded-lg transition-colors duration-300 ease-out'
        >Lunch</button>
        <button className='py-1 px-3 text-[#c59d5f] border-2 border-[#c59d5f] cursor-pointer hover:bg-[#c59d5f] hover:text-white rounded-lg transition-colors duration-300 ease-out'
        >Shakes</button>
        <button className='py-1 px-3 text-[#c59d5f] border-2 border-[#c59d5f] cursor-pointer hover:bg-[#c59d5f] hover:text-white rounded-lg transition-colors duration-300 ease-out'
        >Dinner</button>
      </div>

      <ul className='grid grid-cols-2 gap-10 mt-10 mx-80'>
        {items.map((item) => (
          <li className='flex flex-row gap-6' key={item.id}>
            <div className='flex flex-row justify-center items-center'>
              <div className='w-full h-full'>
                <img className='w-[225px] h-[150px] border-4 border-[#c59d5f] rounded-lg' src={item.img} />
              </div>

              <div className='flex flex-col'>
                <div className='flex flex-row justify-between font-Roboto'>
                  <p className='text-[18px] tracking-[4px] font-bold'>{item.title}</p>
                  <span className='text-[18px] text-[#c59d5f] font-bold'>{item.price}</span>
                </div>
                <div className='border border-dotted mt-1'></div>
                <div className='pt-4 text-[#617d98]'>
                  {item.description}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default App

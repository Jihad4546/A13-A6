import React from 'react';
import { toast } from 'react-toastify';

const Products = ({card,setProductAdd,setselectedType,productAdd}) => {
  
    const handleClicked =(product)=>{
    const updateProducts = [...productAdd,product]
    setProductAdd(updateProducts)
    toast("Product Selected")
  }
    return (
        <div>
              <div className="card  bg-base-100 shadow-sm ">
                <div className="card-body">
                    <span 
                    className={`badge badge-xls
                     ${card.tag==="best seller" ?
                      "bg-[#FEF3C6] text-[#BB4D00]": card.tag=== "new" ?"bg-[#DBFCE7] text-[#0A883E]":
                      "bg-[#E1E7FF] text-[#9514FA]"}
                        ml-auto text-[16px]`}>
                        {card.tag}</span>
                    <img className='w-12 h-12 rounded-full bg-cover' src={card.image} alt="" />
                    <div className=" justify-between">
                        <h2 className="text-3xl font-bold">{card.name}</h2>
                        <p>{card.description}</p>
                    </div>
                    <div className='flex items-center'>
                           <span className="text-xl">${card.price}</span>
                           <span>/{card.period}</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{card.features[0]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{card.features[1]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{card.features[2]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{card.features[3]}</span>
                        </li>
                        
                    </ul>
                    <div className="mt-6">
                        <button
                        onClick={()=>{handleClicked(card)}}
                         className="btn bg-linear-to-bl from-[#4F39F6] to-[#9514FA] w-full text-white rounded-3xl">Buy Now</button>
                    </div>
                </div>
            </div>;
        </div>
    );
};

export default Products;
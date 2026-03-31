import React, { useState, use } from 'react';
import AvailableCard from '../AvailableCard/AvailableCard';
import SelectedCard from '../selectedCard/SelectedCard';


const Card = ({ cardDataPromise,setProductAdd,productAdd }) => {
    const cardDataUs = use(cardDataPromise)
    const [selectedType, setselectedType] = useState('avaliable');
    return (
        <div>
            <div className='container mx-auto'>
                <div className='text-center mt-28'>
                    <h2 className='text-4xl font-extrabold '>Premium Digital Tools</h2>
                    <p className='text-gray-400 pt-3'>Choose from our curated collection of premium digital products designedto<br></br> boost your productivity and creativity.</p>
                </div>
                <div className='text-center mt-2'>
                    <button
                        onClick={() => { setselectedType("avaliable") }}
                        className={`btn  ${selectedType === 'avaliable' ? "bg-linear-to-bl from-[#4F39F6] to-[#9514FA] text-white" : "text-black"} rounded-full  font-bold text-[16px]`}>Products</button>
                    <button
                        onClick={() => { setselectedType("selected")}}
                        className={`btn  ${selectedType === 'selected' ? "bg-linear-to-bl from-[#4F39F6] to-[#9514FA] text-white" : "text-black"} rounded-full  font-bold text-[16px]`}>
                            card({`${productAdd.length ===0?"":(productAdd.length)}`})</button>

                </div>
            </div>
            {
                selectedType==="avaliable"
                 ? (<AvailableCard
                 productAdd={productAdd}
                     cardDataUs={cardDataUs} 
                     setProductAdd={setProductAdd}
                     setselectedType={setselectedType}
                     ></AvailableCard>) 
                 : (<SelectedCard 
                    productAdd={productAdd}
                    setProductAdd={setProductAdd}
                 >

                 </SelectedCard>)
            }
        </div>
    );
};

export default Card;
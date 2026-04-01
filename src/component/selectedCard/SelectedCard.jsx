import { toast } from 'react-toastify';
import ImageCard from '../../assets/products/design-tool.png';
const SelectedCard = ({ productAdd,setProductAdd }) => {

    const totalPrice = productAdd.reduce((total, item) => {
    return total + item.price;
}, 0);

    const handleRemoveDiv=(cards)=>{
        const removeCard = productAdd.filter((productAdd)=>productAdd.name!==cards.name,
        );
       setProductAdd(removeCard);
        toast("Successfuly remove item")
        
    }
    return (
        <div className='shadow container mx-auto p-5'>
            <h1 className='container mx-auto p-5'>Your Card</h1>
            {
                productAdd.map((cards, ind) => {

                    return( 
                            <>
                             <div key={ind} className=''>
                            <div className='flex justify-between shadow p-5  container mx-auto'>
                                <div className='flex w-1/2'>
                                    <img src={cards.image} alt="" />
                                    <div className='ml-4'>
                                        <h2>{cards.name}</h2>
                                        <p>${cards.price}</p>
                                    </div>
                                </div>
                                <div>
                                    <button 
                                    onClick={()=>{handleRemoveDiv(cards)  }}
                                    className='btn text-red-400 font-bold text-xl'>Remove</button>
                                </div>
                            </div>
                           </div>
                           </>)
                })
                
            }
            <div className='flex justify-between py-4'>
                <h4>Total</h4>
                <p>${totalPrice}</p>
            </div>
            <button
                        onClick={() => setProductAdd([],toast("Successfuly Chack Out"))}
                        className={"btn  bg-linear-to-bl from-[#4F39F6] to-[#9514FA] text-white rounded-fulfont-bold text-[16px] w-full"}>Proceed to Checkout</button>
        </div>
        
    );
};

export default SelectedCard;
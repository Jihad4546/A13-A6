import Products from "../Products/Products";

const AvailableCard = ({cardDataUs,setProductAdd,setselectedType,productAdd}) => {
    return (
        <div className='grid grid-cols-3 gap-5  container  mx-auto'> 
      {
                cardDataUs.map(card=>{
                    return   <Products 
                    productAdd={productAdd}
                    card={card}
                     setProductAdd={setProductAdd}
                     setselectedType={setselectedType}
                     ></Products>
                })
            }
          
        </div>
    );
};

export default AvailableCard;
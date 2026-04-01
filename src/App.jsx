import { Suspense, useState } from 'react'
import './App.css'
import ActiveUsers from './component/ActiveUsers/ActiveUsers'
import Card from './component/card/Card'
import GetStaps from './component/Get3Staps/GetStaps'
import Header from './component/Header/Header'
import Navber from './component/Navber/Navber'
import PremimunDigitalTools from './component/Premium-Digital-Tools/PremimunDigitalTools'
import PricingCard from './component/PricingCard/PricingCard'
import { ToastContainer } from 'react-toastify'
import Footer from './component/footer/Footer'

const cardData = async ()=>{
  const res = await fetch('../public/data.json')
  return res.json();
}

function App() {
  const cardDataPromise = cardData()
  const [productAdd,setProductAdd] = useState([]);
  return (
    <div className='overflow-hidden'>
    <Navber productAdd={productAdd}></Navber>
    <Header></Header>
    <ActiveUsers></ActiveUsers>
    <PremimunDigitalTools></PremimunDigitalTools>
     <Suspense fallback='datalodaing'>
        <Card 
        productAdd={productAdd}
        setProductAdd={setProductAdd}
        cardDataPromise={cardDataPromise}></Card>
    </Suspense>
    <GetStaps></GetStaps>
    <PricingCard></PricingCard>
    <Footer></Footer>
   <ToastContainer/>
    </div>
  )
}

export default App

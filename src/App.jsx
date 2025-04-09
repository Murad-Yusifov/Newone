import React, {useState} from 'react'
import Header from './companents/header/Header'
import Footer from './companents/footer/Footer'
import Cart from './companents/carts/Cart'
import axios from 'axios'


const App = () => {
  const [data, setData] = useState([])
  const getData = ()=> {
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
      setData(res.data)
    })
    axios
  }
  return (
    <div>
      <Header/>
      <button onClick={()=>getData()}>Get Data</button>
      <div>
      {data && data.map((item)=><Cart item={item} />)}
      </div>
      <Footer/>
    </div>
  )
}

export default App
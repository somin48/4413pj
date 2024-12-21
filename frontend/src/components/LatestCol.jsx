import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCol = () => {

    const { products } = useContext(ShopContext);
    //console.log(products);
    const [latestP,setLatestP] = useState([]); //initailly empty

    useEffect(()=>{
        setLatestP(products.slice(0,10)); //showing 10 latest products
    }, [products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={' COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        This is a dummy text.. We are fake
        </p>
      </div>

      {/*Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestP.map((item, index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
      </div>



    </div>
  )
}

export default LatestCol

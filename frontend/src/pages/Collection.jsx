import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevence');

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) { //category is available
      setCategory(prev => prev.filter(item => item != e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value]) //new category added
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) { //category is available
      setSubCategory(prev => prev.filter(item => item != e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value]) //new category added
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      //compare item name and search query 
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }


    if (category.length > 0) { //category selected
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) { //category selected
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilteredProducts(productsCopy);

    // Reapply sorting if a sort type other than 'relevance' is selected
    if (sortType !== 'relevence') {
      const sortedCopy = [...productsCopy]; // Create a copy for sorting
      switch (sortType) {
        case 'Price-low-high':
          sortedCopy.sort((a, b) => a.price - b.price);
          break;
        case 'Price-high-low':
          sortedCopy.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }
      setFilteredProducts(sortedCopy);
    }

  }

  const sortProduct = () => {

    let filteredCopy = filteredProducts.slice();
    switch (sortType) {
      case 'Price-low-high':
        setFilteredProducts(filteredCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'Price-high-low':
        setFilteredProducts(filteredCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }


  useEffect(() => {
    setFilteredProducts(products)
  }, [])


  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProduct();
  }, [sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          Filter
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Category */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`} >
          <p className='mb-3 text-sm font-medium'>
            CATEGORIES
          </p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Cats'} onChange={toggleCategory} /> Cats
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Dogs'} onChange={toggleCategory} /> Dogs
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Others'} onChange={toggleCategory} /> Others
            </p>
          </div>
        </div>

        {/*SubCategory */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`} >
          <p className='mb-3 text-sm font-medium'>
            Types
          </p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Food'} onChange={toggleSubCategory} /> Food
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Toy'} onChange={toggleSubCategory} /> Toy
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Clothes'} onChange={toggleSubCategory} /> Clothes
            </p>
          </div>
        </div>

      </div>


      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={' COLLECTIONS'} />

          {/* Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevence"> Sort by: Relevence </option>
            <option value="Price-low-high"> Sort by: Price Low to High</option>
            <option value="Price-high-low"> Sort by: Price High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

          {
            filteredProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }



        </div>

      </div>


    </div>
  )
}

export default Collection

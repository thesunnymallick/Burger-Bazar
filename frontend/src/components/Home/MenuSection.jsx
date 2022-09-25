import React from 'react'
 import Item from './Item'
 import product1 from '../../assets/product-1.png'
 import product2 from '../../assets/product-2.png'
 import product3 from '../../assets/product-3.png'
 import product4 from '../../assets/product-4.png'
 import product5 from '../../assets/product-5.png'

 
function MenuSection() {

  const addToCart=(itemno)=>{
    console.log("add to cart",itemno)
  }
  return (
   
    <>
      <div className="container menuSection" id='Menu'>
        <h1 className='MenuHeading'>Menu</h1>
        <div className="menu">
        <Item
        itemNo={1}
         burgerItem={product1}
          title="Stuffed Bean Burger"
          price={200}
          handeler={addToCart}
          delay={0.2}
        />
         <Item
        itemNo={2}
         burgerItem={product2}
          title="Lamb Burger with Radish Slaw"
          price={500}
          handeler={addToCart}
          delay={0.4}
        />
         <Item
        itemNo={3}
         burgerItem={product3}
          title="Potato Corn Burger."
          price={400}
          handeler={addToCart}
          delay={0.6}
        />
        <Item
        itemNo={4}
         burgerItem={product4} 
          title="Supreme Veggie Burger."
          price={800}
          handeler={addToCart}
          delay={0.8}
        />
       
        <Item
        itemNo={5}
         burgerItem={product5}
          title="Butter Chicken Twin Burgers."
          price={200}
          handeler={addToCart}
          delay={0.8}
        />
        </div>
      </div>
    </>
  )
}

export default MenuSection
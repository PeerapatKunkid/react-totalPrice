import React, { useState } from 'react';

import './App.css';

function App() {
  const product =  [
    { day: "day1", product: "product1", amount: 100, discount: 20 , payment: "cash" },
    { day: "day2", product: "product2", amount: 100, discount: 40 , payment: "cash" },
    { day: "day3", product: "product3", amount: 100, discount: 100 ,payment: "cash" },
    { day: "day4", product: "product4", amount: 100, discount: 60 ,payment: "cash" },
    { day: "day5", product: "product5", amount: 100, discount: 40 ,payment: "cash" }
  ]

  // พื้นฐานงานรวม
  // const numbers = [10, 20, 30, 40]
  // const result = numbers.reduce((sum,number) => {
  //  return sum+number
  // }, 0)
  // console.log(result)

  // รวมแบบเป็นฟังชั่น แล้วหา type 
  // function sumItems (){
  //   return product.map(item => item.amount).reduce((a, b) => a + b)
  // } 
  // const amount = sumItems(product.filter(({ type }) => type === "cash"))
  
  const totalAmount = product.map(item => item.amount).reduce((a, b) => a + b)
  const totalDiscount = product.map(item => item.discount).reduce((a, b) => a + b)
  const totalPrice = totalAmount - totalDiscount

  console.log("ราคารวม" + totalAmount)
  console.log("ส่วนลด" + totalDiscount)
  console.log("ราคาที่ต้องจ่าย " + totalPrice)
  
  return (
    <div className="App">
      <div>{product.map((item)=>{
        return(
          <div>
            <table key={item.index}>
              <thead >
                <th>Day</th>
                <th>Product</th>
                <th>Amount</th>
              </thead>
              <tbody >

           
                <td>{item.day}</td>
                <td>{item.product}</td>
                <td>{item.amount}</td>


              </tbody>
            
            </table>
            

            

          </div>
          
        )
      })}
            <div>ราคา : {totalAmount}</div>
            <div>ส่วนลด :  {totalDiscount}</div>
            <div>ราคาที่ต้องจ่าย :  {totalPrice}</div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import "./Component.css";

function Component() {

  const arr = [10,9,8,7,6,5,4,3,2,1];
  const ChildArray = [1,2,3,4,5,6,7,8,9,10];

  // for (let i = 1; i <= 10; i++) {
  //   const ChildArray = [];
  //   const number = 1
  //   for (let d = number; d <= number+9; d++) {
  //     ChildArray.push(d) 
  //   }
  //   arr.push(ChildArray)
  // }
  // console.log(arr)

  
  return (
    <div className='Main-block'>
      <div className='mainBlock_wrap'>
      {
        arr.map((item, index) => {
          let inc = 0;
          if(item % 2 === 0){
            inc = -(item*10)-1;
          }else{
            inc = (item - 1)*10;
          }

          return (
            <div className='row'>
              {
                ChildArray.map((blockItem,index) => (
                  <div className={(blockItem + inc)%2 === 0 ? 'blocks' : 'blocks white'} >
                    {Math.abs(blockItem + inc)}
                  </div>
                ))
              }
            </div>
          );
        })
      }

      </div>

    </div>
  )
}

export default Component
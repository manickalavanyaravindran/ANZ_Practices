import React from 'react'

class Transpose extends React.Component{

  state={
    arr:[[1,2,3,4],[10,20,30,40]]
  }

  transposeArray =arr =>{
    let newMat = [];
        for (let j = 0; j < arr[0].length; j++) { 
            let temp = [];
            for (let i = 0; i < arr.length; i++) { 
                temp.push(arr[i][j]);  
            }
            newMat.push(temp);
        }
        return(newMat)

  }
  
render (){
  var  transArray=this.transposeArray(this.state.arr)
  return(
  <div>
    <h2>Transpose:{transArray} </h2>
    <ul >
      {transArray.map((value,key)=>{
        return <li>{value}</li>
      })}
    </ul> 
  </div>
  )
}

}

export default Transpose;
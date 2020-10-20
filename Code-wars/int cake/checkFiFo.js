const takeOutOrders= [17, 8, 24];
 const dineInOrders= [12, 19, 2];
  const servedOrders= [17, 8, 12, 2, 19, 24];

  const checkOrders = ((out, dineIn, served) => {
    for(let i = 0; i<served.length;i++){
      if(served[i] === out[0]){
        console.log(out.shift());
       
      }else if(served[i]===dineIn[0]){
        console.log(dineIn.shift());
      }else{
        return false;
      }
      
    }
    return true;
  })

  console.log(checkOrders(takeOutOrders, dineInOrders, servedOrders));
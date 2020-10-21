const takeOutOrders= [17, 8, 24];
 const dineInOrders= [12, 19, 2];
  const servedOrders= [17, 8, 12, 2, 19, 24];

//   const checkOrders = ((out, dineIn, served) => {
//     for(let i = 0; i<served.length;i++){
//       if(served[i] === out[0]){
//         console.log(out.shift());
       
//       }else if(served[i]===dineIn[0]){
//         console.log(dineIn.shift());
//       }else{
//         return false;
//       }
      
//     }
//     return true;
//   })

// best solution - O(n) time complexity and O(1) space complexity 

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  var takeOutOrdersIndex = 0;
  var dineInOrdersIndex = 0;
  var takeOutOrdersMaxIndex = takeOutOrders.length - 1;
  var dineInOrdersMaxIndex = dineInOrders.length - 1;

  for (var i = 0; i < servedOrders.length; i++) {
      var order = servedOrders[i];

      // if we still have orders in takeOutOrders
      // and the current order in takeOutOrders is the same
      // as the current order in servedOrders
      if (takeOutOrdersIndex <= takeOutOrdersMaxIndex &&
              order === takeOutOrders[takeOutOrdersIndex]) {
          takeOutOrdersIndex++;

      // if we still have orders in dineInOrders
      // and the current order in dineInOrders is the same
      // as the current order in servedOrders
      } else if (dineInOrdersIndex <= dineInOrdersMaxIndex &&
              order === dineInOrders[dineInOrdersIndex]) {
          dineInOrdersIndex++;

      // if the current order in servedOrders doesn't match the current
      // order in takeOutOrders or dineInOrders, then we're not serving first-come,
      // first-served
      } else {
          return false;
      }
  }

  // check for any extra orders at the end of takeOutOrders or dineInOrders
  if (dineInOrdersIndex != dineInOrders.length ||
         takeOutOrdersIndex != takeOutOrders.length) {
      return false;
  }

  // all orders in servedOrders have been "accounted for"
  // so we're serving first-come, first-served!
  return true;
}

  console.log(checkOrders(takeOutOrders, dineInOrders, servedOrders));
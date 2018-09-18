const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];
function zipList(list1, list2) {
  const retList = [];
  for (let i = 0; i < list1.length; i++) {
    retList.push(list1[i]);
    retList.push(list2[i]);
  }
  return retList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(testList1, testList2));
console.log(zipListTheSimpleWay(testList1, testList2));

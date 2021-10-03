function slicePie(pieArray, flavor1, flavor2){
    const index1 = pieArray.indexOf(flavor1);
    const index2 = pieArray.indexOf(flavor2);
    return pieArray.slice(index1, index2 + 1);
}

console.log(slicePie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));

console.log(slicePie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));
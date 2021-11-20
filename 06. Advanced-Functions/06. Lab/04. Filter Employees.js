function solve(data, criteria){
    let employees = JSON.parse(data);
    let criteriaField = criteria.split('-')[0];
    let criteriaValue = criteria.split('-')[1];

    employees = employees.filter(x => x[criteriaField] == criteriaValue);
    for(let i = 0; i < employees.length; i++){
        console.log(`${i}. ${employees[i]['first_name']} ${employees[i]['last_name']} - ${employees[i]['email']}`);
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female');

//0. Ardine Bassam - abassam0@cnn.com
//1. Kizzee Jost - kjost1@forbes.com
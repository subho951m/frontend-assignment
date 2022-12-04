import { faker } from '@faker-js/faker';

const DataGenerator = () => {
    const Datas = [];
    const randomPlace = ["New York, USA", "Chicago, USA", "Seattle, USA"];
    const randomDate = [
      {from:'2022-11-01T00:00:00.000Z' , to:'2022-12-01T00:00:00.000Z'},
      {from:'2022-12-01T00:00:00.000Z' , to:'2023-01-01T00:00:00.000Z'},
      {from:'2023-01-01T00:00:00.000Z' , to:'2023-02-01T00:00:00.000Z'}
    ];
    const randomPrice = [{from:0 , to:500}, {from:500 , to:2500}, {from:2500 , to:5000}];
    const randomPropertyType = ["House", "Villa", "Plot"];
  
    let unique_id = 0;
    for(let i = 0; i<randomPlace.length; i++){
      for(let j = 0; j<randomDate.length; j++){
        for(let k = 0; k<randomPrice.length; k++){
          for(let l = 0; l<randomPropertyType.length; l++){
            ++unique_id;
            const obj = {
              id: unique_id,
              name: faker.address.street(),
              place: randomPlace[i],
              availableDate: faker.date.between(randomDate[j].from, randomDate[j].to),
              price: faker.finance.amount(randomPrice[k].from, randomPrice[k].to, 0, '$'),
              property: randomPropertyType[l]
            }
            Datas.push(obj);
          }
        }
      }
    }
  
  
    //Code for shuffling the Datas Array
    for (var i = Datas.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));         
        var temp = Datas[i];
        Datas[i] = Datas[j];
        Datas[j] = temp;
    }
  
    return Datas;
}

export default DataGenerator;
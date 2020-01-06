const sampleTransactions = [
  {
    id: 3,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:34:30.000Z'
  },
  {
    id: 1,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 101,
    category: 'eating_out',
    time: '2018-03-02T10:33:00.000Z'
  },
  {
    id: 6,
    sourceAccount: 'A',
    targetAccount: 'C',
    amount: 250,
    category: 'other',
    time: '2018-03-02T10:33:05.000Z'
  },
  {
    id: 4,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:36:00.000Z'
  },
  {
    id: 2,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:33:50.000Z'
  },
  {
    id: 5,
    sourceAccount: 'A',
    targetAccount: 'C',
    amount: 250,
    category: 'other',
    time: '2018-03-02T10:33:00.000Z'
  }
];

const groupBy = (keys, group) =>
  group.reduce((objectsByKeyValue, obj) => {
    const value = keys.map(key => obj[key]);
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const findDuplicateTransactions = transactions => {
  const groupDuplicateObjects = groupBy(['sourceAccount', 'targetAccount', 'category', 'amount'], transactions);
  const duplicatedGroups = [];
  for (const key in groupDuplicateObjects) {
    if (groupDuplicateObjects.hasOwnProperty(key)) {
      duplicatedGroups.push(groupDuplicateObjects[key]);
    }
  }
  console.log(duplicatedGroups);

}

findDuplicateTransactions(sampleTransactions);




























// const findDuplicateTransactions = transactions => {
//   return transactions.reduce((result, current, i) => {
//     if (result) {
//       if (
//         result['sourceAccount'] === current.sourceAccount &&
//         result['targetAccount'] === current.targetAccount &&
//         result['category'] === current.category &&
//         result['amount'] === current.amount
//       ) {
//         result.push({ current });
//       }
//     }
//     return result;
//   }, {});
// };

// const filterByParams = (objects, params) => {
//   objects.map(obj => {

//   });
// }

const initialState = {
    displayModalExp: false,
    displayModal: false,
    displayModalDelUser: false,
    switchResultPage: false,
    formInput: {
        inputModal: "d",
        inputModalExp: "",
        inputModalExpNum: 0,
        currentUserExpID: 0,
        currentUserExpName: ""
    },
    users: [
        {
            id: 1,
            name: "Flagada",
            expenses: [
                {
                    id: 474,
                    label: "pain",
                    amount: 200
                },
                {
                    id: 45478,
                    label: "couche",
                    amount: 200
                }
            ]
        },
        {
            id: 2,
            name: "Gontran",
            expenses: [
                {
                    id: 47758,
                    label: "pain",
                    amount: 100
                },
                {
                    id: 433278,
                    label: "couche",
                    amount: 100
                }
            ]
        },
        {
            id: 3,
            name: "Popop",
          expenses: [
              {
                  id: 4718,
                  label: "pain",
                  amount: 150
                },
                {
                    id: 47578,
                    label: "couche",
                    amount: 150
                }
            ]
        },
        {
          id: 4,
          name: "Picsou",
          expenses: [
              {
                  id: 47338,
                  label: "pain",
                  amount: 300
                },
                {
                    id: 44878,
                    label: "couche",
                    amount: 300
                }
            ]
        },
        {
            id: 5,
            name: "Gripsou",
            expenses: [
                {
                    id: 47968,
                    label: "pain",
                    amount: 50
                },
                {
                    id: 4378,
                    label: "couche",
                    amount: 50
                }
            ]
        },
        {
            id: 6,
            name: "Gripsou",
            expenses: [
                
            ]
        }
    ],
};



//                               0     1     2      3     4 
const arrayWithFloatProblem = [854771.54/3, 854771.54/3, 15.50, 854771.54/3, 4.50];

const roundArrayCorrectly = (array) => {

    Array.prototype.sum = function (prop) {
        let total = 0
        for ( let i = 0, _len = this.length; i < _len; i++ ) {
            total += this[i][prop]
        }
        return total
    }

    const arrayWithFloatProblemWithIndex = arrayWithFloatProblem.map((o, i) => ({index:i, value:o}));

    // We separate "good float numbers" (15.50) and "bad float numbes" (26.66666666...)
    let badFloatNumbersArray = arrayWithFloatProblemWithIndex.filter(o => (o.value*100)%1)
    let goodFloatNumbersArray = arrayWithFloatProblemWithIndex.filter(o => !((o.value*100)%1))

    // We separate bad float in two arrays
    let badFloatNumbersHalfFloorArray = [];
    let badFloatNumbersRestArray = [];

    for (let index = 0; index < parseInt((badFloatNumbersArray.length/2)); index++) {
        badFloatNumbersHalfFloorArray.push(badFloatNumbersArray[index])
    }
    for (let index = parseInt((badFloatNumbersArray.length/2)); index < badFloatNumbersArray.length; index++) {
        badFloatNumbersRestArray.push(badFloatNumbersArray[index])
    }

    const roudFloorArray = (array) => array.map(element => ({ ...element, value: (Math.floor(element.value*100)/100)}))
    const roundCeilArray = (array) => array.map(element => ({ ...element, value: (Math.ceil(element.value*100)/100)}))


    let addition = 0
    goodFloatNumbersArray.forEach(element => addition += element.value);
    roudFloorArray(badFloatNumbersHalfFloorArray).forEach(element => addition += element.value);
    roundCeilArray(badFloatNumbersRestArray).forEach(element => addition += element.value);

    if (addition === arrayWithFloatProblemWithIndex.sum('value')) {
        return [
            ...goodFloatNumbersArray, 
            ...roudFloorArray(badFloatNumbersHalfFloorArray), 
            ...roundCeilArray(badFloatNumbersRestArray)
        ]
            .sort((a, b) => a.index - b.index)
            .map(o => (o.value));
    } 

    addition = 0
    goodFloatNumbersArray.forEach(element => addition += element.value);
    roudFloorArray(badFloatNumbersRestArray).forEach(element => addition += element.value);
    roundCeilArray(badFloatNumbersHalfFloorArray).forEach(element => addition += element.value);

    if (addition === arrayWithFloatProblemWithIndex.sum('value')) {
        return [
            ...goodFloatNumbersArray, 
            ...roudFloorArray(badFloatNumbersRestArray), 
            ...roundCeilArray(badFloatNumbersHalfFloorArray)
        ]
            .sort((a, b) => a.index - b.index)
            .map(o => (o.value));
    } else {
        return ['error']
    }

}

console.log(roundArrayCorrectly(arrayWithFloatProblem));
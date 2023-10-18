"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const softwars = [{
        id: 1,
        name: 'Software 1',
        price: 100,
        detail: 'cosas de software',
        requirements: [
            {
                id: 1,
                description: 'requerimiento 1',
                cost: 100,
                effort: 20,
                softwareId: 1
            },
            {
                id: 2,
                description: 'requerimiento 2',
                cost: 500,
                effort: 30,
                softwareId: 2
            }
        ],
    },
    {
        id: 2,
        name: 'Software 2',
        price: 500,
        detail: 'cosas de software 2',
        requirements: [
            {
                id: 3,
                description: 'requerimiento 1',
                cost: 100,
                effort: 20,
                softwareId: 1
            },
            {
                id: 2,
                description: 'requerimiento 2',
                cost: 500,
                effort: 30,
                softwareId: 2
            }
        ],
    }
];
const findsoftwareprice = (price) => {
    const software = softwars.find(software => price >= software.price);
    if (software) {
        return software;
    }
    else {
        throw new Error('no se ha encontrado el paquete de este software');
    }
};
console.log(findsoftwareprice(100) + "a");

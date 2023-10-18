

import {ISoftware, IRequirement} from './Interfaces';

const softwars: ISoftware[] = [ { 
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
    ,
    {
        id: 3,
        name: 'Software 3',
        price: 1000,
        detail: 'cosas de software 3',
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
]




function findsoftwareprice(price: number) {
  const softwarsa = softwars.filter(software => price >= software.price);	
  if(softwarsa){
   return softwarsa;
  }else{
    throw new Error('no se ha encontrado el paquete de este software');
  }
}



console.log(findsoftwareprice(20)+ "");

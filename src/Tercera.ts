import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const CreateEntitiesDatabase = async () => {

const softwareCreated = await prisma.software.create({
    data: {
        name: "software uno",
        price: 1000,
        detail: "software a mitad de precio una ganga",
    }
    
})
const requirementCreated = await prisma.requirement.create({
    data: {
        descripcion: "Requerimiento unno",
        cost: 100,
        effort: 1,
        softwareId: 1
    }
})
}


(async () => {
    await CreateEntitiesDatabase(); 

  })();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const updateRequerement = async () => {
    const updatedRequerement = await prisma.requirement.update({
      where: {
        id: 1,
      },
      data: {
        effort: 100, 
      },
    });
    console.log(updatedRequerement);
  };


(async () => {
    await updateRequerement(); 
  })();
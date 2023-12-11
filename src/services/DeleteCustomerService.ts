import prismaClient from "../prisma";

interface DeLeteCustomerProps{
    id:String;
}
class DeleteCustomerService{
    async execute({ id }:DeLeteCustomerProps){

        if(!id){
            throw new Error("solicitação invalida.")
        }
        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })

        if(!findCustomer){
            throw new Error("Client não existe!")
        }
        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })
        return{ message: "Deletado com sucesso!"}
    }
}
export {DeleteCustomerService}
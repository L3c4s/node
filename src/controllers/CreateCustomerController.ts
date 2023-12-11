import{ FastifyRequest, FastifyReply } from 'fastify'
import{ CraeteCustomerService } from '../services/CraeteCustomerService'

class CreateCustumerController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const{ name, email} = request.body as {name: string, email: string};
        
        const customerService = new CraeteCustomerService()
        const customer = await customerService.execute({name, email });

        reply.send(customer)
    }
}

export {CreateCustumerController}
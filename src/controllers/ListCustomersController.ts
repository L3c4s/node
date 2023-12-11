import fastify, {FastifyRequest, FastifyReply} from 'fastify'
import { ListCustomerService } from '../services/ListCustomersServices'

class ListCustomersController{
    async handle(request: FastifyRequest, reply:FastifyReply){
        const listCustomerService = new ListCustomerService();

        const customers = await listCustomerService.execute();
  
        reply.send(customers);
    }
}
export{ ListCustomersController }
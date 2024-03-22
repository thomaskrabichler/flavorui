import { Paddle } from '@paddle/paddle-node-sdk'
import { GetProducts } from '../paddle.types'

class PaddleService {
    public async getProducts(
        paddle: Paddle,
    ): Promise<GetProducts> {
        return paddle.products.list()
    }
}
export const paddleService = new PaddleService()
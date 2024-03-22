import { Environment, Paddle } from '@paddle/paddle-node-sdk'
import { env } from '~/env'

//TODO get env from .env
export const paddle = new Paddle(env.PADDLE_API_KEY, { environment: Environment.sandbox })

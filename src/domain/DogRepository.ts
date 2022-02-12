import { Dog } from './Dog'

export const DogRepository = Symbol('DogRepository')

export type DogRepository = {
	getDogs(): Dog[]
}

import { injectable } from 'inversify'
import { Dog, DogRepository } from '../domain'

@injectable()
export class InMemoryDogRepository implements DogRepository {
	getDogs(): Dog[] {
		return [
			{ birthYear: 2020, name: 'Fido', breed: 'Chihuahua' },
			{ birthYear: 2018, name: 'Rover', breed: 'Lab' },
		]
	}
}

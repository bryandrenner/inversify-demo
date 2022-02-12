import { inject, injectable } from 'inversify'
import { DogRepository } from '../domain'

@injectable()
export class App {
	@inject(DogRepository)
	private dogRepository!: DogRepository

	start() {
		const dogs = this.dogRepository.getDogs()
		console.log(JSON.stringify(dogs, null, 2))
	}
}

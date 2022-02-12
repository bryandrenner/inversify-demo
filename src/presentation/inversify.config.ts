import { Container } from 'inversify'
import { App } from './App'
import { InMemoryDogRepository } from '../persistence'
import { DogRepository } from '../domain'

export const container = new Container()
container.bind(App).toSelf()
container.bind<DogRepository>(DogRepository).to(InMemoryDogRepository)

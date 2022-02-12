import 'reflect-metadata'
import { App } from './App'
import { container } from './inversify.config'

container.get(App).start()

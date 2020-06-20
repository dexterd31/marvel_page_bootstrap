import API from './API.js'
import UI from './UI.js'

const respuesta = new API('c3693582e62211964fc483aee1752bbb')
const interfaces = new UI()

interfaces.buildEvents(respuesta)


    
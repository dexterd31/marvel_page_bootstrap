class API {
    constructor(apiKey){
        this.apiKey = apiKey
    }

    async getEvent(){
        const URL = `https://gateway.marvel.com/v1/public/events?limit=5&ts=1&apikey=${this.apiKey}&hash=0961dc30741104c77f5ee76139c393ef`;

        const request= await fetch(URL)
        const response = request.json()
        return response
        
    }
}
 export default API;
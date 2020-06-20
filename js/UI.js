class UI {

    buildEvents(event){
        event.getEvent()
            .then(data => {
                data.data.results.forEach(element => {
                // Template
                const data= document.querySelector('#info__description')
                const elements= document.createElement('div')   
                elements.innerHTML= `
                <h1 class="text-center">${element.title}</h1>
                <p class="text-white">${element.description}</p>
                <a href="${element.urls[0].url}" class="text-white" >GO TO EVENT</a href="">
                `
                data.appendChild(elements)
            })
        })
    }
    
}
export default UI;
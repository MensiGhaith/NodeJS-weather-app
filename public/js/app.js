console.log('CONSOLE CLIENT SIDE')

const weatherform=document.querySelector('form')
const search =document.querySelector('input')
const firstmessage=document.querySelector('#message1')
const secondmessage=document.querySelector('#message2')
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location= search.value
    fetch("http://localhost:5000/weather?adresse="+location).then((response)=>{
        
    response.json().then((data={})=>{
        if (data.error){firstmessage.textContent=data.error
}
        else{
            firstmessage.textContent=data.place
            secondmessage.textContent='its ' + data.summary + ', the temperature is ' + data.temparature + ' (us) and there % ' +  data.proba  + ' of rain '

        }
    })
})
})

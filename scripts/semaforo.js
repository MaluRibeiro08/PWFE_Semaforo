"use strict"
//VARIAVEIS
const trafficLight = document.getElementById("traffic-light")

let idAuto

//FUNCOES

const setTrafficLightOff = () => trafficLight.src = "./img/desligado.png"
const setTrafficLightYellow = () => trafficLight.src = "./img/amarelo.png"

const setTrafficLightRed = (evento) => 
{
    if(evento)
    {
        StopTrafficLightAuto()
    }
    trafficLight.src = "./img/vermelho.png"
}
const setTrafficLightGreen = () => trafficLight.src = "./img/verde.png"

const verifyTrafficLightState = () =>
{
    let trafficLightState = ""
    if(trafficLight.src.includes("desligado"))
    {
        trafficLightState = "desligado"
    }
    else if (trafficLight.src.includes("amarelo"))
    {
        trafficLightState = "yellow"
    }
    else if (trafficLight.src.includes("vermelho"))
    {
        trafficLightState = "red"
    }
    else
    {
        trafficLightState = "green"
    }
    return trafficLightState

}

const changeTrafficLightState = () =>
{
    const trafficLightState = verifyTrafficLightState()
    if(trafficLightState == "desligado")
    {
        setTrafficLightRed()
    }
    else if (trafficLightState == "red")
    {
        setTrafficLightYellow()
    }
    else if (trafficLightState == "yellow")
    {
        setTrafficLightGreen()
    }
    else if (trafficLightState == "green")
    {
        setTrafficLightRed()
    }
}

const setTrafficLightAuto = () => 
{
    const buttonSetTrafficLightAuto = document.getElementById("variar-estados-automaticamente")
    if (buttonSetTrafficLightAuto.textContent == "Automático")
    {
        idAuto = setInterval(changeTrafficLightState,500)
        buttonSetTrafficLightAuto.textContent = "Parar"
    }
    else
    {
        buttonSetTrafficLightAuto.textContent = "Automático"
        StopTrafficLightAuto()
        setTrafficLightOff ()
    }
}

const StopTrafficLightAuto = () => clearInterval(idAuto)


//EVENTOS
document.getElementById("amarelo").addEventListener("click", setTrafficLightYellow)
document.getElementById("vermelho").addEventListener("click", setTrafficLightRed)
document.getElementById("verde").addEventListener("click", setTrafficLightGreen)
document.getElementById("variar-estados-automaticamente").addEventListener("click", setTrafficLightAuto)

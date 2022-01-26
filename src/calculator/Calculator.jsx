import React, { useEffect, useState } from 'react';
import './Calculator.css'

const Calculator = () => {

const [myRead, setMyRead] = useState()
const [currentRead, setCurrentRead] = useState()
const [result, setResult] = useState()

const minhaLeitura = (e)=> {
    setMyRead(e.target.value)
}

const leituraAtual = (e)=> {
    setCurrentRead(e.target.value)
}

useEffect(()=>{
    setResult(myRead - currentRead)
})

    return ( 

        <section className='calculatorContainer'>
            <h1>Calculadora de Consumo de Energia</h1>
            <p>Vamos começar, primeiro preencha o primeiro campo com a leitura obtida por você no medidor de energia e a data desta leitura:</p>
            <div className="leituras">
                <div className="infoDate">
                    <label htmlFor="myRead">Minha leitura: </label>
                    <input type="number" name='myRead' placeholder='00000' value={myRead} onChange={(e) => minhaLeitura(e)}/>
                </div>
                <div className="infoDate">
                    <label htmlFor="dtMyRead">Data da minha leitura:</label> <input type="date" name='dtMyRead' />
                </div>
            </div>
            <p>Agora preencha os campos a seguir com a leitura atual e a data que foi feita esta leitura:</p>
            <div className="leituras currentRead">
                <div className="infoDate">
                    <label htmlFor="currentRead">Leitura Atual:</label> 
                    <input type="number" name='currentRead' placeholder='00.000' value={currentRead} onChange={(e) => leituraAtual(e)} />
                </div>
                <div className="infoDate">
                    <label htmlFor="dtcurrentRead">Data da leitura da conta:</label> 
                    <input type="date" name='dtcurrentRead' />
                </div>
            </div>
            {/* <div className="calcular">
                <button type="button" onClick={() => setResult (myRead - currentRead)}>Calcular</button>
            </div> */}
            <div>
                <p>Minha leitura: {myRead}</p>
                <p>Leitura atual: {currentRead}</p>
                <p>Resultado: {result} kWh</p>
            </div>
        </section>
     );
}
 
export default Calculator;
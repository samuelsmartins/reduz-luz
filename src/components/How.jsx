import React from 'react';

import './How.css'

import Ciclo from '../images/ciclometrico.JPG'
import Digital from '../images/digitalMedidor.JPG'
import Medicao from '../images/dadosMedicao.JPG'

const How = () => {
    return ( 
        <section className="howContainer">
            <article>
                <h4>Mas como posso acompanhar o meu consumo?</h4>
                  <p>Basicamente a leitura do relógio é bem simples, tanto em medidores digitais como em ciclométricos, precisamos apenas ler os números do medidor e subtrair pela última leitura, a diferença é o seu consumo atual.</p>
                  <picture>
                    <img className='image' src= {Ciclo} alt="Medidor Ciclométrico" />
                    <img className='image' src={Digital} alt="Medidor Digital" />
                  </picture>
                  <p>Com o número em mãos, e uma meta de redução na cabeça, seja ela de ficar abaixo de 90kWh (isento) ou 200kWh (12%), iremos utilizar a última conta como parâmetro para sabermos qual o nosso andamento de consumo atual durante o decorrer do mês, vamos visualizar uma conta de exemplo:</p>
                  <picture>
                      <img className='image' src={Medicao} alt="Dados da medição" />
                  </picture>
                  <p>Ao observar os dados de Medição verificamos que o consumo do mês (kWh) é exatamente a diferença da leitura atual subtraindo a leitura anterior, ou seja, <strong>leitura atual (00632) - leitura anterior (00552) = 80 kWh </strong>, gerando assim uma conta isenta de ICMS.</p>
                  <p>Agora que sabemos como é efetuado o cálculo do consumo mensal, vamos acompanhar o nosso consumo atual, tanto para atingirmos uma meta de redução, quanto para evitarmos sustos com a conta, a ideia é a mesma, mas com o número que pegamos no medidor de energia e subtraímos pela leitura atual, obtendo assim o nosso consumo parcial</p>
                  <p><strong>Nossa medição - Leitura atual = Consumo parcial</strong></p>
                  <p>Assim vemos qual o andamento do nosso consumo, se está dentro da meta ou necessita de maior atenção visando redução, para auxiliar neste controle preparei uma calculadora que ajuda no monitoramento de nosso consumo.</p>
            </article>
        </section>
     );
}
 
export default How;
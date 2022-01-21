import React from 'react';

import './How.css'

const How = () => {
    return ( 
        <section className="howContainer">
            <article>
                <h4>Mas como posso acompanhar o meu consumo?</h4>
                  <p>Basicamente a leitura do relógio é bem simples, tanto em medidores digitais como em ciclométricos, precisamos apenas ler os números do medidor e subtrair pela última leitura, a diferença é o seu consumo atual.</p>
                  <picture>
                    <div className="ciclo"></div>
                    <div className='digital'></div>
                  </picture>
                  <p>Com o número em mãos, e uma meta de redução na cabeça, seja ela de ficar abaixo de 90kWh (isento) ou 200kWh (12%), iremos utilizar a última conta como parâmetro para sabermos qual o nosso andamento de consumo atual durante o decorrer do mês, vamos visualizar uma conta de exemplo:</p>
                  <div className='image'>
                      <div className='dadosMedicao'></div>
                  </div>
                  <p>Ao observar os dados de Medição verificamos que o consumo do mês (kWh) é exatamente a diferença da leitura atual subtraindo a leitura anterior, ou seja, <strong>leitura atual (00632) - leitura anterior (00552) = 80 kWh </strong> , gerando assim uma conta isenta do tributo estadual. </p>
            </article>
        </section>
     );
}
 
export default How;
import React from 'react';
import Table from './Table';
import './Tax.css'

const Tax = () => {
    return (
      <section className="taxContainer">
        <article>
            <h3>
              Conheça algumas cobranças que ocorrem em sua conta de luz e como economizar.
            </h3>
            <h4>ICMS:</h4>
            <p>
              Sempre que adquirimos um produto ou serviço, no seu preço está incluído o <strong>Imposto sobre Circulação de Mercadorias e Serviços (ICMS)</strong>.
            </p>
            <p>
              É um tributo de competência estadual e incide na conta de energia, mas a sua porcentagem cobrada varia de acordo com o consumo do cliente e também de cada estado. Veja a seguir as faixas de consumo e suas respectivas alíquotas do imposto no estado de São Paulo:
            </p>
        </article>
        <article>
          <Table />
        </article>
        <article>
          <p>Como podemos observar na tabela acima, a cada faixa de consumo é aplicada sua respectiva porcentagem do ICMS, que será calculado de acordo com o total do consumo no dia da leitura do relógio de energia.</p>
          <p>Sendo assim, caso o consumo fique abaixo de 90 kWh não ocorrerá a cobrança do imposto, se o consumo ficar entre 91 a 200 kWh, incidirá 12% de ICMS, acima de 200 kWh ocorrerá a maior taxa, de 25%.</p>          
        </article>
      </section>
    );
}
 
export default Tax;
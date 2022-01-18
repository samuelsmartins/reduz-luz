import React from 'react';
import Table from './Table';
import './Content.css'

const Content = () => {
    return (
      <section className="contentContainer">
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
      </section>
    );
}
 
export default Content;
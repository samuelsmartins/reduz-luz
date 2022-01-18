import React from "react";
import "./Table.css";

function Table() {
  return (
    <div className="tableContainer">
      <table className="icms">
          <caption>Base para o cálculo do ICMS (São Paulo)</caption>
        <thead className="thead">
          <tr>
            <th>​Faixa de consumo (KWH)</th>
            <th>​Alíquota de ICMS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>​0 a 90</td>
            <td>​Isenta</td>
          </tr>
          <tr>
            <td>​91 a 200</td>
            <td>​​12%</td>
          </tr>
          <tr>
            <td>​Acima de 200</td>
            <td>​25%</td>
          </tr>          
        </tbody>
      </table>
    </div>
  );
}

export default Table;

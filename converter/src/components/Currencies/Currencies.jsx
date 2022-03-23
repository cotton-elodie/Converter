import React from "react";
import PropTypes from 'prop-types'
import Currency from "../Currency/Currency";

const Currencies = ({currencies})=>{

    return (
        
        <ul>
           {currencies.map((currency)=>
           (
               <Currency 
               key={currency.name}
               name={currency.name}/>
           )
           )}
        </ul>
    )
}

Currencies.propTypes = {
    currencies: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
   
  };

export default React.memo (Currencies);
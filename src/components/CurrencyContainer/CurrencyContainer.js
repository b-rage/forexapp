import React from 'react';
import GbpjpyComp from './GbpjpyComp';
import data from './GbpjpyComp';

class CurrencyContainer extends React.Component {

    render() {

        return (

            <div>
                <GbpjpyComp data={data}/>
            </div>
        )
    }
}

export default CurrencyContainer;
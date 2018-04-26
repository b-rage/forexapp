import React from 'react';

class GbpjpyComp extends React.Component {




    constructor() {

        super();
        this.state = {
            data:Number,
        }
    }

    componentDidMount(){
        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GBPJPY&interval=15min&apikey=GJC4XIF6AGB9ROW7').then((Response)=>Response.json()).then((findresponse)=>{
            console.log(findresponse);
        
            
        })
    }

        
    

    

    render() {

        return (

            <div>
                <h1>GBP/JPY</h1>
                <p>152.4620</p>
               
            </div>
        )
    }
}

export default GbpjpyComp;
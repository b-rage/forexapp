import React from 'react';

class GbpjpyComp extends React.Component {


    constructor() {

        super();
        this.state = {
            data:[],
            
        }
    }
    

    /* https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GBPJPY&interval=1min&apikey=GJC4XIF6AGB9ROW7 
    https://facebook.github.io/react-native/movies.json
    */
    componentDidMount(){
        fetch('https://facebook.github.io/react-native/movies.json')
        .then((response)=>response.json())
        .then((responseJson)=>{
            
            this.setState({
                //data: responseJson["Time Series (1min)"]["2018-04-27 04:16:00"]["4. close"]  
                data: responseJson.movies[0]
            })
        
            console.log(responseJson);   
        })
    }


    

    render() {

        return (

            <div>
            <h1>GBP/JPY</h1>
            {
                    
                    
                    //<div >{this.state.data}</div>            
                    <div >{this.state.data.title}</div>

                    /*
                    this.state.data.map( (dynamicData,key)=>
                    <div key={key}>{dynamicData.title}</div>) */
                    
            }
            </div>

            /* <div>
                <h1>GBP/JPY</h1>
                <p>152.4620</p>
               
            </div> */
        )
    }
}

export default GbpjpyComp;
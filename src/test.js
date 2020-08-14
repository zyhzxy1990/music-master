import React,{Component }from 'react';

class Testset extends Component{
    state = {todisplay:false};
    
    toggledisplay = () =>{
        this.setState({todisplay : !this.state.todisplay});

    }

    render(){
        return(
            <div>
                <h1>TEST</h1>
            
                {
                    this.state.todisplay ? (
                        <div>
                            <p>1111111111111</p>
                            <p>3333333333333333333333</p>
                            <p>22222222222</p>
                            <button onClick={this.toggledisplay}>Show Less</button>
                            </div>
                    ) : (
                        <div>
                            <button onClick={this.toggledisplay}>Show More</button>
                        </div>
                    )

                }
            </div>
        )

    }

}

export default Testset
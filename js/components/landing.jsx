import React from 'react'
import {connect} from 'react-redux'
// import actions from '../redux/actions'

class Landing extends React.Component {

    // constructor() {
    //     super();
    //     this.x = this.x.bind(this);
    // }

    render() {
    	return (
            <div className="landing">
                <h3>Sign in:</h3>
                <form>
                    <input type='text' placeholder='Username'/>
                    <br/>
                    <input type='text' placeholder='Password'/>
                </form>
                <h4>Not registered with Caterr? Create your free account!</h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state,
   	}
};

module.exports = connect(mapStateToProps)(Landing);
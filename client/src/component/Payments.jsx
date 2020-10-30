import React,{Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {



        return (
            <StripeCheckout

                //name title
                name="Emaily"

                //description
                description="$5 for 5 email credits"

                //amout in us cent by default ---> 5 dollars 
                amount={500}
                //currency add later
                //to do
                
                // api colback function
                token={token=>console.log(token)}

                //stripeKey
                stripeKey={process.env.REACT_APP_STRIPE_KEY}

            >
            {/* for styling use in child component */}
            <button className="btn">Add Credits</button>


                
            </StripeCheckout>
        );
    }
}

export default Payments;

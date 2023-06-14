import Home from "../../src/pages/Home";
import { connect } from 'react-redux'
import { addToCart, removeToCart } from '../ReduxServices/Actions/Actions';

const mapStateToProps = state => ({
    data: state.cartItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home; 
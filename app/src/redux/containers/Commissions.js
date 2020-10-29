import { connect } from 'react-redux';
import { Commission } from '../../components/Commission/Commission';
import getImage from "../../utils/testDynamicImage";

const mapStateToProps = state => {
    return {
        priceTotal: state.priceTotal,
        url: getImage(state)
    }
}

const Commissions = connect(mapStateToProps)(Commission);

export default Commissions;
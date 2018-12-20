import { connect } from 'react-redux';
import View from './view';

const mapStateToProps = (state) => {
    const { content } = state;
    return {content};
};

export default connect(mapStateToProps)(View);

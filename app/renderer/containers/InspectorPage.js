import {connect} from 'react-redux';

import * as InspectorActions from '../actions/Inspector';
import InspectorPage from '../components/Inspector/Inspector';
import {withTranslation} from '../util';

function mapStateToProps(state) {
  return state.inspector;
}

export default withTranslation(InspectorPage, connect(mapStateToProps, InspectorActions));

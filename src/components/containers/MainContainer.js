import { connect } from "react-redux";
import Main from "../Main";
import { fetchData } from "../../redux/actions";

export default connect(
  state => state,
  dispatch => ({
    fetchData: url => {
      dispatch(fetchData(url));
    }
  }),
  null,
  { pure: false }
)(Main);

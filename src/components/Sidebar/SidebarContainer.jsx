import { connect } from "react-redux";
import SideBar from "./Sidebar";

const mapStateToProps = (state) => {
  return {
    sidebarData: state.sidebarData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps) (SideBar);

export default SideBarContainer;

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Col } from "shards-react";
import { connect } from 'react-redux';
import * as actions from '../../actions';

class PageTitle extends React.Component{

  render(){
    const{ subtitle, className } = this.props;
    const classes = classNames(
      className,
      "text-center",
      "text-md-left",
      "mb-sm-0"
    );
    return (
      <Col xs="12" sm="12" className={classes} >
        <span className="text-uppercase page-subtitle py-5">{subtitle}</span>
        <h3 className="page-title py-4">{this.props.Choice}</h3>
      </Col>
    )
  };
}

PageTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

PageTitle.defaultProps = {
  subtitle: "NBA"
}

function mapStateToProps({surveys}) { 
  if (surveys.confirm){
    return{
      Choice : surveys.confirm
    }
  }
  else {
    return {Choice : "Select the player with the highest FPPG!"}
  }
}

export default connect(mapStateToProps,actions)(PageTitle);

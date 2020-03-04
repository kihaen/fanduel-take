import React from "react";
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  Button
} from "shards-react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as actions from '../actions';


class playerCard extends React.Component{

  state = {
    showStat : false
  }

  render(){
    const{ title, imgSrc, details, fppg} = this.props;
  
    const buttonLocalHandler = () =>{
      if (fppg === this.props.highestFppg){
        this.props.setPageTitle("Correct!")
      }
      else {
        this.props.setPageTitle("Incorrect!")
      }
      this.setState({showStat : !this.state.showStat})
      setTimeout(()=>{this.props.setPageTitle("Select the player with the highest FPPG!")}, 1000)
    }
  
    return (
      <Card style={{ maxWidth: "250px", margin:"10px" }}>
        <CardImg style={{ maxWidth: "200px", margin:"25px"}}src={imgSrc} />
        <CardBody>
        <CardTitle>{title}</CardTitle>
        <p>{details}</p>
        <p>{ this.state.showStat ? fppg : ""}</p>
        <Button onClick={buttonLocalHandler}>Select Player</Button>
        </CardBody>
      </Card>
    );
  }
}

playerCard.propTypes = {
    title: PropTypes.string,
    imgSrc : PropTypes.string,
    details : PropTypes.string,
    handler : PropTypes.func,
}

playerCard.defaultProps = {
    title : "Card Title",
    details : "Fantasy-Points Per Game",
    fppg : "No Value Found",
} 

function mapStateToProps({surveys}) { 
  if (surveys.selectedPlayer){
    return({
      highestFppg : surveys.selectedPlayer
    })
  }
  else{
    return {highestFppg : 0}
  }
}

export default connect(mapStateToProps,actions)(playerCard);
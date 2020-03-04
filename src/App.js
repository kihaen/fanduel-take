import React,{Component} from 'react';
import './App.css';
import PlayerCard from './components/playerCard';
import { Container, Row, Col} from "shards-react";
import PageTitle from "./components/common/PageTitle"
import { connect } from 'react-redux';
import * as actions from './actions';


class App extends Component {

  componentDidMount() {
    if(!this.props.players){
      this.props.fetchPlayers();
    }
  }

  calculateRandom(playerNum){
    return Math.floor(Math.random()*playerNum);
  }

  renderPlayerList(){
    const numOfPlayer = 4; // Number of Players to Possibly Compare 
    if (this.props.players){
      let playersToRender = [];
      let playersinArray = [];
      let greatestPlayerFPPG = 0;
      for (let count = 0 ;count < numOfPlayer ; count++){
        let randomNum = this.calculateRandom(this.props.playerCount);
        let player = this.props.players[randomNum];
          while(playersinArray.includes(player.id)){ 
              randomNum = this.calculateRandom(this.props.playerCount)  //reshuffle if the name is already on the list
              player = this.props.players[randomNum]
          }
        if(player.fppg > greatestPlayerFPPG ){ greatestPlayerFPPG = player.fppg } //store the index of the player
        playersToRender.push( 
          <Col key={count}>
            <PlayerCard key = {player.id} 
            className = "col-md mb-4" 
            title = {player.first_name} 
            imgSrc = {player.images.default.url}
            fppg = {player.fppg}
            />
          </Col>
        )
        playersinArray.push(player.id);
      }
      this.props.selectPlayer(greatestPlayerFPPG);
      return playersToRender
    } else {
      return <h3>No players found</h3>
    }
  }

  generatePlayerCard = (obj) =>{
    console.log(obj)
    return(
      <Col key={obj.id}>
        <PlayerCard 
        className="col-md mb-4" 
        title={obj.first_name} 
        imgSrc={obj.images.default.url}
        fppg = {obj.fppg}
        handler ={(e)=>{}}
        showBtn = {false}
        />
      </Col>
    )
  }

  render(){
    return (
      <div className="App">
         <Container fluid className=" main-content-container px-4">
            <Row noGutters className="py-5 px-2">
              <PageTitle className="text-md-center mb-3 " />
            </Row>
            <Row noGutters className=" py-4">
            {this.renderPlayerList()}
            </Row>
         </Container>
      </div>
    );
  }
  
}

function mapStateToProps({surveys}) { 
  console.log("show surveys:",surveys)  
  if(surveys.players){
    return {
            players : surveys.players,
            playerCount : surveys._meta.players.count,
            Reset : surveys.shouldReset // Change here will cause componentToUpdate
            }
  }
  else return {}
}

export default connect(mapStateToProps,actions)(App);

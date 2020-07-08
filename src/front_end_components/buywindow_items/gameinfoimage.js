import React from 'react';
import "./buywindow_styles.css";




class GameInfoImage extends React.Component {
    constructor(props){
        super(props);
        this.control = props.control;
        //console.log(this.control);
        this.games_data = props.games_data;
    }

    getImageLink(opponent){
        for(let i in this.games_data){
            let game = this.games_data[i];
            if(game.text === opponent){
              //console.log("returning ",game.city_zip, "because text = ",game.text,"and opponent = ",opponent);
              return game.logo;
            }
          }
          //console.log("bailing");
          return "tamu.png";
    }

    render(){
        let game = "";
        if(this.control !== undefined){
            game = this.control.game;
        }
            let src = this.getImageLink(game);
            return (
                <div className="gameinfo-image">
                    <img className="gameinfo-image" src={require("./logos/"+src)} alt={src}/>
                </div>
            )
    }
}

export default GameInfoImage;
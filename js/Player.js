class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
  //players-player1, player2
  addPlayer(){
    
    var playerIndex="players/player"+this.index

    if(this.index===1){
      this.positionX=width/2-100
    }
    else{
      this.positionX=width/2+100
    }

    database.ref(playerIndex).set({
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY
    })


  }

  getDistance(){
    var playerDistanceRef=database.ref("players/player"+this.index)
    playerDistanceRef.on("value",data=>{
     var data= data.val();
     this.positionX=data.positionX;
     this.positionY=data.positionY;

    })
  }
  
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  //Bp
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }
   
  static getPlayerInfo(){
    var playerInfoRef=database.ref("players");
    playerInfoRef.on("value",data=>{
      allPlayers=data.val() //[player1-name,x,y,player2-name,x,y]
    })
  }

  update(){
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).update({
      positionX:this.positionX,
      positionY:this.positionY
    })

  }

}

import Card from "./components/Card";

import './App.css';

function App(){

  return( 
    <>
    <Card 
    tittle="Football"
    description="Football is a popular sport played worldwide. It involves two teams competing to score goals
    by getting a ball into the opposing team's net."
    imageUrl="https://w7.pngwing.com/pngs/648/884/png-transparent-football-ball-game-sport-cricket-balls-ball-sport-leather-logo.png"
/>
<Card 
    tittle="Cricket"
    description="Cricket is a bat-and-ball game played between two teams of eleven players each
    on a circular field. The game involves batting, bowling, and fielding, with the aim of scoring runs."
    imageUrl="https://www.shutterstock.com/image-vector/cricket-sports-vector-logo-design-600nw-2307222107.jpg"
/>
<Card 
    tittle="Hockey"
    description="Hockey is a fast-paced team sport played on ice or a field, where players use sticks to hit a puck or ball into the opponent's goal."
    imageUrl="https://e7.pngegg.com/pngimages/974/948/png-clipart-logo-ice-hockey-sticker-hockey-puck-hockey-label-logo-thumbnail.png"

/>
    </>
  )
  
}

export default App;
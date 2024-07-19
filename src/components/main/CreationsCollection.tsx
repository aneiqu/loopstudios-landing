import imgCuriosityLarge from "../../assets/images/desktop/image-curiosity.jpg";
import imgDeepEarthLarge from "../../assets/images/desktop/image-deep-earth.jpg";
import imgFishEyeLarge from "../../assets/images/desktop/image-fisheye.jpg";
import imgFromAboveLarge from "../../assets/images/desktop/image-from-above.jpg";
import imgGridLarge from "../../assets/images/desktop/image-grid.jpg";
import imgNightArcadeLarge from "../../assets/images/desktop/image-night-arcade.jpg";
import imgPocketBorealisLarge from "../../assets/images/desktop/image-pocket-borealis.jpg";
import imgSoccerTeamLarge from "../../assets/images/desktop/image-soccer-team.jpg";
import imgCuriositySmall from "../../assets/images/mobile/image-curiosity.jpg";
import imgDeepEarthSmall from "../../assets/images/mobile/image-deep-earth.jpg";
import imgFishEyeSmall from "../../assets/images/mobile/image-fisheye.jpg";
import imgFromAboveSmall from "../../assets/images/mobile/image-from-above.jpg";
import imgGridSmall from "../../assets/images/mobile/image-grid.jpg";
import imgNightArcadeSmall from "../../assets/images/mobile/image-night-arcade.jpg";
import imgPocketBorealisSmall from "../../assets/images/mobile/image-pocket-borealis.jpg";
import imgSoccerTeamSmall from "../../assets/images/mobile/image-soccer-team.jpg";
import Card from "./Card";

export default function CreationsCollection() {
  return (
    <div className='creations__display'>
      <Card text='DEEP EARTH' imgLarge={imgDeepEarthLarge} imgSmall={imgDeepEarthSmall} />
      <Card text='NIGHT ARCADE' imgLarge={imgNightArcadeLarge} imgSmall={imgNightArcadeSmall} />
      <Card text='SOCCER TEAM VR' imgLarge={imgSoccerTeamLarge} imgSmall={imgSoccerTeamSmall} />
      <Card text='THE GRID' imgLarge={imgGridLarge} imgSmall={imgGridSmall} />
      <Card text='FROM UP ABOVE VR' imgLarge={imgFromAboveLarge} imgSmall={imgFromAboveSmall} />
      <Card
        text='POCKET BOREALIS'
        imgLarge={imgPocketBorealisLarge}
        imgSmall={imgPocketBorealisSmall}
      />
      <Card text='THE CURIOSITY' imgLarge={imgCuriosityLarge} imgSmall={imgCuriositySmall} />
      <Card text='MAKE IT FISHEYE' imgLarge={imgFishEyeLarge} imgSmall={imgFishEyeSmall} />
    </div>
  );
}

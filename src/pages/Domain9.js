import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import Background2 from '../components/Background2';
import Image1 from '../Images/1287431.jpg';
import Image2 from '../Images/enemies.jpg';
import Image3 from '../Images/worldboss.jpg';
import Image4 from '../Images/domain9.png';
import Image_default from '../Images/domain9.png';

function Domain9()
{
  useEffect(()=> 
  {
    let background = document.getElementById("background");
    let diamonds = document.querySelectorAll(".ul.li");
    
    for(let i = 0; i < diamonds.length; i++)
    {
      let dia = diamonds[i];
      //Child elements to identify empty diamond| takes the image for the background
      let child = dia.firstElementChild.firstElementChild;
      let child_image = dia.firstElementChild.style.backgroundImage;
      diamonds[i].onmouseover = function(event)
      {
        if(dia.onmouseover && child.innerHTML !== "")
        {
          //Background + text changes 
          background.style.backgroundImage = child_image;
          dia.style.border = "2px solid rgb(22 21 21)";

          //hide all other elements besides this one
          for(let z = 0; z < diamonds.length; z++)
          {
            //diamonds[z].style.display = "none";
            //dia.style.display = "block";
            //fadeout other containers besides this one
            dia.style.animation = "none";
            dia.style.opacity = "1";
            diamonds[z].style.animation = "Fadeout ease-in-out 0.7s";
            diamonds[z].style.opacity = "0";
          }
        }
        dia.onmouseleave = function(event)
        {
          background.style.backgroundImage = `url(${Image_default})`;
          dia.style.borderStyle = "";
          dia.style.border = "2px solid rgb(51, 48, 48)";

          //show all diamonds
          for(let z = 0; z < diamonds.length; z++)
          {
            dia.style.animation = "none";
            diamonds[z].style.display = "block";
            diamonds[z].style.animation = "FadeIn ease-in 0.7s";
            diamonds[z].style.opacity = "1";
            
          }
          //fade in other containers
        }
      }
    }
  }, []);
  const navigate = useNavigate();

  const navigateToSimulacra = () => 
  {
    //navigate to /simulacra
    navigate('/Domain9Simulacra');
  };

  const navigateToEnemies = () => 
  {
    //navigate to /enemies
    navigate('/domain9Enemies');
  };

  const navigateToWorldBosses = () => 
  {
    //navigate to /worldbosses
    navigate('/domain9WorldBosses');
  };

  const navigateToUnknown = () => 
  {
    //navigate to /unknown
    navigate('/unknown');
  };

  return (
    <Background2 background = {Image_default}
                onclick1 = {navigateToSimulacra} image1 = {Image1} text1 = "Simulacra" display1 = "block"
                onclick2 = {navigateToEnemies} image2 = {Image2} text2 = "Enemies" display2 = "block"
                onclick3 = {navigateToWorldBosses} image3 = {Image3} text3 = "World-Bosses" display3 = "block"
                onclick5 = {navigateToUnknown} image5 = {Image4} text5 = "Unknown" display5 = "block"
    />
  );
  
};
    
export default Domain9;
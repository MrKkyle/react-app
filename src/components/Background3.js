import '../Css/Background.css';
import {useEffect} from 'react';

function Background3()
{

    useEffect(()=> 
    {
        
        var txt = document.querySelector(".text-container").innerHTML;
        document.querySelector(".text-container").innerHTML = "";
        console.log(txt);
        var speed = 50;
        var i = 0;
        function typeWriter() 
        {
            if (i < txt.length)
            {
                document.querySelector(".text-container").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        window.addEventListener("load", event =>
		{
			setTimeout(() =>
			{
                typeWriter();
            }, 3000);
        })

    }, []);
    return (
    <>   
        <div className = "background-image">
            <div className = "container">
                <div className = "text">Enemies</div>
                <div className = "text-container">
                    Here is something that might make you change your mind. How about we go to Japan, and enjoy it there, 
                    instead of this junk country
                </div>
            </div>
            <div className = "ul" id = "table" style = {{width: '1880px', height: '915px', }}>
                <li className = "ul li diamond1" style = {{display: 'block', left: '23%', top: '-7%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond2" style = {{display: 'block', left: '50%', top: '46%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond3" style = {{display: 'block', left: '77%', top: '-7%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond4" style = {{display: 'block', left: '23%', top: '99%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond5" style = {{display: 'block', left: '77%', top: '99%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond6" style = {{display: 'block', left: '-4%', top: '46%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
            </div>
        </div>
        
    </>     
    );
  
};
    
export default Background3;
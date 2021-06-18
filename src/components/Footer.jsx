import React from 'react'  /*Import React*/ 
import '../utils/css/Footer.css' /*Import the styles*/
import instagram from '../utils/Images/instagram.svg'  /*Import the images*/
import facebook from '../utils/Images/facebook.svg'  /*Import the images*/
import link from '../utils/Images/link.svg'  /*Import the images*/
import hub from '../utils/Images/git.svg'  /*Import the images*/
import computer from '../utils/Images/computer.svg'  /*Import the images*/

function Footer (){ /*Name of the function*/
    return (
        <div className="Container_Footer">
            <div className="Container_logo">  
            <a href="https://www.instagram.com/aurianmejia/"><img id="img_insta" src={instagram} alt="Esta es la img" /></a>
            <a href="https://www.facebook.com/aurasofia.mejiaruiz"><img id="img1" src={facebook} alt="Esta es la img" /></a>
            <a href="https://co.linkedin.com/in/aura-sof%C3%ADa-mej%C3%ADa-ruiz-9330271b7"><img id="img1" src={link} alt="Esta es la img" /></a> 
            <a href="https://github.com/AuraMejia"><img id="img1" src={hub} alt="Esta es la img" /></a>
            </div>

            <div className="Container_img_central">   
            <img id="img1" src={computer} alt="Esta es la img" />
            </div>

            <div className="Info"> 
            <p>aurasofiamejia2805@gmail.com</p> 
            <a href="https://wa.link/6fy2z9"><p>302-464-6286</p></a>
            <p>Bogotá, D.C.</p>

            </div>
        </div>
    )
}
export default Footer /*Export the function in the App.js*/
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import suicideprevention from './img/suicideprevention.jpg';
import crisistextline from './img/crisistextline.jpg';
import trevorproject from './img/trevorproject.png';
import towriteloveonherarms from './img/towriteloveonherarms.jpeg';
import themighty from './img/themighty.png';
import afsp from './img/afsp.png';
import { ButtonToolbar, Button, OverlayTrigger, Tooltip, Card, CardDeck }  from 'react-bootstrap';

export default class SIResources extends Component {
  render() {
    return (
      <div className='background' style={{width:'100%', margin:'0px'}}>
      <div >

<h4 style={{width:'70%', textAlign:'center', margin:'20px auto'}}> You are not alone. <br/> Explore the resources below or continue to the suggestions page.</h4>

      <Link  to="/criticalgrid">
        <button  style={{margin:'20px auto'}} className='subBtn' type="button">
          Skip these
        </button>

        
      </Link>
 
        <CardDeck style={{ margin:'30px 50px' }}>
          
          <Card className='si' >         
            <Card.Body>
            <div style={{background:'white', height:'100%'}}> 
              <a href="https://www.thetrevorproject.org/#sm.000cl30ii1bkdd6gr4w2fz7wy91p9" target="_blank">
                <img style={{width:"100%"}} src={trevorproject} alt={'pinata'}/>     
                  <Card.Text style={{textAlign:'left', fontSize:'calc(12px + 1vmin)', padding:'20px', background:'white'}}>
                  The Trevor Project is the leading national organization providing crisis intervention and suicide prevention services to  lesbian, gay, bisexual, transgender, queer & questioning (LGBTQ) young people under 25.       
                  </Card.Text>
                </a>
                </div>
            </Card.Body>            
          </Card>
         

          <Card className='si' >
            <Card.Body>
            <div style={{background:'white', height:'100%'}}> 
              <a href="https://www.crisistextline.org/" target="_blank">
                <img style={{width:"100%"}} src={crisistextline} alt={'pinata'}/>   
                <Card.Text style={{textAlign:'left', fontSize:'calc(12px + 1vmin)', padding:'20px', background:'white'}}>
                Text 741741 from anywhere in the US to text with a trained Crisis Counselor.         
                <span style={{color:'red'}}> “We want to be where you are. We want to make it as easy as possible for people who are in pain to get help.”
                </span>    
                </Card.Text>
              </a>
              </div>
            </Card.Body>            
          </Card>      
        </CardDeck>

        <CardDeck style={{ margin:'30px 50px' }}>
          <Card className='si' >  
                
            <Card.Body >
            <div style={{background:'white'}}> 
              <a href="https://twloha.com/find-help/" target="_blank">
                <img style={{width:"100%"}} src={towriteloveonherarms} alt={'pinata'}/>
              <Card.Text style={{textAlign:'left', fontSize:'calc(12px + 1vmin)', padding:'20px', background:'white', height:'100%'}}>
                No matter what you’re facing, you deserve to be connected to help. We want you to know that people have been where you are now. Things can get better. Healing is possible. Use our FIND HELP Tool to locate free or reduced cost counseling and other mental health resources in your community
                </Card.Text>
              </a>
              </div>  
            </Card.Body>   
                  
          </Card>
          <Card className='si' >      
            
            <Card.Body >
            <div style={{background:'white', height:'100%'}}> 
              <a href="https://themighty.com/suicide-prevention-resources/" target="_blank">
                <img style={{width:"100%"}} src={themighty} alt={'pinata'}/>
                <Card.Text style={{textAlign:'left', fontSize:'calc(12px + 1vmin)', padding:'20px', background:'white'}}>
                  No matter where you are in your health journey, you’ll find a story on The Mighty by someone who’s been there too.
                  The Mighty is a safe, supportive community for people facing health challenges and the people who care for them.      
                </Card.Text>
              </a>
              </div>   
            </Card.Body>    
                
          </Card>
        </CardDeck>

        <CardDeck style={{ margin:'30px 50px' }}>
          <Card className='si' >         
              <Card.Body>
              <div style={{background:'white', height:'100%'}}> 
              <a href="https://afsp.org/find-support/" target="_blank">
               <img style={{width:"100%"}}  src={afsp} alt={'pinata'}/>
                <Card.Text style={{textAlign:'left', fontSize:'calc(12px + 1vmin)', padding:'20px', background:'white'}}>
                There is no single cause to suicide. It most often occurs when stressors exceed current coping abilities. Our Misssion: Save Lives and Bring Hope to Those Affected by Suicide.    
                </Card.Text>
              </a>
              </div>
              </Card.Body>            
            </Card>
            <Card className='si' >
         
         <Card.Body style={{ padding:'20px', width:'100%'}}>
         <div style={{background:'white', height:'100%'}}> 
         <a href="https://suicidepreventionlifeline.org/" target="_blank">
         <img style={{width:'100%'}}  src={suicideprevention} alt={'pinata'}/>
         
         <Card.Text style={{textAlign:'left', fontSize:'calc(12px + 1vmin)', padding:'20px', background:'white'}}>
         The Lifeline provides 24/7, free and confidential support for people in distress, prevention and crisis resources for you or your loved ones, and best practices for professionals.
           </Card.Text>
           </a>
           </div>
         </Card.Body>
       </Card>
    
        </CardDeck>

        

        </div>

      </div>
    )
  }
}

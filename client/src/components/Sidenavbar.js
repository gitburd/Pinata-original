import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



export default class Sidenavbar extends Component {

    render() {

        let login =  this.props.auth.isAuthenticated()? (
            <button style={{ cursor: 'pointer',backgroundColor:'transparent', border:'none' }} onClick={()=>{ this.props.auth.logout()
                 window.location='/'             
                }
            }
        > <i class="fas fa-sign-out-alt" style={{ fontSize: '2em' }} /></button> 
        ) : (
        <button  style={{ cursor: 'pointer',backgroundColor:'transparent', border:'none' }} onClick={this.props.auth.login}> <i class="fas fa-sign-out-alt" style={{ fontSize: '2em' }} /></button> 
        )
        
        return (
            // <div className={this.props.auth.isAuthenticated()? 'clear':'hidden'}>
          <div>
          
              <SideNav id='clear' className='pinataNav'>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="/">
                <NavItem eventKey="/login">
                        <NavIcon>

                      {login}
                     
                        </NavIcon>
                        <NavText>
                        <button  style={{ cursor: 'pointer',backgroundColor:'transparent', border:'none' }} onClick={this.props.auth.login}> Logout </button>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="/">
                        <NavIcon>
                            <Link className="navbar-brand" to="/"> 
                                <i class="fa fa-fw fa-home" style={{ fontSize: '2em' }} />
                            </Link>    
                        </NavIcon>
                        <NavText>
                            <Link className="navbar-brand" to="/"> Home</Link>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="/feeling">
                        <NavIcon>
                            <Link className="navbar-brand" to="/feeling">
                                <i class="fas fa-heart" style={{ fontSize: '2em' }}></i>
                            </Link>
                        </NavIcon>
                        <NavText>
                            <Link class="navbar-brand" to="/feeling">Feeling </Link>
                        </NavText>
                    </NavItem>
                    

                    <NavItem eventKey="/records/list">
                    <NavIcon>
                        <Link className="navbar-brand" to="/records/list">
                            <i class="far fa-list-alt" style={{ fontSize: '2em' }}></i>
                        </Link>
                    </NavIcon>
                    <NavText>
                        <Link className="navbar-brand" to="/records/list"> List Records</Link>
                    </NavText>
                    </NavItem>
                    
                    {/* <NavItem eventKey="/records/add">
                        <NavIcon>
                            <Link className="navbar-brand" to="/records/add">
                                <i class="far fa-plus-square" style={{ fontSize: '2em' }} ></i>
                            </Link>
                        </NavIcon>
                        <NavText>
                            <Link className="navbar-brand" to="/records/add">New Record</Link>
                        </NavText>
                    </NavItem> */}
                    
                    <NavItem eventKey="/records/update">
                        <NavIcon>
                            <Link className="navbar-brand" to="/custom">
                            <i class="fas fa-user" style={{ fontSize: '2em' }}></i>
                            </Link>
                        </NavIcon>
                        <NavText>
                            <Link className="navbar-brand" to="/custom">Your Actions</Link>
                        </NavText>
                    </NavItem>

                    {/* <NavItem eventKey="/search">
                    <NavIcon>
                        <Link className="navbar-brand" to="/search">
                            <i class="fas fa-search" style={{ fontSize: '2em' }}></i>
                        </Link>
                    
                    </NavIcon>
                            <NavText>
                                <Link className="navbar-brand" to="/search"> Search Records</Link>
                            </NavText>
                    </NavItem>

                    <NavItem eventKey="/finish">
                    <NavIcon>
                            <i class="fa fa-fw fa-line-chart" style={{ fontSize: '2em' }} />
                    </NavIcon>
                            <NavText>
                                <Link className="navbar-brand" to="/finish"> Finish Record</Link>
                            </NavText>
                    </NavItem> */}


                </SideNav.Nav>
            </SideNav>
       
        </div>
    )};
}
    
  

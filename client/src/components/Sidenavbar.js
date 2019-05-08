import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import auth0Client from '../Auth';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import history from '../history';
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

export default class Sidenavbar extends Component {
    render() {
       
        return (
          <div className='transparent'>
              <SideNav className='sidenav'>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="/">
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
                    
                    <NavItem eventKey="/records/add">
                        <NavIcon>
                            <Link className="navbar-brand" to="/records/add">
                                <i class="far fa-plus-square" style={{ fontSize: '2em' }} ></i>
                            </Link>
                        </NavIcon>
                        <NavText>
                            <Link className="navbar-brand" to="/records/add">New Record</Link>
                        </NavText>
                    </NavItem>
                    
                    <NavItem eventKey="/records/update">
                        <NavIcon>
                            <Link className="navbar-brand" to="/records/update">
                                <i class="far fa-edit" style={{ fontSize: '2em' }} ></i>
                            </Link>
                        </NavIcon>
                        <NavText>
                            <Link className="navbar-brand" to="/records/update">Update Records</Link>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="/search">
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
                    </NavItem>


                </SideNav.Nav>
            </SideNav>
        </div> 
    )};
}
    
  

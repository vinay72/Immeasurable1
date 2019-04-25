import React, { Component } from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
    constructor(props){
        super(props);
        this.state= {
       isNavOpen: false
        };
        this.toggleNav= this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
        isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                   <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
               <NavbarBrand className="mr-auto" href="/">
             Immeasurable
                  </NavbarBrand>
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link"to="/home">
                            Home
                            </NavLink>
                        </NavItem>
               
                    <NavItem>
                            <NavLink className="nav-link"to="/learning">
                                The Learning
                            </NavLink>
                            
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"to="/modules">
                        
                                Modules
                            </NavLink>
                            
                        </NavItem>

                        </Nav>


                            </Collapse>
                    </div>
                    
                </Navbar>
                <Jumbotron>
                    <div className ="container">
                        <div className="row row-header">
                                <div className="col-12 col-sm-6">
                                <h3>How To Improve Focus & Concentration: Learn To Focus Better</h3>
                                <h4>Focus & Concentration Strategies For Personal Productivity: Brain Hacking Tips & A 21 Day Focus For Success Challenge</h4>
                                <p>5.6 (46 ratings) 100 students enrolled <br /> Created by David Mills, Michael Vallejo, LCSW Last updated 11/2019 <br /> English</p>
                                </div>
                        </div>
                    </div>
                </Jumbotron>
                <br />
                <div className="container">
                <div className="col-12 col-sm-4 ">
                <Card>
                <CardActionArea>
                
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   Course Description
                  </Typography>
                  <Typography component="p">
                  This course includes 1.5 hours on-demand video, Full lifetime access, 
                  Access on mobile and TV, Certificate of Completion.
                   </Typography>
                    </CardContent>
                  </CardActionArea>
                 <CardActions>
                 <Button size="small" color="primary">
                      Buy Now
                    </Button>
                  <Button size="small" color="primary">
                   Add to cart
                   </Button>
                  </CardActions>
                  </Card>
                  </div>
                  </div>
            </React.Fragment>
        );
    }
}

export default Header;
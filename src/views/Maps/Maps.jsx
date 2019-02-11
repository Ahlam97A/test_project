import InputLabel from "@material-ui/core/InputLabel";
import { Edit } from '@material-ui/icons/Edit';
import withStyles from "@material-ui/core/styles/withStyles";

import CardBody from "components/Card/CardBody.jsx";

import React from "react";

import Card from "components/Card/Card.jsx";

import avatar from "assets/img/faces/marc.jpg";

import GridItem from "components/Grid/GridItem.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";



const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

function postData(url = ``, data = {}) {
    // Default options are marked with *
    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then(response => response.text()); // parses response to JSON
  }


//function EditCriteria(props) {
    class EditCriteria extends React.Component {
        constructor(props){
          super(props);
          
          this.state = {};
          this.updateInput = this.updateInput.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
        
        updateInput(event){
          let state = {};
          state[event.target.name] = event.target.value;
          this.setState(state);
        }
    //const { classes } = props;
    handleSubmit=(event) =>{
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/edit-master_2/src/views/Maps/update.php`, this.state)
          .then(data => console.log(JSON.stringify(data))) 
          .catch(error => console.error(error));
      
    
          
      }
      render() {
        // var props;
       const { classes } = this.props;
       const styleInput = {
         width: "100%",
         alignContent: "Center",
         height: "20px",
         margin: "3px 0",
         border: "1px solid #ccc",
         borderBottomLeftRadius: "10px",
         borderBottomRightRadius: "10px",
         borderTopRightRadius: "10px",
         borderTopLeftRadius: "10px"
       };
    return (
        <div style={{ alignContent: "Center" }}>
            <form action="update.php" onSubmit={this.handleSubmit}>
                <GridContainer  >
                    <GridItem xs={12} sm={12} md={8}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Edit Criteria</h4>
                                <p className={classes.cardCategoryWhite}>Complete your School Information</p>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <br />
                                    <GridItem xs={12} sm={12} md={20}>

                                        <InputLabel style={{ width: "60%", color: "#AAAAAA" }}>Maximum Number Of Allowed Absences: </InputLabel>

                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={20}>

                                        <input updateInput={this.updateInput}  style={{ width: "100%", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} key="max" type="text" name="max" />

                                    </GridItem>

                                    <br />
                                    <br />
                                    <br />


                                    <GridItem xs={12} sm={12} md={20}>

                                        <InputLabel style={{ width: "100%", color: "#AAAAAA" }}>Give An Equivalent Points on Different Criteria : </InputLabel>

                                    </GridItem>

                                    <GridItem xs={12} sm={6} md={20}>

                                        <InputLabel style={{ color: "#AAAAAA" }}>      Bad  </InputLabel>

                                    </GridItem>
                                    <GridItem xs={12} sm={6} md={20}>

                                        <input updateInput={this.updateInput} style={{ width: "100%", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} key="bad" type="text" name="bad" />

                                    </GridItem>

                                    <GridItem xs={12} sm={6} md={20}>

                                        <InputLabel style={{ color: "#AAAAAA" }}> Good </InputLabel>

                                    </GridItem>
                                    <GridItem xs={12} sm={6} md={20}>

                                        <input updateInput={this.updateInput} style={{ width: "100%", margin: "3px 0", height: "20px", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} type="text" name="good"  key="good"/>

                                    </GridItem>

                                    <GridItem xs={12} sm={6} md={20}>

                                        <InputLabel style={{ color: "#AAAAAA" }}>Very Good </InputLabel>

                                    </GridItem>
                                    <GridItem xs={12} sm={6} md={20}>

                                        <input updateInput={this.updateInput} style={{ width: "100%", margin: "3px 0", height: "20px", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} type="text" name="verygood" key="verygood" />

                                    </GridItem>
                                    <GridItem xs={12} sm={6} md={20}>

                                        <InputLabel style={{ color: "#AAAAAA" }}>Excellent </InputLabel>

                                    </GridItem>
                                    <GridItem xs={12} sm={6} md={20}>

                                        <input  updateInput={this.updateInput} style={{ width: "100%", margin: "3px 0", height: "20px", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} type="text" name="Excellent" key="Excellent" />

                                    </GridItem>


                                    <br />






















                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <InputLabel style={{ color: "#AAAAAA" }}></InputLabel>

                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                                
                                <Button color="primary" name="Update" type="submit" value="Update">Update Criteria</Button>
                            </CardFooter>
                        </Card>
                    </GridItem>

                </GridContainer>
            </form>


    <GridContainer>
    <GridItem xs={12} sm={12} md={4}>
                        <Card profile>
                            <CardAvatar profile>
                                <a href="#pablo" onClick={e => e.preventDefault()}>

                                </a>
                            </CardAvatar>
                            <CardBody profile>
                                <h6 className={classes.cardCategory}></h6>
                                <h4 className={classes.cardTitle}></h4>
                                <p className={classes.description}></p>
                            </CardBody>
                                


                           
                        </Card>
                 </GridItem>
    </GridContainer>
        </div>
    );
}
    }
export default withStyles(styles)(EditCriteria);

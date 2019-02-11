import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
import InputLabel from '@material-ui/core/InputLabel';

import React from "react";

import PropTypes from "prop-types";

import Card from "components/Card/Card.jsx";

import InputForm from "views/Typography/InputForm.jsx";

import avatar from "assets/img/faces/marc.jpg";

import CardFooter from "components/Card/CardFooter.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";

import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";



const style = {
    typo: {
        paddingLeft: "25%",
        marginBottom: "40px",
        position: "relative"
    },
    note: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        bottom: "10px",
        color: "#c0c1c2",
        display: "block",
        fontWeight: "400",
        fontSize: "13px",
        lineHeight: "13px",
        left: "0",
        marginLeft: "20px",
        position: "absolute",
        width: "200px"
    },
    cardCategoryWhite: {
        color: "rgba(200,2,2,.62)",
        margin: "0",
        fontSize: "16px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFffff",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};



const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
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
            'Access-Control-Allow-Origin':'*'
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
        .then(response => response.text()); // parses response to JSON
}





//function Icons(props) {
class Icons extends React.Component {
    //const { classes } = props;
    constructor(props) {
        super(props);

        this.state = {};
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput=(event)=>{
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
      }
    handleSubmit=(event) =>{
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/edit-master_2/src/views/Icons/aa.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));



    }

    handleSubmit1=(event) =>{
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/edit-master_2/src/views/Icons/AddListTeacher.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

    }

    handleSubmit2=(event) =>{
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/edit-master_2/src/views/Icons/view.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

    }
    handleSubmit3=(event) =>{
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/edit-master_2/src/views/Icons/R.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

    }
    handleSubmit4=(event) =>{
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/edit-master_2/src/views/Icons/Rall.php`, this.state)
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
                <GridContainer>
                    <form action="aa.php" onSubmit={this.handleSubmit}>
                        <GridItem xs={12} sm={12} md={8}>
                            <Card>
                                <CardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite}>Add A  Teacher</h4>
                                    <p className={classes.cardCategoryWhite}></p>
                                </CardHeader>
                                <CardBody>
                                    <GridContainer>

                                        <InputForm inputType="text" inputKey="fname" inputLabel="Teacher First Name:" updateInput={this.updateInput} />
                                        <InputForm inputType="text" inputKey="mname" inputLabel="Teacher Mid  Name:" updateInput={this.updateInput} />
                                        <InputForm inputType="text" inputKey="lname" inputLabel="Teacher Last Name:" updateInput={this.updateInput} />
                                        <InputForm inputType="number" inputKey="id_t" inputLabel="Teacher ID:" updateInput={this.updateInput} />

                                        <InputForm inputType="number" inputKey="id" inputLabel="class ID:" updateInput={this.updateInput} />

                                        <InputForm inputType="password" inputKey="pwd" inputLabel="Password" updateInput={this.updateInput} />
                                        <InputForm inputType="date" inputKey="DateofBirth" inputLabel="Date of Birth :" updateInput={this.updateInput} />


                                        <InputForm inputType="text" inputKey="sub" inputLabel="Subject : " updateInput={this.updateInput} />


                                        <InputForm inputType="text" inputKey="address" inputLabel="Address : " updateInput={this.updateInput} />

                                        <InputForm inputType="number" inputKey="phone" inputLabel="Phone : " updateInput={this.updateInput} />

                                    </GridContainer>
                                </CardBody>
                                <CardFooter>
                                    <Button color="primary" name="Add" type="submit" value="Add">Add</Button>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    </form>
                </GridContainer>

                <GridContainer>
                <form  >
                    <GridItem xs={12} sm={12} md={50}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Add List Of  Teachers</h4>
                                <p className={classes.cardCategoryWhite}></p>
                            </CardHeader>
                            <CardBody>
                                <GridContainer >
                             
                                
                                <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                                        <inputLabel  style={{ color: "#AAAAAA", alignContent: "Center" }}>Select List Of Teachers : </inputLabel>
                                    </GridItem>
                                    <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                                       
                                        <input id="file"  class="col-md-4" type="file" color="primary" name="file" class="input-large"/>
                                    </GridItem>

                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                            <form onSubmit={this.handleSubmit1}  action="AddListTeacher.php" enctype="multipart/form-data" method="post">
                                <Button   color="primary" name="sub" type="submit" value="Add">Add</Button>
                          </form>
                            
                                <Button    color="primary" name="View" type="submit" value="View">View</Button>
                              
                            </CardFooter>
                        </Card>
                    </GridItem>
                </form>
               
              
                </GridContainer>

                <GridContainer>
                <form  onSubmit={this.handleSubmit3}>
                    <GridItem xs={12} sm={12} md={8}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Remove  Teacher/Teachers</h4>
                                <p className={classes.cardCategoryWhite}></p>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                      
                                    <InputForm inputType="number" inputKey="id_t" inputLabel="Enter The TeacherID :" updateInput={this.updateInput} />
                                    <InputForm inputType="text" inputKey="lname" inputLabel="Enter The Teacher Last Name :" updateInput={this.updateInput} />
                                        

                                </GridContainer>

                            </CardBody>
                            <CardFooter>
                            <form action="R.php" onSubmit={this.handleSubmit3}>
                                <Button  name="Remove" type="submit" value="Remove" color="primary">Remove A Teacher !</Button>
                            </form>
                            <form action="Rall.php" onSubmit={this.handleSubmit4}>
                                <Button   name="RemoveAll" type="submit" value="Remove" color="primary">Remove All Teachers !</Button>
                                </form>
                                    </CardFooter>
                        </Card>
                    </GridItem>
</form>
                </GridContainer>

            </div>
        );
    }




    //Icons.propTypes = {
    //    classes: PropTypes.object.isRequired
    //};
}
    export default withStyles(iconsStyle)(Icons);

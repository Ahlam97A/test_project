import AppBar from '@material-ui/core/AppBar';
import TabPanel from '@material-ui/core/Tab';
import TabList from '@material-ui/core/Tab';
import TabLink from '@material-ui/core/Tab';
import TabContent from '@material-ui/core/Tab';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from "@material-ui/core/styles/withStyles";

import React from "react";

import Danger from "components/Typography/Danger.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Card from "components/Card/Card.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Info from "components/Typography/Info.jsx";
import CardBody from "components/Card/CardBody.jsx";

import InputForm from "views/Typography/InputForm.jsx";

import Muted from "components/Typography/Muted.jsx";
import Quote from "components/Typography/Quote.jsx";
import Warning from "components/Typography/Warning.jsx";
import Success from "components/Typography/Success.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Primary from "components/Typography/Primary.jsx";
import Button from "components/CustomButtons/Button.jsx";
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
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(response => response.text()); // parses response to JSON
}





//function TypographyPage(props) {
class TypographyPage extends React.Component {
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

  handleSubmit(event) {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    postData(`http://localhost/edit-master_2/src/views/Typography/a.php`, this.state)
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

        <form action="a.php" onSubmit={this.handleSubmit}>
          <GridItem xs={12} sm={12} md={10}>
            <Card>
              <CardHeader color="primary">
                <h3 className={classes.cardCategoryWhite}>Student Page</h3>
                <h4 className={classes.cardTitleWhite}>Add A Student </h4>
              </CardHeader>
              <CardBody>
                <GridContainer> 

                  <InputForm inputType="text" inputKey="name" inputLabel="Student Name:" updateInput={this.updateInput}/>

                  <InputForm inputType="number" inputKey="id_st" inputLabel="Student ID:" updateInput={this.updateInput}/>

                  <InputForm inputType="number" inputKey="id" inputLabel="class ID:" updateInput={this.updateInput}/>

                  <InputForm inputType="password" inputKey="pwd" inputLabel="Password" updateInput={this.updateInput}/>
                  <InputForm inputType="date" inputKey="DateofBirth" inputLabel="Date of Birth :" updateInput={this.updateInput}/>
                  
                  
                  <InputForm inputType="number" inputKey="p_id" inputLabel="Parant Id : " updateInput={this.updateInput}/>
                  <InputForm inputType="password" inputKey="p_pwd" inputLabel="Parant Password : " updateInput={this.updateInput}/>

                  <InputForm inputType="text" inputKey="address" inputLabel="Address : " updateInput={this.updateInput}/>

                  <InputForm inputType="number" inputKey="phone" inputLabel="Phone : " updateInput={this.updateInput}/>
                  
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
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={this.cardTitleWhite}>Add List Of Students</h4>
              <p className={this.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
                  <InputLabel style={{ color: "#000", alignContent: "Center" }}>Select List Of Students: </InputLabel>
                </GridItem>
                <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
                  <input color="primary" type="file" name="fileToUpload" id="fileToUpload"></input>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Add</Button>
              <Button color="primary">View</Button>
            </CardFooter>
          </Card>
        </GridItem>

      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={this.cardTitleWhite}>Remove  Student/Students</h4>
              <p className={this.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
                  <InputLabel style={{ color: "#000", alignContent: "Center" }}>Enter The StudentID : </InputLabel>
                </GridItem>
                <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
                  <input style={{ width: "100%", alignContent: "Center", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} type="text" name="id" />
                </GridItem>
                <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
                  <InputLabel style={{ color: "#000", alignContent: "Center" }}>Enter The Students Name : </InputLabel>
                </GridItem>
                <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
                  <input style={{ width: "100%", alignContent: "Center", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} type="text" name="name" />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Remove A Student !</Button>
              <Button color="primary">Remove All Students !</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
  }
}

export default withStyles(style)(TypographyPage);


import React, { useState } from "react";
import Input from "../../components/inputcomponent/Input";
import { Form } from "react-bootstrap";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CommonButton from "../../components/commonButton/Button";
import "./SigninStyles.css";
import { useHistory } from "react-router-dom";
import * as _ from "lodash";
import { connect } from "react-redux";

const SignIn = (props) => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [validated, setValidated] = useState(false);
  const history = useHistory();


  const signIn = (e) => {
    
      const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true) {
        console.log("in signin");
        props.signIn({userName,password, navigation:history})
       
    }
    
  };
  return (
    <Container maxWidth="sm">
      <Card className="signinarea">
        <Form className="signincontainer" noValidate autoComplete="off" validated={validated}
        onSubmit={signIn}
        >
          <Input
            type="text"
            placeholder="UserName"
            onChange={(e) => setuserName(e.target.value)}
            required={true}
            error='Enter UserName'
          />

          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
            required={true}
            error='Enter Password'
          />

<div style={{marginLeft: '30%'}}>
          <CommonButton
            name="Sign In"
            color="secondary"
            type="submit"
           // onClick={()=>signIn()}
          />
          </div>
        </Form>
      </Card>
    </Container>
  );
};


  const mapDispatchToProps = (dispatch) => ({
    signIn: (data) => dispatch({ type: "SignIncalled", payload: data }),

  });
  
  export default connect(null, mapDispatchToProps)(SignIn);


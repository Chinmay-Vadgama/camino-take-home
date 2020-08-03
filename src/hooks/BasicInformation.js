import React,{useState,useEffect, Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

const useStyles = makeStyles((theme)=>({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: theme.spacing(3),
      alignContent:'center',
    },
    fields:{
      margin:'auto',
    }
  }));

const loanPurposes = [
    "Personal Loan",
    "Education Loan",
    "Housing Loan",
    "Car Loan",
    "Bussiness Loan"
]
const BasicInformation = () => {
    const classes = useStyles();
    const [fname, setFname] = useState("");
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [ownsBussiness,setOwnsBussiness] = useState(true);
    const [bussinessName,setBussinessName] = useState("");
    const [loanAmount,setLoanAmount] = useState(0);
    return (
        <div>
            <h1>Basic Information </h1>
            <h3>Tell us little bit about yourself and your business loan needs</h3>

            <form className={classes.container} noValidate autoComplete="off">
              |<div className={classes.fields}>
              <TextField
                id="fname"
                label="First Name"
                required
                className={classes.textField}
                value={fname}
                onChange={setFname}
                margin="normal"
                variant="outlined"
                />
                <br />
                <TextField
                  id="lname"
                  label="Last Name"
                  required
                  className={classes.textField}
                  value={lname}
                  onChange={setLname}
                  margin="normal"
                  variant="outlined"
                  />
                <br />
                <TextField
                  id="email"
                  label="Email"
                  required
                  className={classes.textField}
                  value={email}
                  onChange={setEmail}
                  margin="normal"
                  variant="outlined"
                  />
                  <br />
                <TextField
                  id="email"
                  label="Email"
                  required
                  className={classes.textField}
                  value={email}
                  onChange={setEmail}
                  margin="normal"
                  variant="outlined"
                  />
                <br/>
                <TextField
                id="email"
                label="Email"
                required
                className={classes.textField}
                value={email}
                onChange={setEmail}
                margin="normal"
                variant="outlined"
                />
              </div>
            </form>

        </div>
    )
}

export default BasicInformation
import React,{useState,useEffect, Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import {Radio, RadioGroup, FormControl, FormLabel, Select, FormHelperText} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { sizeWidth } from '@material-ui/system';



const useStyles = makeStyles((theme)=>({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: theme.spacing(3),
      alignContent:'center',
    },
    fields:{
      margin:'auto',
    },
    textField: {
      width: 'auto'
    },
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
                style = {{width: 700}}
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
                  style = {{width: 700}}
                  />
                <br />
                <TextField
                  id="email"
                  label="Best Contact Email"
                  required
                  className={classes.textField}
                  fullWidth={true}
                  value={email}
                  onChange={setEmail}
                  margin="normal"
                  variant="outlined"
                  style = {{width: 700}}
                  />
                  <br />
                <TextField
                  id="phone"
                  label="Mobile Phone Number"
                  required
                  className={classes.textField}
                  value={email}
                  onChange={setMobile}
                  margin="normal"
                  variant="outlined"
                  style = {{width: 700}}
                  />
                <br/>
                <div align='left'>
                <FormControl component="fieldset">
                <FormLabel component="legend">Do you own business?</FormLabel>
                <RadioGroup aria-label="business" name="businessown" onChange={setOwnsBussiness} defaultValue={"Yes"}>
                  <FormControlLabel value="Yes" control={<Radio/> } label="Yes"/>
                  <FormControlLabel value="No" control={<Radio/>} label="No" />
                </RadioGroup>
              </FormControl>
                </div>
                <br/>
                <TextField
                id="BusinessName"
                label="Business Name"
                required
                className={classes.textField}
                value={email}
                onChange={setEmail}
                margin="normal"
                variant="outlined"
                style = {{width: 700}}
                />
                <br/>
                <TextField
                id="LoanAmount"
                label="Desired Loan Amount"
                required
                className={classes.textField}
                value={email}
                onChange={setEmail}
                margin="normal"
                variant="outlined"
                style = {{width: 700}}
                />
                <br/>
                <div align='left'>
                <FormControl className={classes.formControl}>
                <Select
                  onChange={setLoanAmount}
                  displayEmpty
                  className={classes.selectEmpty}
                  inputProps={{ 'aria-label': 'Without label' }}
                  defaultValue={'fp'}
                >
                  <MenuItem value={'np'}>Non Profit</MenuItem>
                  <MenuItem value={'fp'}>For Profit</MenuItem>
                  <MenuItem value={'misc'}>Misc</MenuItem>
                </Select>
                <FormHelperText>Purpose of Loan</FormHelperText>
              </FormControl>
              </div>
                <br/>
                <div align='left'>
                <FormControl component="fieldset">
                <FormLabel component="legend">Have you been in business for atleast 9 months?</FormLabel>
                <RadioGroup aria-label="business" name="businessown" onChange={setOwnsBussiness} defaultValue={"Yes"}>
                  <FormControlLabel value="Yes" control={<Radio/> } label="Yes"/>
                  <FormControlLabel value="No" control={<Radio/>} label="No" />
                </RadioGroup>
              </FormControl>
                </div>

              </div>
            </form>

        </div>
    )
}

export default BasicInformation
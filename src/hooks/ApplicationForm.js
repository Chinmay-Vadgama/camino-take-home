/**
 * @author Chinmay Vadgama
 * @description This is the main Application form with 3 step process
 */

/********************* Import ***************************/
import React,{useState,useEffect, Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import BasicInformation from './BasicInformation';
import Step2 from './Step2'
import Step3 from './Step3'
import Box from "../stylecomponents/Box";
import SuccessAlertMessage from "../alertsMessages/SuccessAlert";
import Toggle from '../ToggleRenderProps'
/********************************************************/


const steps = ['Basic Information', 'Step 2', 'Step 3'];
const useStyles = makeStyles((theme)=>({
    appBar:{
        position:'relative',
        backgroundColor:"#1f403b",    
    },
    stepName:{
        paddingLeft:20,
        fontSize:24,
        textAlign:"left",
    },
    box:{
        backgroundColor: "#434545",
        
        display:"inline",
    }
}));



const ApplicationForm = () => {
    
    const classes = useStyles();
    const [activeStep,setActiveStep] = useState(0);
    const [isValid, setIsValid] = useState(true)
    console.log('before',isValid)
    const nextStep = () =>{
        setActiveStep(activeStep + 1);
        
    };

    const previousStep = () => {
        setActiveStep(activeStep - 1);
    };  


    var getStepContent = (step) => {
        switch(step){
            case 0:
                return <BasicInformation props={isValid => setIsValid(isValid)}/>
                console.log('after',isValid)
            case 1:
               
                return <Step2/>
            case 2:
                
                return <Step3/>
            case 3:
                
                return <SuccessAlertMessage message="Application Submitted Successfully!" step={()=> setActiveStep(0)}/>
            default:
                
                throw new Error('Invalid Step Value');
        }
        
    }

    return (
        <Fragment>
            <CssBaseline/>
            <AppBar position="absolute" color='default' className={classes.appBar}>
                <Toolbar>
                    <img src="CaminoLogo.png"/>
                </Toolbar>
                <div>
                    <Toggle render={ ({on, toggle}) => (
                        <div align='right'>
                            {on && 
                            <div align='center'>
                                <h3> Need Help? Call or chat with us directly</h3>
                                <div>
                                <button style={{color:'White', backgroundColor:'#1f403b', borderColor:'#1f403b', fontSize:'20px'}}> CALL </button>
                                <button style={{color:'White', backgroundColor:'#1f403b', borderColor:'#1f403b', fontSize:'20px'}}> EMAIL </button>
                                </div>
                                
                            </div>}
                            <button onClick={toggle} style={{color:'White', backgroundColor:'#1f403b', borderColor:'#1f403b', fontSize:'20px'}}>Help Open/Close</button>
                        </div>
                    )
                    }/>
                </div>
            </AppBar>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    
                    <Grid container spacing={1}>
                        <Grid item xs={6} >
                            <p className={classes.stepName}> Step { activeStep + 1 <= steps.length ? activeStep+1 : 1} : {steps[activeStep]}</p>    
                        </Grid>
                        <Grid item xs={6} >
                            <h3>Step { activeStep + 1 <= steps.length ? activeStep+1 : 0} of { steps.length }</h3>
                            {steps.map((label,index) => {
                                var style = {
                                    backgroundColor: "#949c9c"
                                    };
                                if(activeStep == index){
                                    style = {
                                        backgroundColor: "#1f403b"
                                    };
                                }
                                return (<Box px={2} mx={0.5} className={classes.box} style={style}/>);
                            })}
                        </Grid>
                    </Grid>
                    
                    {/* Dynamic Fragments */}
                    <Fragment>
                        {getStepContent(activeStep)}
                        <div className={classes.button}>
                            {activeStep !== 0 && (
                                <Button onClick={previousStep} className={classes.button}>
                                    Back
                                </Button> 
                            )}
                            <Button
                            variant="contained"
                            color="primary"
                            onClick={nextStep}
                            disabled={isValid}
                            className={classes.button}>
                                {activeStep === steps.length-1 ? "Submit Application!":"Next"}
                            </Button>
                        </div>
                    </Fragment>             

                </Paper>
            </main>
        </Fragment>
        
    )
}
export default ApplicationForm


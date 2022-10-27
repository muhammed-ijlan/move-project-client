import React, { useState } from 'react'

import { CssBaseline, Container, Button, Paper, Box, Stepper, Step, StepLabel, Typography, TextField } from "@mui/material"

function StepperComponent() {
    const [activeStep, setActiveStep] = useState(0)
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(activeStep + 1)
    }
    const handlePrev = () => {
        setActiveStep(activeStep - 1)
    }

    // 
    function getSteps() {
        return [
            "Basic Information",
            "Contact Information",
            "Personal Information",
            "Payment Information"
        ]
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <>
                        <TextField
                            id="first-name"
                            label="First Name"
                            variant="outlined"
                            placeholder="Enter Your First Name"
                            fullWidth
                            margin="normal"
                            name="firstName"
                        />
                        <TextField
                            id="last-name"
                            label="Last Name"
                            variant="outlined"
                            placeholder="Enter Your Last Name"
                            fullWidth
                            margin="normal"
                            name="lastName"
                        />
                        <TextField
                            id="nick-name"
                            label="Nick Name"
                            variant="outlined"
                            placeholder="Enter Your Nick Name"
                            fullWidth
                            margin="normal"
                            name="nickName"
                        />
                    </>
                )
            case 1:
                return (
                    <>
                        <TextField
                            id="email"
                            label="E-mail"
                            variant="outlined"
                            placeholder="Enter Your E-mail Address"
                            fullWidth
                            margin="normal"
                            name="emailAddress"
                        />
                        <TextField
                            id="phone-number"
                            label="Phone Number"
                            variant="outlined"
                            placeholder="Enter Your Phone Number"
                            fullWidth
                            margin="normal"
                            name="phoneNumber"
                        />
                        <TextField
                            id="alternate-phone"
                            label="Alternate Phone"
                            variant="outlined"
                            placeholder="Enter Your Alternate Phone"
                            fullWidth
                            margin="normal"
                            name="alternatePhone"
                        />
                    </>
                )

            case 2:
                return (
                    <>
                        <TextField
                            id="address1"
                            label="Address 1"
                            variant="outlined"
                            placeholder="Enter Your Address 1"
                            fullWidth
                            margin="normal"
                            name="address1"
                        />
                        <TextField
                            id="address2"
                            label="Address 2"
                            variant="outlined"
                            placeholder="Enter Your Address 2"
                            fullWidth
                            margin="normal"
                            name="address2"
                        />
                        <TextField
                            id="country"
                            label="Country"
                            variant="outlined"
                            placeholder="Enter Your Country Name"
                            fullWidth
                            margin="normal"
                            name="country"
                        />
                    </>
                )

            case 3:
                return (
                    <>
                        <TextField
                            id="cardNumber"
                            label="Card Number"
                            variant="outlined"
                            placeholder="Enter Your Card Number"
                            fullWidth
                            margin="normal"
                            name="cardNumber"
                        />
                        <TextField
                            id="cardMonth"
                            label="Card Month"
                            variant="outlined"
                            placeholder="Enter Your Card Month"
                            fullWidth
                            margin="normal"
                            name="cardMonth"
                        />
                        <TextField
                            id="cardYear"
                            label="Card Year"
                            variant="outlined"
                            placeholder="Enter Your Card Year"
                            fullWidth
                            margin="normal"
                            name="cardYear"
                        />
                    </>
                )

            default: return "Unknown step"
        }
    }

    return (
        <div style={{ height: "100vh" }}>
            <CssBaseline />
            <Container component={Box}>
                <Paper p={3} component={Box}>
                    <div>

                        {activeStep === 4 ?
                            <Typography align='center' variant='h3'>ThankYou!</Typography> :
                            <>
                                <Stepper activeStep={activeStep}>
                                    {
                                        steps.map((step, index) => (
                                            <Step>
                                                <StepLabel>{step}</StepLabel>
                                            </Step>
                                        ))
                                    }

                                </Stepper>
                                <form>
                                    {getStepContent(activeStep)}
                                </form>
                                <Button disabled={activeStep === 0} onClick={handlePrev} variant='outlined'>Back</Button>
                                <Button onClick={handleNext} variant='outlined'>{activeStep === 3 ? "Finish" : "Next"}</Button>
                            </>
                        }
                    </div>
                </Paper>
            </Container>
        </div>
    )
}

export default StepperComponent;
import React, { useState } from "react";
import Stepper from "./Controls/Stepper";
import StepperControl from "./Controls/StepperControl";
import Complete from "./Steps/Complete";
import CKUserDetails from "./Steps/CKUserDetails";
import Payment from "./Steps/Payment";
import Preview from "./Steps/Preview";
import { UseContextProvider } from "../../Hooks/StepperContext";
import CKShippingDetails from "./Steps/CKShippingDetails";
// import ApplicationPreview from "./Steps/ApplicationPreview";



const CheckoutStep = () => {


    const steps = [
        "User Details",
        "Shipping Details",
        "Payment",
    ];

    const [currentStep, setCurrentStep] = useState(1);

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <CKUserDetails />;
            case 2:
                return <CKShippingDetails />;
            case 3:
                return <Payment />;
            default:
        }
    };

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);

    };

    return (
        <div className="w-full h-full mx-auto">

            <div className="h-full w-full">
                <div className="card-body w-full">
                    {/* <h1 className="text-white text-2xl font-bold text-center"> Please Choose Your Coffee </h1> */}
                    {/* Stepper */}
                    <div className="pb-0 px-5 lg:px-0 w-full md:w-3/5 mx-auto">
                        <Stepper steps={steps} currentStep={currentStep} />
                    </div>
                    <div className="mx-auto p-5 md:w-5/6">
                        {/* Display Step */}
                        <div className="horizontal container mt-2 ">

                            <div className="my-0 p-7 ">
                                <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                            </div>
                        </div>

                        {/* navigation button */}
                        {currentStep !== steps.length && (
                            <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
                        )}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CheckoutStep;
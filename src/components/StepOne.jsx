import React, {useState, useContext } from "react";
import { Formik } from "formik";
import { Button, Select } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";


const Details = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  // get details, setDetails and next from the MultiStepFormContext
  const { details, setDetails, next, setValues } = useContext(MultiStepFormContext);
  const [isCountryError, setIsCountryError] = useState(false);

    const handleChange = (e, { setFieldValue }) => {
      const { name } = e.target;
      // if(!selectedCountry){
      //   setIsCountryError(true)
      //  } else {
      //   setIsCountryError(false)
      //  }
       const updatedValue =
        e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    
      setFieldValue(name, updatedValue);
    
      setDetails((prevDetails) => ({
        ...prevDetails,
        [name]: updatedValue,
      }));
    };

  return (<>
    <Formik
      // set the initial values of the form
      initialValues={{ ...details, }}
      // handle form submission
      onSubmit={(values, { resetForm, setSubmitting }) => {
        if (!selectedCountry) {
          setIsCountryError(true);
          return;
        }else{
          setIsCountryError(false);
        }

        setDetails(values);
        console.log(details);
        // return;
        setSubmitting(false);
        next();
      }}
      
      
      
      // validate the form fields
      validate={(values) => {
        const errors = {};
        if (!values.campaignname) errors.campaignname = "Name is required";
        else if (!/^[a-zA-Z\s]+$/.test(values.campaignname))
          errors.campaignname = "Name should only contain alphabets and spaces";
        return errors;
       }}
    >
      {({ handleSubmit,values, errors,isSubmitting ,setFieldValue}) => (
        <div className={"details__wrapper"}>
          <div className="container-fluid d-flex justify-content-center mt-5">
            <div className="w-100">
              <div className={`form_item ${errors.campaignname && "input_error"}`}>
                <div className="row mb-3">
                  <label className="col-sm-4 col-form-label d-flex justify-content-end">
                    Campaign Name* :
                  </label>
                  <div className={`col-sm-8 d-flex row ${errors.campaignname && "input_error"}`}>
                  <Input
                   name={"campaignname"}
                   style={{ borderColor: errors.campaignname ? 'red' : '#d9d9d9' }}
                   className={`w-75 ${errors.campaignname && "input_error"}`}
                   value={values.campaignname}
                   onChange={(e) => { handleChange(e, { setFieldValue })}}                
                    />
                  <div className="col-sm-8 d-flex align-items-center justify-content-center error__feedback" style={{ textAlign: 'center',color:"red" }}>
                   {errors.campaignname}
                  </div>

                 </div>
                </div>

                <div className="">
                  <div className="row mb-3">
                    <label className=" col-sm-4 col-form-label d-flex justify-content-end">
                      Country *
                    </label>
                    <div className="col-sm-8 d-flex row">
                      <select
                        class="form-select w-75"
                        aria-label="Default select example"
                        name={"country"}  
                        // value={selectedCountry} 
                        value={values.country}
                        onChange={(e) => { setSelectedCountry(e.target.value);
                          handleChange(e, { setFieldValue })
                          setIsCountryError(false);
                        }}
                       style={{ borderColor: isCountryError ? 'red' : '#d9d9d9' }}
                       >
                       <option value="" disabled selected> Select Country </option>
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>
                      </select>

                      {isCountryError &&
                       <div className="col-sm-8 d-flex align-items-center justify-content-center error__feedback" style={{ textAlign: 'center',color:"red" }}>
                         Country is required
                        </div> }
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "form_item button_items d-flex justify-content-center"
                  }
                >
                  <Button
                    className="mt-4"
                    type={"primary"}
                    onClick={handleSubmit}
                  >
                    Save And Contine
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>

  </>);
};

export default Details;

import React, {useState, useContext, useEffect } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import axios from "axios";
import { BASE_API } from "../helper/Constants";
// Define a component named "Address"
const Address = () => {
  const [selectedPublisher, setSelectedPublisher] = useState('');
  // Get "address", "setAddress", "next", and "prev" from MultiStepFormContext using useContext hook
  const { address, setAddress, next, prev } = useContext(MultiStepFormContext);
  const [publishersName, setPublishersName] = useState([])
  const [isPublisherError, setIsPublisherError] = useState(false);
  

   useEffect( () => {

    const fetchData = async() =>{
      const res = await axios.get(BASE_API+"api/get-publisher");
      // console.log(res.data.data)
      setPublishersName(res.data.data);
    }
    fetchData();
   },[])

   const handleChange = (e, { setFieldValue }) => {
    const { name } = e.target;
  
    // Update the form values based on the input type
    const updatedValue =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  
    setFieldValue(name, updatedValue);
  
    setAddress((prevDetails) => ({
      ...prevDetails,
      [name]: updatedValue,
    }));
  };
 
   
  // Render a Formik form that manages state, validation, and submission of form data
  return (
    <Formik 
      // Set initial values of the form fields to "address"
      initialValues={{ ...address,}}
      // Define what happens when the form is submitted
      onSubmit={(values, { resetForm, setSubmitting }) => {
        // Update the "address" state with the submitted form data
        if (!values.Publisher_id) {
          setIsPublisherError(true);
          return;
          // errors.Publisher_id = "Publisher is required";
        } else {
          setIsPublisherError(false);
        }
        setAddress(values);
        console.log(address)
        // return;
        next();
        resetForm();
       
         setSubmitting(false);
      }}
      validate={(values) => {
        const errors = {};
        if (!values.TollFreeNumber) errors.TollFreeNumber = "Phone number is required";
        else if (!/^(\+?\d{1,3}\s?)?(\d{10})$/.test(values.TollFreeNumber))
          errors.TollFreeNumber =
            "Phone number must be 10 digits with an optional country code";

          
        return errors;
      }}
    >
      {({ handleSubmit,setFieldValue,values, errors }) => {
        // Render the form using the Ant Design framework
        return (
          <div className={"details__wrapper"}>
            <div className="container-fluid d-flex justify-content-center mt-5" >
              <div className="w-100">
                <div>
                  <div className={`form_item ${errors.TollFreeNumber && "input_error"}`}>
                    <div className="row mb-3" >
                      <label className="col-sm-4 col-form-label d-flex justify-content-end">Toll Free Number * :</label>
                      <div className="col-sm-8 d-flex row ">
                        <Input type="Number" name={"TollFreeNumber"} 
                          className="w-75"
                          value={values.TollFreeNumber}
                          onChange={(e) => { handleChange(e,{setFieldValue})}}
                          style={{ borderColor: errors.TollFreeNumber ? 'red' : '#d9d9d9' }} 
                          />
                        <div className="col-sm-8 d-flex align-items-center justify-content-center error__feedback" style={{ textAlign: 'center',color:"red" }}>
                             {errors.TollFreeNumber}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`form_item ${errors.state && "input_error"}`}>
                    <div className="row mb-3" >
                      <label className="col-sm-4 col-form-label d-flex justify-content-end">Publisher*:</label>
                      <div className="col-sm-8 d-flex row ">
                      <select
                       class="form-select w-75"
                       aria-label="Default select example"
                       name="Publisher_id"
                       value={values.Publisher_id}
                       onChange={(e) => {
                        setSelectedPublisher(e.target.value);
                        handleChange(e, { setFieldValue });
                        setIsPublisherError(false);
                      }}
                      style={{ borderColor: isPublisherError ? 'red' : '#d9d9d9' }}
                    >

                           <option value="" disabled selected>
                             Select Publisher
                           </option>
                       {publishersName.map((item, index) => (
                          <option key={index} value={item.publisher_id}>
                             {item.name}
                           </option>
                          ))}
                        </select>
                        {isPublisherError &&
                       <div className="col-sm-8 d-flex align-items-center justify-content-center error__feedback" style={{ textAlign: 'center',color:"red" }}>
                         Publisher is required
                        </div> }
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div
                      className={
                        "form_item button_items d-flex justify-content-center"
                      }
                    >
                      {/* Render a "Next" button that submits the form data and moves to the next step in the form */}
                      <Button type={"primary"} onClick={handleSubmit}>
                      Save And Contine
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Address;
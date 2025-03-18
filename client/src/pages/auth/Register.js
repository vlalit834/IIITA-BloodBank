import React from "react";
import Form from "../../components/Shared/Form/Form";
function Register() {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          {/* <img src="./assets/images"/> */}
        </div>
        <div className="col-md-4 form-container">
          <Form formTitle={"Register"} submitBtn={"Register"} formType={"Register"}/>
        </div>
      </div>
    </>
  );
}

export default Register;

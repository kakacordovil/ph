import { ErrorRequestHandler } from 'express';
//import { ValidationError } from 'yup';

//interface ValidationErrors {
 // [key:string]: string[];
//}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  //***** ERROR FOR VALIDATION */
  //if (error instanceof ValidationError) {
    //let errors: ValidationErrors = {};

      //errors.inner.forEach(err => {
      //  errors[err.] = err.errors;
    //  });
    
    //return response.status(400).json({message: 'Validation fails', errors});
  //}
  
  console.error(error);

  return response.status(500).json({message: 'Internal server erros'});
};

export default errorHandler;
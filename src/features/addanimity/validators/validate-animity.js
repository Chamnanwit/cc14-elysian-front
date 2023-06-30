import Joi from 'joi';

const animitySchema = Joi.object({
    name: Joi.string().trim().required().messages({
        'string.empty': 'กรุณากรอกชื่อสิ่งอำนวยความสะดวก',
    }),
    
});
  
  const validateAnimity = input => {
    const { error } = animitySchema.validate(input, { abortEarly: false });
    if (error) {
      return error.details.reduce((acc, el) => {
        acc[el.path[0]] = el.message;
        return acc;
      }, {});
    }
  };
  
  export default validateAnimity;
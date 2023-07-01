import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).messages({
    'string.empty': 'กรุณากรอกอีเมล',
    'string.email': 'รูปแบบอีเมลไม่ถูกต้อง'
  }),
  password: Joi.string().trim().required().messages({
    'string.empty': 'กรุณากรอกรหัสผ่าน',
  })
});

const validateLogin = (input) => {
    const { error } = loginSchema.validate(input, { abortEarly: false });
    if (error) {
      return error.details.reduce((acc, el) => {
        acc[el.path[0]] = el.message;
        return acc;
      }, {});
    }
  };
  
  export default validateLogin;


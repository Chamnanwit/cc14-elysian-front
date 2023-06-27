import Joi from "joi";

const registerAdminSchema = Joi.object({
    firstName: Joi.string().trim().required().messages({
      "string.empty": "กรุณากรอกชื่อ",
    }),
    lastName: Joi.string().trim().required().messages({
      "string.empty": "กรุณากรอกนามสกุล",
    }),
    email: Joi.string().email({ tlds: false }).messages({
       "string.empty": "กรุณากรอกอีเมล",
       'string.email': 'รูปแบบอีเมลไม่ถูกต้อง'
    }),
    taxId: Joi.string().pattern(new RegExp("^[0-9]{13}$")).required().messages({
        "string.empty": "กรุณากรอกเลขบัตรประชาชน",
        "string.pattern.base": "กรุณากรอกเป็นตัวเลข 13 หลักเท่านั้น",
    }),
    phoneNumber: Joi.string()
      .pattern(new RegExp("^[0-9]{10}$"))
      .required()
      .messages({
        "string.empty": "กรุณากรอกเบอร์โทรศัพท์",
        "string.pattern.base":
          "กรุณากรอกเป็นตัวเลข 10 หลักเท่านั้น",
    }),
    password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required()
    .messages({
      'string.empty': 'กรุณากรอกรหัสผ่าน',
      'string.pattern.base':
        'รหัสผ่านต้องมีอย่างน้อย 6 ตัว แต่ไม่เกิน 30 ตัว และเป็นตัวเลขหรือตัวอักษรภาษาอังกฤษเท่านั้น'
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).messages({
        'any.only': 'รหัสผ่านไม่ตรงกัน',
        'string.empty': 'กรุณากรอกยืนยันรหัสผ่าน',
    })
    
  });
  const validateRegisterAdmin = (input) => {
    const { error } = registerAdminSchema.validate(input, { abortEarly: false });
    if (error) {
      return error.details.reduce((acc, el) => {
        acc[el.path[0]] = el.message;
        return acc;
      }, {});
    }
  };
  
  export default validateRegisterAdmin;
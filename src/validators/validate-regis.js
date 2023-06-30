import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรอกชื่อ",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรอกนามสกุล",
  }),
  phoneNumber: Joi.string()
    .pattern(new RegExp("^[0-9]{10}$"))
    .required()
    .messages({
      "string.empty": "กรุณากรอกหมายเลขโทรศัพท์",
      "string.pattern.base":
        "หมายเลขโทรศัพท์จะต้องเป้นหมายเลขและมีจำนวน 10 หลัก",
    }),
  taxId: Joi.string().pattern(new RegExp("^[0-9]{13}$")).required().messages({
    "string.empty": "กรุณากรอกเลขบัตรประชาชน",
    "string.pattern.base": "หมายเลขบัตรประชาชนจะเป็นตัวเลขและมีจำนวน 13 หลัก.",
  }),
});
const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};

export default validateRegister;

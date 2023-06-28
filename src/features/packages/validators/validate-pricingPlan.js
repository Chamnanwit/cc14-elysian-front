import Joi from "joi";

const pricingPlanSchema = Joi.object({
  planType: Joi.string().trim().required().messages({
    "string.empty": "กรุณาเลือกประเภทแพ็คเกจ",
  }),
  price: Joi.number().precision(2).required().messages({
    "number.base": "กรุณากรอกเป็นตัวเลขเท่านั้น",
    "number.precision": "กรุณากรอกตัวเลขทศนิยมไม่เกิน 2 ตำแหน่ง",
  }),
  name: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรอกชื่อแพ็คเกจ",
  }),
  expiration: Joi.string().trim().required().messages({
    "string.empty": "กรุณาเลือกรูปแบบแพ็คเกจ",
  }),
  limit: Joi.number().integer().required().messages({
    "number.base": "กรุณากรอกเป็นตัวเลขเท่านั้น",
    "number.empty": "กรุณากรอกจำนวนประกาศแบบธรรมดา",
  }),
  numberOfTop: Joi.number().integer().messages({
    "number.base": "กรุณากรอกเป็นตัวเลขเท่านั้น",
    "number.empty": "กรุณากรอกจำนวนประกาศแบบจัดอันดับ",
  }),
  locked: Joi.boolean().required().messages({
    "boolean.base": "กรุณาเลือกสถานะการใช้งาน",
    "any.required": "กรุณาเลือกสถานะการใช้งาน",
  }),
});

const validatePricingPlan = (input) => {
  const { error } = pricingPlanSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};

export default validatePricingPlan;

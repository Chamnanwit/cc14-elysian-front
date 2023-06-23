import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "First name is required.",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "Last name is required.",
  }),
  phoneNumber: Joi.string()
    .pattern(new RegExp("^[0-9]{10}$"))
    .required()
    .messages({
      "string.empty": "Your phone namber is required",
      "string.pattern.base":
        "Phone namber must be at least 10 characters and contain only number",
    }),
  taxId: Joi.string().pattern(new RegExp("^[0-9]{13}$")).required().messages({
    "string.empty": "TaxId is required",
    "string.pattern.base":
      "Password must be at least 13 characters and contain only number.",
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

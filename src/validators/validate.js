import Joi from "joi";

export default function validateRegistration(data) {
  const schema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(16).required(),
    lastName: Joi.string().alphanum().min(3).max(16).required(),
    phoneNumber: Joi.string().pattern(new RegExp("^[0-9]{10}$")).required(),
    taxId: Joi.string().pattern(new RegExp("^[0-9]{13}$")).required(),
  });
  const { error } = schema.validate(data);

  if (error) {
    const errors = {};
    for (let detail of error.details) {
      errors[detail.context.key] = detail.message;
    }
    return errors;
  }

  return null;
}

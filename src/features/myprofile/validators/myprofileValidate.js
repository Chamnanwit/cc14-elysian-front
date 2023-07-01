import Joi from "joi";

const myProfileSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรอกชื่อ",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "กรุณากรอกนามสกุล",
  }),
});

const validateMyProfile = (input) => {
  const { error } = myProfileSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};

export default validateMyProfile;

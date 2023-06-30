import Joi from "joi";

const CreatePropertySchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "กรุณากรอกชื่อโครงการ",
    "any.required": "กรุณากรอกราคาห้องเช่า",
  }),
  price: Joi.number().precision(2).required().messages({
    "number.base": "กรุณากรอกราคาห้องเช่า",
    "number.precision": "กรุณากรอกตัวเลขทศนิยมไม่เกิน 2 ตำแหน่ง",
    "any.required": "กรุณากรอกราคาห้องเช่า",
  }),
  roomTypeId: Joi.string().required().messages({
    "string.empty": "กรุณาเลือกประเภทที่พัก",
    "string.base": "กรุณาเลือกประเภทที่พัก",
  }),
  rentPeriod: Joi.string().required().messages({
    "string.empty": "กรุณาเลือกระยะเวลา",
  }),
  floor: Joi.number().integer().messages({
    "number.base": "กรุณากรอกเป็นตัวเลขเท่านั้น",
    "number.empty": "กรุณากรอกชั้น",
  }),
  totalArea: Joi.number().integer().messages({
    "number.base": "กรุณากรอกเป็นตัวเลขเท่านั้น",
    "number.empty": "กรุณากรอกขนาดพื้นที่ห้องเช่า",
  }),
  totalUnit: Joi.number().integer().messages({
    "number.base": "กรุณากรอกเป็นตัวเลขเท่านั้น",
    "number.empty": "กรุณากรอกจำนวนห้องเช่าทั้งหมด",
  }),
  totalBedroom: Joi.number().integer().messages({
    "number.base": "กรุณากรอกเป็นตัวเลขเท่านั้น",
    "number.empty": "กรุณากรอกจำนวนห้องนอน",
  }),
  totalBathroom: Joi.number().integer().messages({
    "number.base": "กรุณากรอกเป็นตัวเลขเท่านั้น",
    "number.empty": "กรุณากรอกจำนวนห้องน้ำ",
  }),
  totalKitchen: Joi.number().integer().messages({
    "number.base": "กรุณากรอกเป็นตัวเลขเท่านั้น",
    "number.empty": "กรุณากรอกจำนวนห้องครัว",
  }),
  description: Joi.string().trim().messages({
    "string.empty": "กรุณากรอกรายละเอียดเพิ่มเติม",
  }),
});
const validateCreateProperty = (input) => {
  const { error } = CreatePropertySchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};
export default validateCreateProperty;

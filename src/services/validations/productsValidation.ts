import Joi from 'joi';
import { IProduct } from '../../interfaces';

const schema = Joi.object<IProduct>({

  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const productValidation = (body: IProduct) => {
  const { error } = schema.validate(body);
  if (error) {
    return { message: error.message, code: 422 };
  }
  return { message: null, code: null };
};

export default productValidation;
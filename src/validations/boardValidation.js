/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(256).trim().strict()
  })
  try {
    //Set abortEarly: false de truong hop co nhieu loi validation thi tra ve tat ca
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    //Validate du lieu xong xuoi hop le thi cho request di tiep qua controller
    next()
  } catch (error) {
    // eslint-disable-next-line no-console
    const errorMessage = new Error(error).message
    const customError = new ApiError(
      StatusCodes.UNPROCESSABLE_ENTITY,
      errorMessage
    )
    next(customError)
  }
}

export const boardValidation = {
  createNew
}

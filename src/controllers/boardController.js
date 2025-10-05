import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService'

const createNew = async (req, res, next) => {
  try {
    // Dieu huong du lieu sang tang service
    const createdBoard = await boardService.createNew(req.body)
    // Co ket qua tra ve phia client
    res
      .status(StatusCodes.CREATED)
      .json(createdBoard)
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew
}

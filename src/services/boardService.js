import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'

const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // Xu li logic du lieu tuy dac thu du an
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    const createdBoard = await boardModel.createNew(newBoard)
    const getNewBoard = await boardModel.findOneById(createdBoard.insertedId)

    // Tra ket qua ve trong Service luon phai co return
    return getNewBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew
}

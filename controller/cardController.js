const { Card, Library, User, sequelize } = require('../models')

const getCardById = async () => {
  try {
    const getCardId = await Card.findByPk(req.params.card_id)
    res.send(getCardId)
  } catch (error) {
    console.log(error)
  }
}

const getAllByType = async () => {
  try {
    const getType = await Card.findAll({
      where: { type: typeId }
    })
    res.send(getType)
  } catch (error) {
    console.log(error)
  }
}

const createCard = async () => {
  try {
    let creatorId = parseInt(req.params.user_id)
    let createBody = {
      creatorId,
      ...(req / body)
    }
    let create = await Card.create(createBody)
    res.send(create)
  } catch (error) {
    console.log(error)
  }
}

const updateCard = async () => {
  try {
    let cardId = parseInt(req.params.card_id)
    let updatedCard = await Card.update(req.body, {
      where: {
        id: cardId,
        returning: true
      }
    })
    res.send(updatedCard)
  } catch (error) {
    console.log(error)
  }
}

const deleteCard = async () => {
  try {
    let cardId = parseInt(req.params.card_id)
    await Card.destroy({
      where: {
        id: cardId
      }
    })
    res.send({ message: `Deleted ${cardId}` })
  } catch (error) {
    console.log(error)
  }
}

const main = async () => {
  try {
    await getCardById,
      await getAllByType,
      await createCard,
      await updateCard,
      await deleteCard
  } catch (error) {
    console.log(error)
  } finally {
    sequelize.close()
  }
}

main()
module.exports = {
  getCardById,
  getAllByType,
  createCard,
  updateCard,
  deleteCard
}

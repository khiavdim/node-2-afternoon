let id = 0;
let messages = [];

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        messages.push({id, text, time})
        id++      
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        const {text} = req.body
        const updateID = req.params.id
        const messageIndex = messages.findIndex(message => message.id == updateID)
        let message = messages[messageIndex]
        messages[messageIndex] = {
          id: message.id,
          text: text,
          time: message.time
        }
        res.status(200).send(messages)
      },

    delete: (req, res) => {
        const deleteId = req.params.id
        let messageIndex = messages.findIndex(message => message.id === deleteId)
        messages.splice(messageIndex, 1)
        res.status(200).send(messages)
    },

};

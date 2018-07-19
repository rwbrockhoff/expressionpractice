let allMessages = [];

module.exports = {
    getAllMessages: (req,res,next) => {
        res.status(200).send(allMessages)
    },

    createMessage: (req, res, next) => {
        let {username, message} = req.body;
        message = {username: username, message: message};

        if(req.session.history){
            req.session.history.push(message)
        }
        else {
            req.session.history = [];
            req.session.history.push(message)
        }

        allMessages.push(message)
        res.status(200).send(allMessages)
    },
    history: (req, res, next) => {
        res.status(200).send(req.session.history)
    }


}




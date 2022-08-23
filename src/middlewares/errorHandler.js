const asyncWrap = asyncController => {
    return async (req, res, next) => {
        try {
            await asyncController(req, res)
        }
        catch(err) {
            res.status(err.statusCode ? err.statusCode : 400).json({message: err.message,})
        }
    };
}

module.exports = asyncWrap
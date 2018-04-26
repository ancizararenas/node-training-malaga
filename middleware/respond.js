'use strict';

var respond;

respond = module.exports = function(err, req, res, next) {
    if (err || (res.statusCode > 201)) {
        return res.status(err.statusCode || res.statusCode || 500).json({ message: err.message || res || 'Internal server error encountered' });
    }

    res.status(res.statusCode || 200).json(res);

    next();
}
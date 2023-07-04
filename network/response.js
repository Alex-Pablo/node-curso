exports.success = ( req, res, message, status =200 )=>{
    let statusMessage = message || '';
    res.status(status).send({
        error: false,
        status: status,
        body: statusMessage
    })
}

exports.error = ( req, res, message, status = 500 )=>{
    let statusMessage = message || 'Internal Serve Error';
    res.status(status).send({
        error: true,
        status: status,
        body: statusMessage
    })
}
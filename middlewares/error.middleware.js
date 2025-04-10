const errorMiddleware = (err, req, res, next) => {
    try {
        // dereference 
        let error = { ...err };

        error.message = err.message;

        console.error(err);

        if (err.name === 'CastError') {
            const message = 'Resource not found';
            error = new Error(message);
            error.statusCode = 404;
        }

    } catch (error) {

    }
}




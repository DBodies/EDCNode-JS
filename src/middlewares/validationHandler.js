import createHttpError from "http-errors";

export const validationHandler = (schema) =>  async (req,res,next) => {
try {
await schema.validationAsync(req.body, {
    abortEarly: false
});
next();
}catch(err) {
    const error = createHttpError(404, 'Bad Request', {
        errors: err.details
    });
    next(error);
}
};
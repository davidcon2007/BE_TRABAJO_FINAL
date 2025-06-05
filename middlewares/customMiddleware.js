export const customMiddleware=(req, res, next) =>{
    console.log("desde el middleware");
    req.headers.myTime = Date.now();
    next();
};
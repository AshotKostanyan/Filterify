export async function mainMiddleware(req, res, next) {
    console.log({"url": req.url, "method": req.method, "body": req.body});
    next();
}
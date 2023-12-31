import rateLimit from "express-rate-limit";
export let limitGet = () =>{
    return rateLimit({
        windowMs: 60 * 1000,
        max: 50,
        standardHeaders: true,
        legacyHeaders: false,
        skip: (req, res) => {
            if(req.headers["content-length"]>350){
                res.status(413).send({status:413, message: "characters size exceeded" });
                return true;
            }
        },
        message: (req, res) => {
            res.status(429).send({status:429, message:"minimum solicit exceeded" });
        }
    })
}
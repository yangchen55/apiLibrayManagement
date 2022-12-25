import  {findAuser} from "../models/users/UserModel.js"

export const isAuth = async(req, res, next) => {
    const {authorization} = req.headers;
    console.log(authorization)
    const user = authorization? await findAuser({_id: authorization}):null;
    console.log("it is middle ware testiing");
    user?._id
    ? next()
    :res.json({
        status: "error",
        message: "unauthorized"
    })

    try {
        
    } catch (error) {
        next(error)
        
    }
}
const mercadopago = required("mercadopago")
required("dotenv").config()

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN,
})

module.exports={
    mercadopago
}
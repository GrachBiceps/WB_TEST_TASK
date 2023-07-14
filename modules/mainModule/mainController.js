const { response } = require('express')

const findQtyWithStore = async (fetchData) => {
    const product = fetchData.data.products[0]
    const StockArr = []
    //Пробегаемся по всем размерам
    for(let i=0; i<product.sizes.length; i++){
        //Проверка есть ли вообше товара
        if(product.sizes[i].stocks.length > 0){
            //Пробегаемся по складам где имменно есть
            for(let j=0; j<product.sizes[i].stocks.length; j++){
                
                if(product.sizes[i].stocks[j].wh == 117986){
                    
                    StockArr.push({
                        [product.sizes[i].name]: product.sizes[i].stocks[j].qty
                    })
                }
            }
        }
    }
    //
    const returnArr = []
        returnArr.push({
            Art: product.id,
            StockArr
        })
    
    return returnArr
}

class mainController{
    async getItemQty(req, res){
        try{
            const { articleArr } = req.body
            const resBodyArr = []
            for(let i=0; i<articleArr.length; i++){
                var fetchData = ''
                await fetch(`${process.env.CARD_URL}detail?appType=1&curr=rub&dest=-2133463&nm=${articleArr[i]}`,)
                .then((response) => response.json())
                .then((data) => fetchData = data)
                const Qty = await findQtyWithStore(fetchData)
                resBodyArr.push(Qty)
            }
            return res.status(200).json(resBodyArr)
        }catch(e){
            return res.status(404).json({success: false , message: `Ошибка ${e}`})
        }
    }
}

module.exports = new mainController()
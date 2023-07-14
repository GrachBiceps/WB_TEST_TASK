API

Для отправки запроса нужно ввести массив артикулов в таком виде:

    "articleArr": [
        138593051, 
        94340317, 
        94340606, 
        138590435, 
        138607462, 
        94339119, 
        94339244
    ]

и получим ответ в таком виде: 
    
    {
        "Art": 138593051,
        "StockArr": [
            {
                "80D": 1
            },
            {
                "90E": 7
            }
        ]
    },
    {
        "Art": 94340317,
        "StockArr": [
            {
                "75B": 3
            },
            {
                "80B": 7
            },
            {
                "85B": 1
            }
        ]
    },
    и тд.
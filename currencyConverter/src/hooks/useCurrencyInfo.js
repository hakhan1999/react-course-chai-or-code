import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.currencyapi.com/v3/latest?apikey=${import.meta.env.VITE_CURRENCY_API_KEY}&base_currency=${currency}`)
            .then((response) => response.json())
            .then((response) => setData(response.data))
    }, [currency])
    return data
}

export default useCurrencyInfo
import { useState } from "react"

const useCounter = () => {
    const [count, setCount] = useState(1);

    const handleSumar = () => { setCount(count + 1) }

    const handleRestar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return {
        count,
        handleSumar,
        handleRestar
    }
}

export default useCounter
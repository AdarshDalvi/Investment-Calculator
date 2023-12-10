import { useState } from "react"
import InvestmentInput from "./InvestmentInput"
import Table from "./Table"
export default function InputResultsWrapper() {
    const [inputs, setInputs] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    const handleOnChange = (event) => {
        const { name, value } = event.target
        setInputs(prevInputs => {
            return {
                ...prevInputs,
                [name]: Number.parseInt(value)
            }
        })

    }
    const isValidInput = inputs.duration > 0

    return (
        <>
            <InvestmentInput inputs={inputs} handleOnChange={handleOnChange} />
            {isValidInput
                ? <Table inputs={inputs} />
                : <p>Please enter a duration greater than 0</p>
            }
        </>
    )
}

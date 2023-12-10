import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Table({ inputs }) {
    const results = calculateInvestmentResults(inputs)
    console.log(results)
    const totalInterest = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment
    return (
        <table className='w-full table-auto mx-0.5 text-right border-spacing-4'>
            <thead>
                <tr className="text-[0.7rem] text-[#83e6c0] align-top">
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest(Year)</td>
                    <td>Total Interest</td>
                    <td>Investment Capital</td>
                </tr>
            </thead>
            <tbody>
                {
                    results.map(yearData => {

                        const investmentCapital = yearData.valueEndOfYear - totalInterest

                        return (
                            <tr className="text-[0.85rem] font-robotoCondensed text-[c2e9e0]" key={yearData.year}>
                                <td>{yearData.year}</td>
                                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                <td>{formatter.format(yearData.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(investmentCapital)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

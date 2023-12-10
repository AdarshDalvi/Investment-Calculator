import CustomInput from "./CustomInput";

export default function InvestmentInput({ inputs, handleOnChange }) {



    return (
        <div className="w-full flex justify-evenly gap-6 rounded px-6 py-8 my-8  flex-wrap  bg-gradient-to-b from-[#307e6c] to-[#2b996d] ">
            <CustomInput
                label='initial investment'
                identifier='ini-invest'
                name='initialInvestment'
                value={inputs.initialInvestment}
                onChange={handleOnChange}
            />
            <CustomInput
                label='annual investment'
                identifier='annu-invest'
                name='annualInvestment'
                value={inputs.annualInvestment}
                onChange={handleOnChange}
            />
            <CustomInput
                label='expected return (%)'
                identifier='expected-return'
                name='expectedReturn'
                value={inputs.expectedReturn}
                onChange={handleOnChange}
            />
            <CustomInput
                label='duration'
                identifier='duration'
                name='duration'
                value={inputs.duration}
                onChange={handleOnChange}
                min={1}
            />
        </div>
    )


}

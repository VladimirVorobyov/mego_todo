const MySelect = ({optionsS, defaultValueS, valueS, onChangeS}) => {
    return (
        <select
            value={valueS}
            onChange={event => onChangeS(event.target.value)}
        >
            <option disabled value="">{defaultValueS}</option>
            {optionsS.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;
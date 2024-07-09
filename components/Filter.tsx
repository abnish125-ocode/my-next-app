
const Filter = ({ onFilterChange, arr }: any) => {
    return (
        <>
            <label className="filter-side">
               <span> Filter by yes/no :- </span> 

                <select onChange={(e) => onFilterChange(e.target.value)}>
                    {
                        arr.map((item: string, index: number) => {
                            return <option key={index} value={item}>{item}</option>

                        })
                    }
                </select>
            </label>
        </>
    )
}

export default Filter;
const SortTable = ({ sortbyUsernameCity, opt }: any) => {

    return (
        <>
            <div className="sortrTableOptioins">
                <span>
                    Sort By Username :- <input type="radio" name="userCity" value="username" checked={opt == 'username'} onChange={(e) => sortbyUsernameCity(e.target.value)} />
                </span>
                <span>
                    Sort By City :- <input type="radio" name="userCity" value="city" checked={opt == 'city'} onChange={(e) => sortbyUsernameCity(e.target.value)} />
                </span>
                <span>
                    Normal :- <input type="radio" name="userCity" value="normal" checked={opt == 'normal'} onChange={(e) => sortbyUsernameCity(e.target.value)} />
                </span>
            </div>






        </>
    )

}
export default SortTable;
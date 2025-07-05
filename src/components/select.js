export default function Select({values, value, setValue, initialValue="", className=""}){

    return (
        <form class="max-w-sm mx-auto">
            <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select id="countries" className={className}>
                {values.map((v) => <option selected={v === initialValue} value={v}>{v}</option>)}
            </select>
        </form>
    )

}

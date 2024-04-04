export default function useInput(defaultValue = '') {
    const [value, setValue] = useState()

    return {
        value,
        onChange: (e) => setValue(e.target.value),

    }
}

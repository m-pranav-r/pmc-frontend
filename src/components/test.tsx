import { FC, useState } from 'react'

async function getData(): Promise<any> {
    const response = await fetch("http://localhost:5000/api/test/", { method: 'GET' })
    const data = await response.json()
    return data
}

type Entry = {
    t1: string;
    t2: number;
}

const TestPrimitive: FC<Entry> = ({ t1, t2 }) => {
    return (
        <div className='test-prim'>
            <h1>{t1}</h1>
            <p>{t2}</p>
        </div>
    )
}

export const TestCompo = () => {
    const [entries, setEntries] = useState<Entry[]>([])
    //useEffect(() => {
    //    (async () => {
    //        const data = await getData();
    //        console.log("Setting!")
    //        setEntries(data)
    //    })();
    //    return () => {
    //        if (entries.length)
    //            return
    //    }
    //}, [])
    return (
        <>
            <h1>Test Component</h1>
            {entries.length && entries.map(
                entry => <TestPrimitive t1={entry.t1} t2={entry.t2} />
            )}
        </>
    )
}
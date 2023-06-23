import { log } from 'console'
import React, { FC, useState } from 'react'
import { useEffect } from "react"

async function getData(): Promise<any> {
    const response = await fetch("http://localhost:5000/api/test/", { method: 'GET' })
    const data = await response.json()
    console.log("Called once")
    return data
}

type Entry = {
    t1: string;
    t2: number;
}

const TestPrimitive: FC<Entry> = ({ t1, t2 }) => {
    return (
        <>
            <h1>{t1}</h1>
            <p>{t2}</p>
        </>
    )
}

export const TestCompo = () => {
    const [entries, setEntries] = useState<Entry[]>([])
    useEffect(() => {
        (async () => {
            const data = await getData();
            setEntries(data)
        })();
        return () => {
            if (entries.length !== 0)
                return;
        }
    }, [])
    return (
        <>
            <h1>Test Component</h1>
            {entries.length && entries.map(
                entry => <TestPrimitive t1={entry.t1} t2={entry.t2} />
            )}
        </>
    )
}
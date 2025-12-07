"use client"
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [tableData, setTableData] = useState([]);
    let [page, setPage] = useState(2)


    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setTableData(data)
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleNext = () => {
        setPage(++page)
    }

    const handlePrev = () => {
        setPage(--page)
    }

    console.log(tableData?.slice(0, 10));
    console.log(page);


    return (
        <div className='bg-white h-screen justify-center items-center p-10'>
            <table className='border border-black p-5'>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData?.slice(page, page * 10)?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='flex justify-center items-center gap-3 mt-10'>
                <button className='border border-black/50 px-5 py-1 rounded-md' onClick={() => {
                    handlePrev();
                }}>Prev</button>
                <span>{page}</span>
                <button className='border border-black/50 px-5 py-1 rounded-md' onClick={() => {
                    handleNext();
                }}>Next</button>
            </div>
        </div>
    )
}

export default Page
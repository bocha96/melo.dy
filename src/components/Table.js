import React from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Year</th>
                <th>URL</th>
                <th>Image</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const data = props

    const rows = data.songs.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.title}</td>
                <td>{row.artist}</td>
                <td>{row.year}</td>
                <td><a href={row.web_url}>Listen</a></td>
                <td><a href={row.img_url}>Image</a></td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const data = props
    
    return (
        <table>
            <TableHeader />
            <TableBody songs={data.songs} />
        </table>
    )
}

export default Table
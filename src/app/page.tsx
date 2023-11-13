import { promises as fs } from 'fs'

export default async function Home() {
    const albumDir = (await fs.readdir('/Users/louis/Music/Injust/01 - Album 1', {withFileTypes: true}))
        .filter(dirent => dirent.isDirectory() && !/^\..*/.test(dirent.name));
    
    return (
        <main className="min-h-screen p-24">
            <h1 className="text-4xl px-4 mb-16 flex justify-between">
                Album 1
                <span>{albumDir.length} / 12 ({Math.round(albumDir.length / 12 * 100)} %)</span>
            </h1>
            <table className="w-full">
                <tbody>
                    {albumDir.map((dir, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2">
                                {dir.name}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}

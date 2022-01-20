
import { createClient } from 'contentful';

export const getMyProjectsContent = async () => {
    let myProjects = []

    const client = createClient({
        space: 'xrshw2akqkld',
        environment: 'master',
        accessToken: 'E3xGzEACLbBIGRZ-4nUAEgmJZSbt4-MobkRe3vBqlf8'
    })

    const { items } = await client.getEntries()
    items.forEach(item => myProjects.push(item.fields))
    return myProjects
}







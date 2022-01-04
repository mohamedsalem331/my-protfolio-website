
import { createClient } from 'contentful';

export const getMyProjectsContent = async () => {
    let myProjects = []

    const client = createClient({
        space: 'j78hl3mwu35n',
        environment: 'master',
        accessToken: 'Z2TR4yBYhiFDFVpqb5lkVcfCUlLCmLoPu1OsVcm1n-A'
    })

    const { items } = await client.getEntries()
    items.forEach(item => myProjects.push(item.fields))
    return myProjects
}







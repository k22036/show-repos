import { getRepos } from '@/libs/fetch_repos'
import React from 'react'
import Repo from './Repo'

type Props = {
    data: {
        public_repos: number
    }
}

const Repos = async ({data}: Props) => {
    const repos = await getRepos();

    return (
        <div className="container mx-auto p-4">
            <div className="text-2xl font-bold mb-4">Repos:</div>
            <div className="text-xl mb-4">
                {data.public_repos}
            </div>
            <br />
            <div className="text-2xl font-bold mb-4">All Repositories:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repos.data.map((repo) => (
                    <Repo key={repo.id} id={repo.id} name={repo.name} description={repo.description} html_url={repo.html_url}/>
                ))}
            </div>
        </div>
    );
}

export default Repos

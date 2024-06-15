"use server"

import { octokit } from "./octokit_auth";

export async function getRepos() {
    return await octokit.rest.repos.listForUser({
        username: "k22036",
        sort: "updated",
        per_page: 100
    })
}
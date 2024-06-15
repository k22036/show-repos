"use server"

import { octokit } from "./octokit_auth";

export async function getUserData() {
    return await octokit.rest.users.getByUsername({
        username: "k22036"
    })
}
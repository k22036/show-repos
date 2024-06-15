import { Octokit } from "@octokit/rest";

export const octokit = new Octokit({
    auth: process.env.OCTOKIT_AUTH_TOKEN
});
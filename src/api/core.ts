import { Octokit } from 'octokit'

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_API_KEY,
})

export const CORE_API = async (
  apiMethod: string,
  path: string,
  params?: object
) => {
  return octokit.request(`${apiMethod} ${path}`, {
    ...params,
  })
}

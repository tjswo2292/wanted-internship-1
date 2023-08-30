import { Octokit } from 'octokit'
import { OWNER, REPO } from './constants'

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_API_KEY,
})

const CORE_API = async (apiMethod: string, params?: object) => {
  return octokit.request(`${apiMethod} /repos/${OWNER}/${REPO}/issues`, {
    ...params,
  })
}

export { octokit, CORE_API }

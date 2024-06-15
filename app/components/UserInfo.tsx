import React from 'react'

type Props = {
  data: {
    login: string,
    html_url: string
  }
}

const UserInfo = async ({ data }: Props) => {
  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded mb-4">
      <div className="text-2xl font-bold mb-2">Username:</div>
      <div className="text-xl mb-4">{data.login}</div>
      <div className="text-2xl font-bold mb-2">GitHub:</div>
      <div className="text-xl">
        <a href={data.html_url} className="text-blue-600 underline hover:text-blue-800">{data.html_url}</a>
      </div>
    </div>
  )
}

export default UserInfo

import React from 'react'

type Props = {
  id: number,
  name: string,
  description: string | null,
  html_url: string
}

const Repo = ({ id, name, description, html_url }: Props) => {
  return (
    <div key={id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 m-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base mb-4">{description || "No description provided"}</p>
      <a href={html_url} className="text-blue-600 underline hover:text-blue-800">{html_url}</a>
    </div>
  )
}

export default Repo

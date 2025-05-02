import React from 'react'

const sites=[{
  name:"Codeforces",
  url:"https://codeforces.com/"
},
{
  name:"Github",
  url:"https://github.com/"
},
{
  name:"Claude",
  url:"https://claude.ai/"
},
{
  name:"Gmail",
  url:"https://mail.google.com/mail/u/0/#inbox"
},
{
  name:"Youtube",
  url:"https://www.youtube.com/"
},
{
  name:"ChatGPT",
  url:"https://chatgpt.com/"
}
]

function FavSites() {
  return (
    <div className='bg-gray-900/40 border border-indigo-900 backdrop-blur-sm rounded-lg min-h-16 max-h-64'>
        <div className='grid grid-cols-6 gap-4 p-4'>
        {sites.map((site) => (
          <a 
            key={site.name}
            href={site.url}
            className="text-indigo-300 bg-black/30 px-2 py-1 rounded-xl hover:text-indigo-400 text-center"
          >
            {site.name}
          </a>
        ))}
        </div>
    </div>
  )
}

export default FavSites
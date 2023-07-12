import React from 'react'
const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )
  

const page = () => {
  return (
      <div className="">
        <h4 className="mb-4 text-xl font-medium leading-none">route</h4>
        {tags.map((tag) => (
          
          <React.Fragment>
          
            <div className="text-base cursor-pointer" key={tag}>
              {tag}
            </div>
            {/* <Separator className="my-2" /> */}
          </React.Fragment>
        ))}
      </div>
    
  )
}

export default page
import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

function Heads() {
  const route = useRouter()
  function goToPetsDetails(name, type) {
    route.push({
      pathname: `/rebloxTools/heads/${name}`,
      query: { item: name, category: type },
    })
  }

  return (
    <Layout>

      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px]  pb-[150px]">
        <div className="p-4 ">
          <Ads
            data-ad-format="auto"
            data-ad-slot="9852606619"
            data-full-width-responsive="true"
          />
        </div>
        <div className='grid grid-cols-1 gap-4 p-2'>
          {gameData.Heads?.map((item) => (
            <div key={item} className="cursor-pointer "
              onClick={() => goToPetsDetails(item.name, "Heads")}>
              <img
                src={item.url}
                className=""
                alt="Product"
              />

            </div>
          ))}
        </div>



      </div>
    </Layout>
  )
}

export default Heads 

import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { Context } from '../../context/context'

const Sidear = () => {

    const [extended,setExetended] = useState(false)
    const {onSent,prevPrompts,setRecentPrompt} = useContext(Context)

  return (
    <div className=' min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-7 px-4'>
        {/* top part */}
        <div>
            <img onClick={()=>setExetended(prev=>!prev)} src={assets.menu_icon} alt="" className=' w-6 h-6 block ml-3 cursor-pointer' />
            <div className=' mt-[50px] inline-flex items-center gap-[10px] py-3 px-4 bg-[#e6eaf1] rounded-3xl text-lg text-gray-700 cursor-pointer'>
                <img src={assets.plus_icon} alt="" className=' w-6 h-6' />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
            <div className=' flex flex-col '>
                <p className=' mt-8 mb-5 text-lg'>Recent</p>
                {prevPrompts.map((item,index)=>{
                    return (
                        <div className=' flex items-start gap-3 p-3 pr-10 rounded-3xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                            <img src={assets.message_icon} alt=""className=' w-6 h-6' />
                            <p>{item.slice(0,18)}...</p>
                        </div>
                    )
                })}
            </div>:null}
        </div>
        {/* bottom part */}
        <div className=' flex flex-col'>
            <div className='flex items-start gap-3 p-3 pr-3 rounded-3xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                <img src={assets.question_icon} alt=""className=' w-6 h-6' />
                {extended?<p>Help</p>:null}
            </div>
            <div className='flex items-start gap-3 p-3 pr-3 rounded-3xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                <img src={assets.history_icon} alt=""className=' w-6 h-6' />
                {extended?<p>Activity</p>:null}
            </div>
            <div className='flex items-start gap-3 p-3 pr-3 rounded-3xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                <img src={assets.setting_icon} alt=""className=' w-6 h-6' />
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidear
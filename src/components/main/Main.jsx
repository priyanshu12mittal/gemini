import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const Main = () => {
    const {onSent,recentPrompt, showResult, loading, resultData, setInput,input} = useContext(Context)
  return (
    <div className='main flex-1 min-h-screen relative pb-[15vh]'>
        {/* navbar */}
        <div className=' nav flex items-center justify-between text-2xl p-5 text-[#585858]'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" className=' w-10 rounded-full' />
        </div>
        {/* hero section */}
        <div className=' max-w-[900px] m-auto'>
            
            {
            !showResult?
                <>
                    <div className=' my-12 mx-0 text-5xl text-[#c4c7c5] font-medium'>
                        <p>
                            <span className='text-gradient'>Hello, Priyanshu</span>
                        </p>
                        <p>How can I help you today?</p>
                    </div>
                    {/* cards */}
                    <div className=' cards'>
                        <div className=' card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]'>
                            <p className=' text-[#585858] text-lg'>
                                Can you plan a trip to manali for me
                            </p>
                            <img src={assets.compass_icon} alt="" className=' w-9 p-1 absolute bg-white rounded-2xl bottom-3 right-3' />
                        </div>
                        <div className=' card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]'>
                            <p className=' text-[#585858] text-lg'>
                                Tell a reason for why true love is not exist
                            </p>
                            <img src={assets.bulb_icon} alt=""className=' w-9 p-1 absolute bg-white rounded-2xl bottom-3 right-3' />
                        </div>
                        <div className=' card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]'>
                            <p className=' text-[#585858] text-lg'>
                                How to hack google gemini
                            </p>
                            <img src={assets.message_icon} alt=""className=' w-9 p-1 absolute bg-white rounded-2xl bottom-3 right-3' />
                        </div>
                        <div className=' card h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]'>
                            <p className=' text-[#585858] text-lg'>
                                Why chatgpt is better than gemini
                            </p>
                            <img src={assets.code_icon} alt=""className=' w-9 p-1 absolute bg-white rounded-2xl bottom-3 right-3' />
                        </div>
                    </div>
                </>:
                <div className='result py-0 px-[5%] max-h-[70vh] overflow-y-scroll'>
                    <div className=' my-10 mx-0 flex items-center gap-5'>
                        <img src={assets.user_icon} alt=""  className=' w-10 rounded-full'/>
                        <p>{recentPrompt}</p>
                    </div>
                    <div className=' flex items-start gap-5'>
                        <img src={assets.gemini_icon} alt="" className=' w-10 rounded-full' />
                        {loading?
                        <div className=' w-[100%] flex flex-col gap-3'>
                            <hr className=' rounded border-none bg-[#f6f7f8] loader-bg h-5 animate-loader' />
                            <hr className=' rounded border-none bg-[#f6f7f8] loader-bg h-5 animate-loader' />
                            <hr className=' rounded border-none bg-[#f6f7f8] loader-bg h-5 animate-loader' />
                        </div>:
                        <p dangerouslySetInnerHTML={{__html:resultData}} className=' text-lg font-light leading-[1.8]'></p>}
                    </div>
                </div>
            }


            {/* bottom */}

            <div className=' absolute bottom-0 w-[100%] max-w-[900px] px-5 py-0 m-auto'>
                <div className=' flex items-center justify-between gap-5 bg-[#f0f4f9] px-5 rounded-[50px]'>
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' className=' flex-1 bg-transparent border-none outline-none p-1.5 text-lg' /> 
                    <div className=' flex items-center gap-4'>
                        <img src={assets.gallery_icon} alt="" className=' w-6 cursor-pointer' />
                        <img src={assets.mic_icon} alt="" className=' w-6 cursor-pointer'/>
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" className=' w-6 cursor-pointer' />
                    </div>
                </div>
                <p className=' text-sm my-4 mx-auto text-center font-light'>
                Sometimes, Gemini might tell you Mount Everest is in Italy or that the Great Wall was built to keep out pandas. We promise it’s just trying to make you smile!
                </p>
            </div>
        </div>
        </div>
  )
}


export default Main
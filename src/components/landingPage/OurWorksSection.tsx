function OurWorksSection() {
    return (
        <section className='w-[100vw] flex items-center justify-center'>
            <div className='w-[90vw] flex flex-col items-center justify-center gap-[60px] mb-[200px]'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='text-[#FF5D22] text-[22px] font-bold text-sans leading-[11px]'>Our works</div>
                    <div className='text-grey1 text-[46px] font-bold text-sans leading-[67px] max-w-[547px]'>Our case studies</div>
                </div>
                <div className='flex gap-[20px]'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='w-[339px] bg-[#AADDFF] h-[339px] flex items-center flex-col justify-center'>
                            <img
                                src='https://i.ibb.co/WzjSqGC/Group-189.png'
                                alt="emailMarketing"
                            />
                        </div>
                        <div className='text-black text-sans font-bold text-[26px] leading-[35.5px] mt-[30px]'>Email marketing</div>
                        <div className='text-sans font-semibold text-[18px] text-grey3 leading-[24.5px]'>Fashion, product</div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='w-[339px] bg-[#FFBAD2] h-[339px] flex items-center flex-col justify-center'>
                            <img
                                src='https://i.ibb.co/K5qD2ph/Group-190.png'
                                alt="emailMarketing"
                            />
                        </div>
                        <div className='text-black text-sans font-bold text-[26px] leading-[35.5px] mt-[30px]'>Content marketing</div>
                        <div className='text-sans font-semibold text-[18px] text-grey3 leading-[24.5px]'>Fashion, product</div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='w-[339px] bg-[#E0FF9C] h-[339px] flex items-center flex-col justify-center'>
                            <img
                                src='https://i.ibb.co/vzR4wRy/Group-191.png'
                                alt="emailMarketing"
                            />
                        </div>
                        <div className='text-black text-sans font-bold text-[26px] leading-[35.5px] mt-[30px]'>Growth marketing</div>
                        <div className='text-sans font-semibold text-[18px] text-grey3 leading-[24.5px]'>Fashion, product</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurWorksSection
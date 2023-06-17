function WhyUsSection() {
  return (
    <section className='flex items-center justify-center mb-[200px]'>
      <div className='max-w-[1440px] flex flex-col items'>
        <div className='flex flex-col gap-[10px]'>
          <div className='text-[#FF5D22] text-[22px] font-bold text-sans leading-[11px]'>Why us</div>
          <div className='text-grey1 text-[46px] font-bold text-sans leading-[67px] max-w-[547px]'>What makes us stand out</div>
        </div>
        <div className='flex items-start mt-[60px] justify-between '>

          <div className='flex flex-col gap-[60px]'>
            <div className='flex flex-col max-w-[427px] orangeHoverUnderline'>
              <div className='flex gap-[15px]'>
                <img src='https://i.ibb.co/Bc8GZM5/startegy-1.png' alt='img' width='50px' height='50px' />
                <div className='font-bold text-[26px] leading-[57px] text-sans text-grey1'>Innovative ideas</div>
              </div>
              <div className='text-sans font-semibold text-[20px] leading-[31px] text-grey3'>We build electrified relations between products and humans</div>
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-col max-w-[427px] orangeHoverUnderline'>
                <div className='flex gap-[15px]'>
                  <img src='https://i.ibb.co/C8p2bfC/startegy-1-1.png' alt='img' width='50px' height='50px' />
                  <div className='font-bold text-[26px] leading-[57px] text-sans text-grey1'>Effective solutions</div>
                </div>
                <div className='text-sans font-semibold text-[20px] leading-[31px] text-grey3'>Prefected matched activities follow us to achieve goals in short time</div>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='flex flex-col max-w-[427px] orangeHoverUnderline'>
                <div className='flex gap-[15px]'>
                  <img src='https://i.ibb.co/C8p2bfC/startegy-1-1.png' alt='img' width='50px' height='50px' />
                  <div className='font-bold text-[26px] leading-[57px] text-sans text-grey1'>Perfect strategy</div>
                </div>
                <div className='text-sans font-semibold text-[20px] leading-[31px] text-grey3'>Based on research and analysis, we plan to itroduce revolutionary solutions</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src='https://i.ibb.co/X51gNN8/Group-5.png'
              // width='600px'
              // height='600px'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
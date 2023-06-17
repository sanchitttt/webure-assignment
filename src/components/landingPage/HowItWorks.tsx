function HowItWorks() {
  return (
    <section id='how-it-works' className='mb-[100px]'>
      <div className='w-[100vw] flex items-center justify-center  flex-col'>
        <div className='max-w-[1440px] w-[100%] flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center '>
            <div className='text-[16px] font-bold text-sans leading-[21px]'>Here how it works</div>
            <div className='text-black text-sans text-[36px] font-bold'>Simple process to start</div>
          </div>
          <div className='flex py-[100px] w-[80%] justify-around'>


            <div className='flex flex-col w-[300px] items-center justify-center gap-[10px]'>
              <img
                src='https://i.ibb.co/zmwTYMk/web-design-1.png'
                width='132px'
                height={'132px'}
              />
              <div className='text-[#474359] text-[16px] font-bold text-sans'>Digital Analysis</div>
              <div className='text-[#A9B0BC] text-[16px] text-sans font-semibold'>
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </div>
            </div>

            <div className='flex flex-col w-[300px] shadow-v2 py-[30px] rounded-[15px] px-[30px] items-center justify-center gap-[10px]'>
              <img
                src='https://i.ibb.co/Vtt8ctm/web-design-1-1.png'
                width='132px'
                height={'132px'}
              />
              <div className='text-[#474359] text-[16px] font-bold text-sans'>Digital marketing</div>
              <div className='text-[#A9B0BC] text-[16px] text-sans font-semibold'>
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </div>
            </div>

            <div className='flex flex-col w-[300px] items-center justify-center gap-[10px]'>
              <img
                src='https://i.ibb.co/PmZs6wy/web-design-1-2.png'
                width='132px'
                height={'132px'}
              />
              <div className='text-[#474359] text-[16px] font-bold text-sans'>Email marketing</div>
              <div className='text-[#A9B0BC] text-[16px] text-sans font-semibold'>
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </div>
            </div>

          </div>
          <button className='flex items-center w-[140px] h-[46px] justify-center text-sans font-semibold text-[16px] text-black bg-[#EBF2F3] rounded-full'>
            All features
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks;
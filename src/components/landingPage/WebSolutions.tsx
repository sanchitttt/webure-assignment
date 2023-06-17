import { useSpring, animated, useInView } from 'react-spring';

function Number({ n }: { n: number }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 }
  })

  return <animated.div className='text-sans text-grey1 font-bold text-[93px] leading-[126px]'>
    {number.to((n: number) => n.toFixed(0))}
  </animated.div>
}



function WebSolutionsSection() {
  const [ref, inView] = useInView();
  return (
    <section className='flex flex-col items-center justify-center mb-[300px]'>
      <div className='flex items-start justify-between w-[80%] max-w-[1440px]'>
        <div className='flex flex-col max-w-[600px] gap-[10px]'>
          <div className='text-[#FF5D22] text-[22px] font-bold text-sans leading-[11px]'>Web Solutions</div>
          <div className='text-grey1 text-[46px] font-bold text-sans leading-[67px]'>Strategics experiences and visual appeal</div>
          <div>
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
          <div className='flex gap-[7.5px] items-center mt-[15px]'>
            <div className='text-[#EB5757] text-[16px] font-bold text-sans leading-[19.4px] '>Read More</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7 7 7-7 7" stroke="#000" stroke-width="2" /></svg>
          </div>
        </div>
        <div>
          <img
            src='https://i.ibb.co/hXj0Dhj/Group-4.png'
            width='512px'
            height='418px'
          />
        </div>
      </div>
      <div className='flex justify-between w-[80%] mt-[80px] max-w-[1440px]' ref={ref} >
        <div className='w-[268px] h-[268px] bg-white rounded-[23px] shadow-v3 flex items-center justify-center flex flex-col'>
          {inView && <Number n={6} />}
          <div className='text-sans text-grey3 font-bold text-[28px] leading-[38px]'>Years in Field</div>
        </div>
        <div className='w-[268px] h-[268px] bg-white rounded-[23px] shadow-v3 flex items-center justify-center flex flex-col'>
          {inView && <div className='flex'>
            <Number n={10} />
            <div className='text-sans text-grey1 font-bold text-[93px] leading-[126px]'>+</div>
          </div>}
          <div className='text-sans text-grey3 font-bold text-[28px] leading-[38px]'>Expertes</div>
        </div>
        <div className='w-[268px] h-[268px] bg-white rounded-[23px] shadow-v3 flex items-center justify-center flex flex-col'>
          {inView && <div className='flex'>
            <Number n={50} />
            <div className='text-sans text-grey1 font-bold text-[93px] leading-[126px]'>+</div>
          </div>}
          <div className='text-sans text-grey3 font-bold text-[28px] leading-[38px]'>Projects</div>
        </div>
        <div className='w-[268px] h-[268px] bg-white rounded-[23px] shadow-v3 flex items-center justify-center flex flex-col'>
          {inView && <div className='flex'>
            <Number n={20} />
            <div className='text-sans text-grey1 font-bold text-[93px] leading-[126px]'>+</div>
          </div>}
          <div className='text-sans text-grey3 font-bold text-[28px] leading-[38px]'>Agency Partners</div>
        </div>
      </div>
    </section>
  )
}

export default WebSolutionsSection
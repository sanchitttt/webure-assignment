function OurClients() {
    return (
        <section className='w-[100vw] flex items-center justify-center mb-[300px]'>
            <div className='w-[90vw] max-w-[1440px] flex items-center justify-between'>
                <div className='relative w-[523px] h-[523px] rounded-full flex items-center justify-center bg-[#F2EAFF]'>
                    <div className='w-[355px] h-[355px] bg-[#EADDFF] rounded-full flex items-center justify-center' >
                        <div className='text-[60px] rotate-[-5deg] w-[184px] text-black text-sans leading-[59px] font-normal h-[184px] bg-[#fff] rounded-full flex items-center justify-center'>
                            99+
                        </div>
                    </div>
                    <img
                        src='https://i.ibb.co/1nvTcR0/1.png'
                        className='absolute bottom-[0] left-[0]'
                    />
                    <img
                        src='https://i.ibb.co/F4BK5nh/2.png'
                        className='absolute right-[20px] top-[10px]'
                    />
                    <img
                        src='https://i.ibb.co/SrbhcPX/3.png'
                        className='absolute right-[20px] bottom-[10px]'
                    />
                    <img
                        src='https://i.ibb.co/WsSYczG/Ellipse-6.png'
                        className='absolute left-[100px] top-[100px]'
                    />
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <div className='text-[#FF5D22] text-[22px] font-bold text-sans leading-[11px]'>Our clients</div>
                    <div className='text-grey1 text-[46px] font-bold text-sans leading-[67px] max-w-[547px]'>Love from happy clients from the entire world</div>
                    <div className='text-sans font-semibold text-[#828282] text-[16px] leading-[19.5px] max-w-[535px]'>
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </div>
                    <div className='flex gap-[10px] items-center mt-[15px]'>
                        <img
                            src='https://i.ibb.co/F4BK5nh/2.png'
                        />
                        <div className='flex flex-col'>
                            <div className='text-sans font-bold text-[24px] leading-[19.5px]'>Mr. John Doe</div>
                            <div className='text-[#4f4f4f] text-semibold text-sans text-[18px] leading-[19.44px]'>Design Manager</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurClients
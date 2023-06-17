import Marquee from 'react-fast-marquee';

const slides = [
    'https://i.ibb.co/Tw0d6Zy/image-6.png',
    'https://i.ibb.co/tCtnz8q/marketo.png',
    'https://i.ibb.co/Lksc369/stripe.png',
    'https://i.ibb.co/tm8TSCf/razorpay.png',
    'https://i.ibb.co/Tw0d6Zy/image-6.png',
    'https://i.ibb.co/Tw0d6Zy/image-6.png',
    'https://i.ibb.co/tCtnz8q/marketo.png',
    'https://i.ibb.co/Lksc369/stripe.png',
    'https://i.ibb.co/tm8TSCf/razorpay.png',
    'https://i.ibb.co/Tw0d6Zy/image-6.png',
    'https://i.ibb.co/tCtnz8q/marketo.png',
];

function Image({ src }: { src: string }) {
    return <img
        src={src}
        // className='mx-[60px]'
        width='100%'
        height={'100%'}
    />
}

function CompaniesSection() {

    return (
        <>
            <section className='w-[100vw] h-[150px] flex items-center mt-[200px] py-[100px] justify-center flex-col relative'>
                <div className='text-[36px] text-sans font-bold text-grey1'>Trust by over 20 companies</div>

                <div className='mt-[60px] flex items-center justify-center'>
                    <Marquee speed={50} pauseOnHover={true} gradient pauseOnClick={true} className='max-w-[50%] flex items-center  justify-between' direction='right'>
                        {slides.map((slide) => {
                            return <div className='px-[10px] mx-[25px] flex items-center justify-center w-[100px] h-[100px]'>
                                <Image src={slide} />
                            </div>
                        })}
                    </Marquee>
                </div>
                <div className='flex items-center justify-center mt-[50px]'>
                    <div className='w-[80vw] h-[1px] mb-[200px]'
                        style={{ background: 'linear-gradient(270deg, rgba(78, 78, 78, 0) -1.35%, #434343 48.81%, rgba(0, 0, 0, 0) 100%)' }}
                    >

                    </div>
                </div>

            </section >

        </>
    )
}

export default CompaniesSection;
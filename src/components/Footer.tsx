import { useState } from 'react';

function FooterLink({ children, href = '#' }: { children: React.ReactNode, href?: string }) {
    return < a href={href} className='text-[16px] text-white text-sans font-semibold leading-[30px]' > {children}</a >
}

const OurCompany = [
    { text: "About Webure", href: "#" },
    { text: "Pricing", href: "#" },
    { text: "Referral Program", href: "#" },
    { text: "#GivingBackToCommunity", href: "#" },
    { text: "Employee Referral", href: "#" },
    { text: "Our Culture", href: "#" },
    { text: "Corporate Social Reponsibility", href: "#" },
    { text: "Careers", href: "#" },
    { text: "Contact Us", href: "#" },
    { text: "FAQs", href: "#" },
]

const BuildYourTeam = [
    { text: "How It Works", href: "#" },
    { text: "Why offshort", href: "#" },
    { text: "Pricing estimator", href: "#" },
    { text: "Video Profiles", href: "#" },
    { text: "About Webure", href: "#" },
    { text: "Remote Blogs", href: "#" },
    { text: "Take the Assignment", href: "#" },
]

const Services = [
    { text: "SEO Service", href: "#" },
    { text: "SME Service", href: "#" },
    { text: "Email Marketing", href: "#" },
    { text: "Design Services", href: "#" },
    { text: "Frontend Development", href: "#" },
    { text: "Wordpress Development", href: "#" },
    { text: "HubSpot Development", href: "#" },
    { text: "Marketo Automation", href: "#" },
    { text: "Salesforce Automation", href: "#" },
]

const Resouces = [
    { text: "Blogs", href: "#" },
    { text: "Podcast", href: "#" },
    { text: "Case Studies", href: "#" },
    { text: "Testimonials", href: "#" },
    { text: "eBooks", href: "#" },
    { text: "Infographics", href: "#" },

]

function Footer() {
    const [email, setEmail] = useState('');
    return (
        <footer className='flex flex-col justify-center items-center bg-[#1A1F39]  py-[50px]'>
            <div className="w-[90%] flex flex-col items-center justify-center">
                <div className='flex justify-around w-[100%] py-[60px]'>
                    <div className='flex flex-col'>
                        <div className='text-sans font-bold text-[22px] leading-[32px] text-[#fff]'>Our company</div>
                        {OurCompany.map((item) => {
                            return <FooterLink href={item.href}>{item.text}</FooterLink>
                        })}
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-sans font-bold text-[22px] leading-[32px] text-[#fff]'>Build Your Team</div>
                        {BuildYourTeam.map((item) => {
                            return <FooterLink href={item.href}>{item.text}</FooterLink>
                        })}
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-sans font-bold text-[22px] leading-[32px] text-[#fff]'>Services</div>
                        {Services.map((item) => {
                            return <FooterLink href={item.href}>{item.text}</FooterLink>
                        })}
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-sans font-bold text-[22px] leading-[32px] text-[#fff]'>Resouces</div>
                        {Resouces.map((item) => {
                            return <FooterLink href={item.href}>{item.text}</FooterLink>
                        })}
                    </div>
                </div>
                <div className='w-[100%] h-[2px] bg-[#fff] mb-[30px]' />
                <div className='flex items-center w-[100%]   justify-around'>
                    <div className='flex flex-col'>
                        <div className='text-sans font-semibold leading-[30px] text-white'>Sign up for Webure Emails</div>
                        <div className='w-[326px] h-[55px] bg-white flex items-center justify-between'>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-[80%] h-[100%]'
                            />
                            <div className='flex w-[20%] h-[90%] mr-[5px] items-center justify-center bg-[#1A1F39]'>
                                <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.541672 0.125L10.4583 6.5L0.541672 12.875V0.125Z" fill="white" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-sans font-semibold leading-[30px] text-white'>Choose region</div>
                        <select name='region' className='bg-[#1A1F39] text-white border-[1.5px] py-[5px] w-[195px] h-[55px] px-[5px]'>
                            <option value='India'>India</option>
                            <option value='USA'>USA</option>
                        </select>
                    </div>
                    <div className='flex gap-[15px]'>
                        <div>
                            <img
                                src='https://i.ibb.co/Trrx5gw/1.png'
                                alt='fbIcon'
                            />
                        </div>
                        <div>
                            <img
                                src='https://i.ibb.co/sWhvs9j/2.png'
                                alt='youtubeIcon'
                            />
                        </div>
                        <img
                            src='https://i.ibb.co/GpKPfvh/3.png'
                            alt='twitterIcon'
                        />
                        <img
                            src='https://i.ibb.co/KV6Xr5Z/4.png'
                            alt='googlePlusIcon'
                        />
                        <img
                            src='https://i.ibb.co/8b5ttsB/5.png'
                            alt='instaIcon'
                        />
                    </div>
                </div>
                <div className='w-[80%]  flex flex-col justify-around items-end'>
                    <div className='text-yellow text-sans font-bold text-[24px] leading-[30px]'>+91-0123456789</div>
                    <div className='text-yellow text-sans font-bold text-[24px] leading-[30px]'>sales@webure.in</div>
                </div>
                <div className='w-[100%] h-[2px] bg-[#fff] my-[30px]' />
                <div className='flex items-center justify-around w-[100%]'>
                    <div className='flex flex-col max-w-[240px] py-[60px]'>
                        <div className='text-[20px] text-white text-semibold leading-[30px] text-sans'>India</div>
                        <div className='text-[22px] text-yellow text-semibold leading-[30px] text-sans'>Banglore</div>
                        <div className='text-white text-[16px] text-sans font-semibold leading-[30px]'>India
                            Bangalore
                            #310G, Whitefield Post Office Road, Whiefield, Bangalore, Karnataka 560103, India</div>
                    </div>
                    <div className='h-[295px] w-[3px] bg-white'></div>
                    <div className='flex flex-col max-w-[240px]'>
                        <div className='text-[20px] text-white text-semibold leading-[30px] text-sans'>Cannada</div>
                        <div className='text-[22px] text-yellow text-semibold leading-[30px] text-sans'>Hamilton</div>
                        <div className='text-white text-[16px] text-sans font-semibold leading-[30px]'>Cannada
                            Hamilton
                            155-2 King Street West Unit #145 Hamilton, ON L8P 4S0 Canada</div>
                    </div>
                    <div className='h-[295px] w-[3px] bg-white'></div>
                    <div className='flex flex-col max-w-[240px]'>
                        <div className='text-[20px] text-white text-semibold leading-[30px] text-sans'>New York</div>
                        <div className='text-[22px] text-yellow text-semibold leading-[30px] text-sans'>New York City</div>
                        <div className='text-white text-[16px] text-sans font-semibold leading-[30px]'>India
                            New York
                            New York City
                            One World Trade Center, 285 Fulton Street Suite 8500, New York City NY 10007, USA</div>
                    </div>
                    <div className='h-[295px] w-[3px] bg-white'></div>
                    <div className='flex flex-col max-w-[240px]'>
                        <div className='text-[20px] text-white text-semibold leading-[30px] text-sans'>New Zealand</div>
                        <div className='text-[22px] text-yellow text-semibold leading-[30px] text-sans'>Auckland</div>
                        <div className='text-white text-[16px] text-sans font-semibold leading-[30px]'>New Zealand
                            Auckland
                            Level 26, HSBC Tower, 188 Quay Street, Auckland, AUK 1010 New Zealand</div>
                    </div>
                </div>
                <div className='w-[100%] h-[2px] bg-[#fff]' />
                <div className='w-[100%] flex items-center justify-center text-sans text-[16px] leading-[30px] font-semibold text-white'>
                    © 2021 Webure Technologies. All rights reserved. Privacy Policy  |  ISMS Policy
                </div>
            </div>
        </footer>
    )
}

export default Footer;
interface OrangeButton {
    children: React.ReactNode,
    ariaLabel?: string,
    width?: number,
    height?: number
}

function OrangeButton({ children, ariaLabel }: OrangeButton) {
    return (
        <button
            type='button'
            aria-describedby="button"
            aria-label={ariaLabel ? ariaLabel : 'button'}
            className='bg-orange text-white text-[18px] font-semibold flex items-cente justify-center sm:px-[15px] sm:py-[10px] xl:py-[12.5px] xl:px-[30px] rounded-full'
        >
            {children}
        </button>
    )
}
export function WhiteButton({ children, ariaLabel }: OrangeButton) {
    return (
        <button
            type='button'
            aria-describedby="button"
            aria-label={ariaLabel ? ariaLabel : 'button'}
            className='bg-white text-grey2 text-[18px] font-semibold flex items-cente justify-center py-[12.5px] px-[30px] rounded-full'
        >
            {children}
        </button>
    )
}

export default OrangeButton
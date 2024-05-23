import React from 'react';
import Image from 'next/image';

const LogoSVG = '/images/InterviewifyLogo.png';

const Logo = () => {
    return (
        <div className="relative">
            <Image src={LogoSVG} width={172} height={32} alt='Interviewify logo' />
        </div>
    )
}

export default Logo;
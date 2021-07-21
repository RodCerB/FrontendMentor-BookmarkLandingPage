import React,{useState} from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import iconBM from '../assets/logo-bookmark.svg'
import iconHG from '../assets/icon-hamburger.svg'
import MobileNavbar from './mobileNavbar'

const NavBar = () => {
    const [openNav, setOpenNav] = useState(false)

    const isMobile = useMediaQuery({
        query: "(max-device-width: 900px)",
    });

    if(isMobile){
        return (<Wrapper>
            <section>
                <img src={iconBM} alt="icon-bookmark" />
                <button className='hamburgerbtn' onClick={(e)=>setOpenNav(!openNav)}>
                    <img src={iconHG} alt="icon-hamburger" />
                </button>
                {openNav && <MobileNavbar />}
            </section>
            
        </Wrapper>)
    }

    return (<Wrapper>
        <section>
            <img src={iconBM} alt="icon-bookmark" />
            <div className='links'>
                    <a href="/">FEATURES</a>
                    <a href="/">PRICING</a>
                    <a href="/">CONTACT</a>
                    <button className='btnRed'>LOGIN</button>
                </div>
        </section>
    </Wrapper>)
}

const Wrapper = styled.main`
    
    section{
        padding: 3.625rem 10.625rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    .links{
        display: flex;
        align-items: center;
        gap: 2.875rem;

        p{
            color: var(--clr-navy);
        }
    }

    @media (max-width: 900px) {
        section{
            padding: 2.5rem 2rem;
        }
        .hamburgerbtn{
            background: none;
            border: none;
        }
    }
`

export default NavBar
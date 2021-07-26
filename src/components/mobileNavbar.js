import styled from 'styled-components'
import iconBM from '../assets/logo-bookmark-mobile.svg'
import iconClose from '../assets/icon-close.svg'
import iconFace from '../assets/icon-facebook.svg'
import iconTwit from '../assets/icon-twitter.svg'

const MobileNavbar = ({setOpenNav}) =>{

    return <Wrapper>
        <section>
            <div className='menuMob'>
                <img src={iconBM} alt="icon-bookmark-mobile" />
                <img src={iconClose} alt="" onClick={(e)=>setOpenNav(false)}/>
            </div>
            <div className='linksMob'>
                <a href="/">FEATURES</a>
                <a href="/">PRICING</a>
                <a href="/" className='lastLink'>CONTACT</a>
                <button className='btnMob'>LOGIN</button>
            </div>
            <div className='linksSocial'>
                <a href="https://www.facebook.com/"><img src={iconFace} alt="link-facebook" /></a>
                <a href="https://twitter.com "><img src={iconTwit} alt="link-twitter" /></a>
            </div>
        </section>
    </Wrapper>
}

const Wrapper = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--clr-clear-navy);
    width: 100%;
    height: 100%;
    color: white;

    section{
        padding: 2.5rem 2rem;
        padding-bottom: 3rem;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
    .menuMob{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2.5rem;
    }
    .linksMob{
        display: flex;
        flex-direction: column;
    }
    .linksSocial{
        position: absolute;
        left: 0;
        bottom: 10%;
        width: 100%;
        text-align: center;
        a{
            border: none;
            margin: 1.25rem;
        }
    }
    a{
        color: white;
        border-top: 1px solid #ffffff6c;
        width: 100%;
        text-align: center;
        padding: 1.375rem 0;
    }
    .lastLink{
        border-bottom: 1px solid #ffffff6c;
    }
    .btnMob{
        margin-top: 1.375rem;
        background: none;
        border: 2px solid white;
    }
`

export default MobileNavbar
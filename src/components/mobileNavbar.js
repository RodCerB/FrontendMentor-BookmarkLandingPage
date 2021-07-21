import styled from 'styled-components'
import iconBM from '../assets/logo-bookmark-mobile.svg'
import iconClose from '../assets/icon-close.svg'

const MobileNavbar = () =>{

    return <Wrapper>
        <section>
            <div className='menuMob'>
                <img src={iconBM} alt="icon-bookmark-mobile" />
                <img src={iconClose} alt="" />
            </div>
            <div className='linksMob'>
                <a href="/">FEATURES</a>
                <a href="/">PRICING</a>
                <a href="/">CONTACT</a>
                <button className='btnMob'>LOGIN</button>
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
    a{
        color: white;
        border-top: 1px solid white;
        width: 100%;
        text-align: center;
        padding: 1.375rem 0;
    }
    .btnMob{
        background: none;
        border: 2px solid white;
    }
`

export default MobileNavbar
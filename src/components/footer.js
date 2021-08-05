import styled from "styled-components"
import iconBM from '../assets/logo-bookmark-mobile.svg'
import iconFace from '../assets/icon-facebook.svg'
import iconTwit from '../assets/icon-twitter.svg'

const Footer = () => {

    return <Wrapper>
        <section>
            <div className='footer1'>
            <img src={iconBM} alt="icon-bookmark" className='icon-bookmark'/>
            <div className='linksMob'>
                <a href="/">FEATURES</a>
                <a href="/">PRICING</a>
                <a href="/" className='lastLink'>CONTACT</a>
            </div>
            </div>
            <div className='linksSocial'>
                <a href="https://www.facebook.com/"><img src={iconFace} alt="link-facebook" /></a>
                <a href="https://twitter.com "><img src={iconTwit} alt="link-twitter" /></a>
            </div>
        </section>
    </Wrapper>
}

const Wrapper = styled.main`
    section{
        background-color: var(--clr-navy);
        text-align: center;
        padding: 2.4375rem 0;

        .icon-bookmark{
            margin-bottom: 2.75rem;
        }
        .linksMob{
            display: flex;
            flex-direction: column;
            gap: 2.25rem;
            a{
                color: white;
            }
        }
        .linksSocial{
            display: flex;
            width: fit-content;
            margin: 2.25rem auto 0;
            gap: 2.375rem;
        }
    }

    @media (min-width: 900px){
        section{
            padding: 1.875rem 10.1875rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .icon-bookmark{
                margin: 0;
            }
            .footer1{
                display: flex;
                gap: 3.875rem;
                align-items: center;
            }
            .linksMob{
                flex-direction: row;
            }
            .linksSocial{
                margin: 0;
            }
        }
    }
`

export default Footer
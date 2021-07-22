import styled from 'styled-components'
import heroImg from '../assets/illustration-hero.svg'

const Hero = () =>{

    return <Wrapper>
        <section>
            <div className='heroText'>
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div>
                    <button className='btnBlue'>Get it on Chrome</button>
                    <button className='btnGrey'>Get it on Firefox</button>
                </div>
            </div>
            <div className='heroLogo'>
                <img src={heroImg} alt="hero-img" />
                <div className='blueBG'/>
            </div>
        </section>
    </Wrapper>
}

const Wrapper = styled.main`

    section{
        display: flex;
        flex-direction: column-reverse;
        text-align: center;
    }
    .heroText{
        padding: 0 1.875rem;
        h1,p{
            margin-bottom: 1.625rem;
        }
        div{
            display: flex;
            justify-content: space-between;
            gap: 0.75rem;
            button{
                font-size: 0.9375rem;
                padding: 1rem;
            }
        }
    }
    .heroLogo{
        position: relative;
        margin-bottom: 3.625rem;
        img{
            position: relative;
            z-index: 500;
            width: 85%;
        }
        .blueBG{
            position: absolute;
            background-color: var(--clr-blue);
            border-bottom-left-radius: 100px;
            width: 77%;
            height: 12.5rem;
            right: 0;
            bottom: 0;
        }
    }

    @media (min-width: 900px) {
        section{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        .heroText{
            text-align: left;
            margin-left: 10.625rem;
            padding: 0;
            width: 34%;
            div{
                justify-content: flex-start;
            }
        }
        .heroLogo{
            /* img{
                width: 40vw;
            } */
            margin-bottom: 0;
            .blueBG{
                height: 18rem;
            }
        }
        
    }
`

export default Hero
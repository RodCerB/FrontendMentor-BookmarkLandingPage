import styled from 'styled-components'
import heroImg from '../assets/illustration-hero.svg'

const Hero = () =>{

    return <Wrapper>
        <section>
            <div className='heroText'>
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div>
                    <button>Get it on Chrome</button>
                    <button>Get it on Firefox</button>
                </div>
            </div>
            <div className='heroLogo'>
                <img src={heroImg} alt="hero-img" />
            </div>
        </section>
        ola muchacho
    </Wrapper>
}

const Wrapper = styled.main`

    section{
        display: flex;
        flex-direction: column-reverse;
        text-align: center;
    }
    .heroLogo{
        img{
            width: 85%;
        }
    }

`

export default Hero
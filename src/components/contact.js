import styled from "styled-components"
import error from '../assets/icon-error.svg'

const Contact = () =>{

    return <Wrapper>
        <section>
            <p>35,000+ ALREADY JOINED</p>
            <h2>Stay up-to-date with what we're doing</h2>
            <form >
                <div className='emailContainer'>
                    <input type="email" className='formEmail' placeholder='Enter your email address'/>
                    {/* <img src={error} alt="erro" className='formError'/> */}
                </div>
                <button className='btnRed'>Contact Us</button>
            </form>
        </section>
    </Wrapper>
}

const Wrapper = styled.main`
    section{
        margin-top: 9.15rem;
        background-color: var(--clr-blue);
        text-align: center;
        color: white;
        padding: 4.5rem 0 4.6875rem;

        h2{
            color: inherit;
            width: 28.75%;
            margin: 2.875rem auto 2.5625rem;
        }
        form{
            display: flex;
            justify-content: center;
            gap: 1.125rem;

            .emailContainer{
                position: relative;
                z-index: 9;
                width: 21vw;
                border-radius: 10px;
                background-color: white;
                padding: 1.125rem 1.375rem;
                padding-right: 0.5rem;
                display: flex;
                justify-content: space-between;
            }

            .formEmail{
                color: var(--clr-text);
                font-family: 'Rubik', sans-serif;
                font-size: 1.125rem;
                border: none;
                outline: none;
            }
        }
    }

    @media (max-width: 900px){
        section{
            h2{
                width: 82%;
            }
            form{
                flex-direction: row;
                flex-wrap: wrap;
                width: 82%;
                margin: auto;

                .emailContainer, .btnRed{
                    width: 100%;
                }
            }
        }
    }

`
export default Contact

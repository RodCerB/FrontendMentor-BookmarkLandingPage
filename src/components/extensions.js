import styled from "styled-components"
import chrome from '../assets/logo-chrome.svg'
import firefox from '../assets/logo-firefox.svg'
import opera from '../assets/logo-opera.svg'
import dots from '../assets/bg-dots.svg'

const Extensions = () => {
    const browsers = [
        {img:chrome, name:'Chrome', ver:'62'},
        {img:firefox, name:'Firefox', ver:'55'},
        {img:opera, name:'Opera', ver:'46'}]

    return <Wrapper>
        <section>
        <h2>Download the extension</h2>
        <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
        <div className='brows-container'>
            {browsers.map((brow, id)=>{
                return <div className={`brow-ind num-${id}`} key={id}>
                    <img src={brow.img} alt="browser logo" className='logo'/>
                    <h3>Add to {brow.name}</h3>
                    <p>Minimum version {brow.ver}</p>
                    <img src={dots} alt="dots" className='dots'/>
                    <button className='btnBlue'>Add & Install Extension</button>
                </div>
            })}
        </div>
        </section>  
        
    
    </Wrapper>
}

const Wrapper = styled.main`
    section{
        text-align: center;
        margin: 9.8125rem auto 0;
        width: 75vw;
        font-size: 0.875rem;
        p{
            margin-top: 1.5rem;
        }
        .brows-container{
            margin-top: 3rem;

            .brow-ind{
                width: 75.2vw;
                margin-bottom: 2.375rem;
                border-radius: 10px;
                box-shadow: 0 0.8rem 1em rgba(94, 94, 245, 0.315);
                
                .logo{
                    margin: 3rem 0 2rem;
                }
                p{
                    margin: 1rem 0 2rem;
                }
                .dots{
                    margin-bottom: 1.375rem;
                }
                .btnBlue{
                    margin-bottom: 1.375rem;
                }
            }
        }
    }

    @media (min-width: 900px){
        section{
            margin-top: 13.5rem;
        }
    }
`

export default Extensions
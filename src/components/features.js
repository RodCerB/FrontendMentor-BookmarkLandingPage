import React, {useState} from "react"
import styled from "styled-components"
import tab1 from '../assets/illustration-features-tab-1.svg'
import tab2 from '../assets/illustration-features-tab-2.svg'
import tab3 from '../assets/illustration-features-tab-3.svg'
import { useMediaQuery } from 'react-responsive'
 
const Features = () => {
    const [value, setValue] = useState(0)
    const feats = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']
    const tabs = [
        {   img:tab1,
            title:'Bookmark in one click', 
            txt:'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
        },
        {   img:tab2,
            title:'Intelligent search', 
            txt:'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
        },
        {   img:tab3,
            title:'Share your bookmarks', 
            txt:'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
        },
    ]

    const isDesktop = useMediaQuery({
        query: "(min-device-width: 900px)",
    });


    return <Wrapper>
        <section>
            <h2>Features</h2>
            <p>Our aim is to make it quick and easy for you to access your favorite websites. Your bokmarks sync between your devices so you can access them on the go.</p>
            <div className='feats-container'>
                {feats.map((feat, id) =>{
                    return <div className='feat-ind' onClick={()=>setValue(id)}>
                        <p 
                        key={id} 
                        className={`feat-btn ${id===value && 'activate'}`}>{feat}</p>
                    </div>
                })}
            </div>
            <div className='feats-tabs'>
                <div className='feat-logo'>
                    <img src={tabs[value].img} alt="feat-img" />
                    <div className='blueBG'/>
                </div>
                <div className='feat-txt'>
                    <h2>{tabs[value].title}</h2>
                    <p>{tabs[value].txt}</p>
                </div>
            </div>
        </section>
    </Wrapper>
}

const Wrapper = styled.main`

    section{
        margin-top: 9rem;
        text-align: center;
        padding: 0 1.875rem;
        
        h2{
            margin-bottom: 1.438rem;
        }

        .feats-container{
            border-bottom: 1px solid var(--clr-text);
            margin-top: 2.75rem;
            margin-bottom: 4.5rem;

            .feat-ind{
            cursor: pointer;
            border-top: 1px solid var(--clr-text);
            padding-top: 1.3125rem;
        }
        .feat-btn{
            font-weight: 500;
            padding-bottom: 1rem;
            width: fit-content;
            margin: auto;
        }
        .activate{
            color: var(--clr-navy);
            border-bottom: 4px solid var(--clr-red);
        }
        }
        
        .feat-logo{
        position: relative;
        margin-bottom: 3.625rem;
            img{
                position: relative;
                z-index: 500;
                width: 85%;
                min-height: 12.625rem;
            }
            .blueBG{
                position: absolute;
                background-color: var(--clr-blue);
                border-bottom-right-radius: 100px;
                width: 77%;
                min-height: 12.5rem;
                left: 0;
                top: 2rem;
            }
        }
        .feat-txt{
            padding: 0 1.875rem;
            p{
                font-size: 0.875rem;
            }
        }
    }
`

export default Features
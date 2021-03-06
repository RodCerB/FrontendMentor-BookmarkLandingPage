import styled from "styled-components"
import React, {useState} from "react"
import arrw from '../assets/icon-arrow.svg'

const Questions = () => {
    const [index, setIndex] = useState(null)
    const qas = [
        {
            quest:'What is Bookmark?',
            answ: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas voluptate tenetur minima suscipit alias accusantium? Eius autem nostrum, error quasi dolore magni doloremque repellat rem perferendis temporibus voluptatibus magnam at? Dolor ipsam tempora consectetur tenetur labore repellendus expedita officia beatae, consequatur modi voluptate aspernatur quaerat? Adipisci fugit obcaecati magni deleniti cum voluptas est veritatis tempore itaque nihil. Ut asperiores id iusto earum eius'
        },
        {
            quest:'How can I request a new browser?',
            answ: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae, neque culpa velit blanditiis voluptatum minus modi debitis. Ipsum perferendis laborum id nostrum ipsam tenetur, dolores maxime repellat quasi possimus ipsa ad, iure dolorum illum porro magni! Labore aut odit dolore dolorem ipsa dicta! Officia, eos sequi, id fuga nostrum magnam minima nulla debitis vero velit repellendus repellat placeat porro suscipit saepe obcaecati alias minus. Quos modi nihil excepturi ratione'
        },
        {
            quest:'Is there a mobile app?',
            answ: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, necessitatibus? Suscipit eaque reprehenderit rem rerum expedita. Corrupti velit natus vitae culpa blanditiis commodi, quibusdam cupiditate. Ea quia, laudantium incidunt nemo nulla, fugit officia architecto asperiores doloribus laborum aspernatur, illo reprehenderit eius corporis saepe libero assumenda.'
        },
        {
            quest:'What about other Chromium browsers?',
            answ: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, tempora est consequatur rerum architecto officiis ab magnam sunt esse? Minima accusantium, libero itaque unde enim reprehenderit iusto optio corporis soluta totam dolores aut labore rerum ipsa sint, dolorum necessitatibus nihil odio deleniti illo distinctio accusamus. Praesentium aspernatur laboriosam quod consequuntur ex, voluptatum quasi numquam sint tempore eligendi corporis aut autem dignissimos dolorem repellendus totam quisquam asperiores!'
        },
    ]
    const showQuest = (id) =>{
        if(id===index){
            setIndex(null)
        }
        else(setIndex(id))
    }

    return <Wrapper>
        <section>
            <h2>Frequently Asked Questions</h2>
            <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            <div className='qaContainer'>
                {qas.map((qa, id)=>{
                    return <div className='qaInd' key={id} onClick={()=>showQuest(id)}>
                        <div className='qaTitle'>
                            <p className='qaType'>{qa.quest}</p>
                            <img src={arrw} alt="arrow" className={id===index ? 'arrowDown rotate' : 'arrowDown'}/>
                        </div>
                        <p className={id===index ? 'text' : 'text out'}>{qa.answ}</p>
                    </div>
                })}
            </div>
            <button className='btnBlue'>More Info</button>
        </section>
    </Wrapper>
}

const Wrapper = styled.main`
    section{
        margin: 9.6875rem auto 0;
        width: 38vw;
        text-align: center;
        p{
            margin-top: 2.25rem;
        }
        .qaContainer{
            margin: 3.8125rem 0 3.25rem;
            border-top: 1px solid var(--clr-text);
            .qaInd{
                padding: 1.5rem 0;
                border-bottom: 1px solid var(--clr-text);
                cursor: pointer;
                text-align: left;

                .qaTitle{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .qaType{
                        color: var(--clr-navy);
                        margin: 0;
                    }
                    
                }
            }
            .qaInd:hover{
                .qaType{
                    color: var(--clr-red);
                }
            }
        }

        .rotate{
            transform: rotate(180deg);
        }
        .out{
            display: none;
        }
    }


    @media (max-width: 900px){
            section{
                width: 85vw;
                margin: 8.8125rem auto 0;
                
                .qaContainer{
                    font-size: 0.875rem;
                }
            
            }
        }


`

export default Questions
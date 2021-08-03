import styled from "styled-components"

const Contact = () =>{

    return <Wrapper>
        <section>
            <p>35,000+ ALREADY JOINED</p>
            <h2>Stay up-to-date with what we're doing</h2>
        </section>
    </Wrapper>
}

const Wrapper = styled.main`
    section{
        margin-top: 9.15rem;
        background-color: var(--clr-blue);
        text-align: center;
        color: white;
        padding-top: 4.5rem;

        h2{
            color: inherit;
            width: 28.75%;
            margin: 2.875rem auto 2.5625rem;
        }
    }

`
export default Contact

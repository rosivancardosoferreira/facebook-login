import styled from 'styled-components';

export const ContainerHome = styled.div`
    .screen {
        min-width: 980px;
        width: 980px;
        margin: auto;
    }      
    .idiomas {
        border-bottom: 1px solid ${props => props.theme.tertiaryGray};
    }

    .copyright {
        margin-top: 1.5rem;
        h6 {
            color: ${props => props.theme.secondaryGray};
            font-weight: 400;
        }
    }
`;

export const ContLogin = styled.div`
    display: flex;
    background-color: ${props => props.theme.background};    
    height: 74vh;
`;

export const SafeAreaContLogin = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Presentation = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding-right: 2rem;
    margin-top: 2rem;
    img {
        width: 270px;
        height: 70px;
    }

    span {
        font-size: 1.8rem;
        color: ${props => props.theme.primaryGray};
    }

`;

export const Form = styled.div`
    width: 40%;

    .page {
        margin-top: 1.5rem;
        span {
            font-size: .9rem;
            color: ${props => props.theme.primaryGray};

            a {
                text-decoration: none;
                color: ${props => props.theme.primaryGray};
                font-weight: 600;

                &:hover {
                    color: ${props => props.theme.black};
                    text-decoration: underline;
                }
            }

        }

    }
`;

export const Login = styled.form`
    background-color: ${props => props.theme.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding: 0 1rem 1.5rem 1rem;
    box-shadow: 0 10px 50px -10px rgba(0,0,0,0.25);
    input {
        width: 100%;
        font-size: 1rem;
        border-radius: 7px;
        color: ${props => props.theme.primaryGray};
        padding: .8rem;
        margin-top: 1.2rem;
        border: 1px solid ${props => props.theme.tertiaryGray};

        &:focus {
            border: 1px solid ${props => props.theme.blue};
        }
    }

    button {
        padding: .8rem;
        border-radius: 8px;
        font-size: 1.25rem;
        border: none;
        font-weight: 600;
        color: ${props => props.theme.white}; 
        margin-top: 1.5rem;
        cursor: pointer;
    }

    .signin {
        width: 100%;
        background-color: ${props => props.theme.blue};
        &:hover{
            background-color: ${props => props.theme.blueDark}
        }
        
    }
    .create {
        background-color: ${props => props.theme.green};
        &:hover{
            background-color: ${props => props.theme.greenDark}
        }
        
    }

    a{
        color: ${props => props.theme.blue};
        font-size: .9rem;
        text-decoration: none;
        margin: 1rem 0;
        &:hover {
            text-decoration: underline;
        }
    }


    hr{
       width: 100%;
       border: 1px solid ${props => props.theme.tertiaryGray};     
    }
`;

export const Options = styled.ul`
    list-style: none;
    display: flex;    
    flex-wrap: wrap;
    padding: .5rem 0;
    li {
        margin-right: 1rem;
        a {
            text-decoration: none;
            font-size: .9rem;
            color: ${props => props.theme.secondaryBlueDark};
            &:hover {
                text-decoration: underline;
            }
        }
        .selected{
            color: ${props => props.theme.secondaryGray};
            cursor: default;
            &:hover {
                text-decoration: none;
            }
        }
    }

`;

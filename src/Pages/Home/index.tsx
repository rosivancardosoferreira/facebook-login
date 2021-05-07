import React, { } from 'react';

//ASSETS
import Logo from 'Assets/images/logo.svg';

//STYLES
import {
    ContainerHome,
    ContLogin,
    SafeAreaContLogin,
    Presentation,
    Form,
    Login,
    Options,
} from './styles';

export default function Home() {
    return (
        <ContainerHome>
            <ContLogin>
                <SafeAreaContLogin className="screen">
                    <Presentation>
                        <img src={Logo} alt="Logo Facebook"/>
                        <span>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</span>
                    </Presentation>
                    <Form>
                        <Login>
                            <input type="text" name="" id="" placeholder="Email ou telefone" autoComplete="off" />
                            <input type="password" name="" id="" placeholder="Senha" />
                            <button className="signin">Entrar</button>
                            <a href="#">Esqueceu sua senha?</a>
                            <hr/>
                            <button className="create">Criar nova conta</button>
                        </Login>
                        <div className="page">
                            <span><a href="#">Criar uma Página </a>para uma celebridade, banda ou empresa.</span>
                        </div>
                    </Form>
                </SafeAreaContLogin>
            </ContLogin>
            <Options className="screen idiomas">
                <li>
                    <a className="selected" href="#">Português (Brasil)</a>
                </li>
                <li>
                    <a href="#">Other Language</a>
                </li>
                <li>
                    <a href="#">Other Language</a>
                </li>
                <li>
                    <a href="#">Other Language</a>
                </li>
                <li>
                    <a href="#">Other Language</a>
                </li>
                <li>
                    <a href="#">Other Language</a>
                </li>
                <li>
                    <a href="#">Other Language</a>
                </li>
                <li>
                    <a href="#">Other Language</a>
                </li>
            </Options>

            <Options className="screen">
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
                <li>
                    <a href="#">Option</a>
                </li>
            </Options>
            <div className="copyright screen">
                <h6>Facebook &copy; 2021</h6>
            </div>
        </ContainerHome>

    )
}
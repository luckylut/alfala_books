
import Logo from "../Logo";
import OptionsHeader from "../OptionsHeader";
import IconesHeader from "../IconesHeader";
import styled from 'styled-components'


const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`



function Header() {
    return (
        <header className="App-header">
            <HeaderContainer >
                <Logo />
                <OptionsHeader />
                <IconesHeader />
            </HeaderContainer>
        </header>
    )
}

export default Header
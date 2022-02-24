import SearchBox from "../components/SearchBox"

import { StyledMessage } from "../components/styles/Message.styled"
import { StyledCard } from "../components/styles/Card.styled"
import { CardSection } from "../components/styles/Card.styled"
import { StyledButton} from "../components/styles/Button.styled"
import { StyledLink } from "../components/styles/Link.styled"
import { Container } from "../components/styles/Container.styled"

const Home = () => {
  return (
      <>
      <Container>
        <StyledMessage Alert>Nemáš ještě vytvořenou praxi v daném období.</StyledMessage>
        <StyledMessage Warn>Je třeba doplnit informace na vašem profilu.</StyledMessage>
        <StyledCard Big>
          <h2>Správa praxí</h2>
          <p>Vytvořte si praxi pomocí nasáledujících kroků. Kroky je, které je potřeba dodržet:</p>
          <h3>1. Doplnit informace</h3>
          <CardSection>
            <div>
              <p>Je potřeba doplnit všechny potřebné informace ve vašem profilu</p>
              <StyledButton><StyledLink to="/account">Doplnit informace</StyledLink></StyledButton>
            </div>
          </CardSection>

          <h3>2. Přidat firmu a adresu</h3>
          <CardSection>
            <div>
              <SearchBox />
              <StyledButton Green><a href="./intership.js">Přidat firmu</a></StyledButton>
              <StyledButton Green><a href="./intership.js">Přidat adresu</a></StyledButton>
            </div>
          </CardSection>

          <h3>3. Založit si Praxi</h3>
          <CardSection>
            <div>
              <p>Před založení praxe je nutné zkontrolovat jestli je u nás přidaná firma, kde budete praxi vykonávat.</p>
              <StyledButton><StyledLink to="/internship">Založit</StyledLink></StyledButton>
            </div>
          </CardSection>
        </StyledCard>
        <StyledCard Big>
          <h2>Aktivní praxe</h2>
          <h3>Microsoft s.r.o.</h3>
        </StyledCard>
      </Container>
      </>
  )
}

export default Home
import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import ThirdSectionContent from '../../utils/content.json'
import Content from '../../utils/content.json'
import {StyleCard} from '../Cards/Cards'


 const ThirdSection=()=>(
    <Fragment>
       <Container>
      <h2 className="title">Tecnologias assistivas</h2> 
        <p> Tecnologia Assistiva é um termo, utilizado para identificar todo o arsenal de Recursos e Serviços que contribuem para proporcionar ou ampliar habilidades funcionais de pessoas com deficiência e consequentemente promover Vida Independente e Inclusão.

            Seu objetivo proporcionar à pessoa com deficiência maior independência, qualidade de vida e inclusão social, através da ampliação de sua comunicação, mobilidade, controle de seu ambiente, habilidades de seu aprendizado, trabalho e integração com a família, amigos e sociedade.
            
        </p>
        <p><a href="http://www.assistiva.com.br/tassistiva.html/">Fonte: Assitiva</a></p>
        </Container>
        
        <Container className="display-flex">
        {Content.ThirdSectionContent.map(item => (
        <StyleCard
        title={item.title}
        text={item.content}
        reference={item.reference}> 
        </StyleCard>
    ))}
        </Container>  
    </Fragment>
)

export default ThirdSection
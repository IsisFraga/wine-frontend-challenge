# Desafio Técnico Wine (Front-End)

## SOBRE MIM
Eu sou a Isis Fraga, desenvolvedora Front End que aprendeu as letras do alfabeto no teclado do computador aos dois anos de idade.

Passei muitos anos deixando de lado minha vocação tecnológica (sou formada em Arquitetura e Urbanismo), mas finalmente agora me encontrei e trabalhar codando faz com que eu me sinta realizada e feliz. 

Sou colecionadora de ímãs dos lugares de minhas viagens, bebo bons vinhos (tenho duas assinaturaas da Wine, inclusive!) e sou apaixonada por animais - mãe de um cachorrinho de 12 anos e de duas gatinhas de 11 meses -, além de defensora da causa e voluntária nas horas vagas. 

Sou comunicativa, bem humorada e sempre procuro as soluções mais rápidas e práticas para os problemas. Estou sempre pronta para novos desafios. Sou uma pessoa organizada, criativa, que gosta muito de trabalhar em equipe, proativa e com perfil de liderança - gosto muito de tomar iniciativa!

## DESAFIOS ENFRENTADOS

Foi bastante desafiador em tão pouco tempo aprender a lidar com tecnologias que eu não era familiarizada, como React, NextJS e Redux Saga.
Minha experiência com Svelte / SvelteKit contribuiu para que o desafio fosse um pouco mais tranquilo, pois os conceitos são parecidos.


Esta foi minha primeira vez utilizando Styled Components, busquei o conceito de "utility first", me baseando no tailwindcss para montar meu tema (incluindo variáveis e breakpoints) do styled components.

## SOLUÇÕES IMPLEMENTADAS

Utilizei o conceito do **MOBILE FIRST**, e me baseei no layout do app do Figma para a versão mobile.

Me baseei nas funcionalidades do próprio site da Wine para desenvolver comportamentos no meu projeto, como por exemplo o carrinho de compras, que não possuía layout disponível no Figma.

Na sidebar da esquerda (que mostra os clubes, loja, etc), todos os itens redirecionam o usuário para páginas reais da Wine.

### FEATURES DESENVOLVIDAS

- O catálogo de produtos possui paginação
- Filtrar os produtos por preço
- Buscar pelo nome do produto
- Adicionar e remover produtos do carrinho (são guardados no Local Storage)

### PREOCUPAÇÕES NO DESENVOLVIMENTO DO PROJETO

- Componentização
- Responsividade
- Acessibilidade 
- Padrão de código
- Padrão de commits

## Rodando o projeto

Para rodar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## Referências utilizadas para o desenvolvimento do projeto:

https://gist.github.com/heygrady/2ebb3b4580891f3d87783fbe001dc703

https://github.com/vercel/next.js/blob/canary/examples/with-redux-saga/saga.js

https://bartekus.com/modular-redux/

https://gist.github.com/heygrady/2ebb3b4580891f3d87783fbe001dc703
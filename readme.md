# Movie Award

## Descrição

Este é um projeto React Native, criado com o proposito de demonstrar habilidades com o framework,
javascript, typescript e API requests.

## Instalação

Para instalar o projeto, siga estas etapas:

1. Clone o repositório.
2. Execute `npm install --legacy-peer-deps` para instalar as dependências.
3. Para rodar a aplicação nos dispositivos:
   - a. Execute `npm run ios` para iniciar o aplicativo em iOS.
   - b. Execute `npm run android` para iniciar o aplicativo em Android.
   - c. Execute `npm run web` para iniciar o aplicativo em navegador.
5. Para rodar a aplicação em um dispositivo real (iOS ou Android):
   - a. Baixe o `Expo Go` na loja de aplicativos do dispositivo.
   - b. Execute `npm start` e leia o QRCode gerado no terminal com a camera do dispositivo.

## Testes

Para executar os testes, siga estas etapas:

1. Execute `npm install --legacy-peer-deps` para instalar as dependências.
2. Execute `npm test` para rodar os testes disponíveis.

## Uso

Para usar o aplicativo, siga estas etapas:

1. Abra o aplicativo no seu dispositivo.
2. Explore as funcionalidades disponíveis.

## Funcionalidades

### Dashboard

- Exibe relatorios referentes aos filmes, produtores e estudios.
- Exibe relatório dos anos que tiveram mais filmes vencedores.
- Exibe relatório ranqueado dos 3 estudios que tiveram mais filmes vencedores
- Exibe relatório do intervalo minimo e máximo em anos, em que um mesmo produtor teve seu filme vencedor
- Permite ao usuário filtrar e visualizar 3 filmes vencedores de um ano especifico.

### Listagem de Filmes

- Permite ao usuário visualizar todos os filmes, podendo filtrar por ano e se o filme foi vencedor.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- `router.tsx`: Arquivo de rotas da aplicação, contém a estrutura de navegação em abas da aplicação.
- `*.test.tsx`: Arquivos de testes usados pelo Jest
- `components/`: Contém componentes de uso compartilhado entre a aplicação.
- `screens/`: Contém layout e integração com API referente as telas da aplicação.
- `api/`: Contém hooks de integração com a API rest.
- `types/`: Contém os types de uso compartilhado entre a aplicação.
- `assets/`: Contém os recursos estáticos, como imagens e fontes.

## Principais Dependências

- React Native: 0.73.6
- React: 18.2.0
- swr: ^2.2.5
- @react-navigation/bottom-tabs: ^6.5.20
- @react-navigation/native: ^6.1.17
- expo: ~50.0.14
- jest: ^29.7.0

## Melhorias

- Usar ENV vars para URL de API
- Testes de payload de API

## Licença

Este projeto está licenciado sob a MIT License.

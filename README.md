# Leve Saúde - Guia de Execução

Este projeto contém duas aplicações:

- **Web**: React + Vite
- **Mobile**: React Native (Expo + EAS Build)

## Pré-requisitos

- Node.js (recomendado v18+)
- Yarn ou npm
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (para emulador Android) ou dispositivo físico
- Arquivo .env enviado por email

---

## Rodando o projeto Web

1. **Acesse a pasta do projeto web:**

   ```sh
   cd test-web-leve-saude
   ```

2. **Instale as dependências:**

   ```sh
   npm install
   # ou
   yarn
   ```

3. **Configure as variáveis de ambiente:**

   - Coloque o arquivo `.env` (enviado por email) na raiz do projeto.

4. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   # ou
   yarn dev
   ```
   - Acesse [http://localhost:5173](http://localhost:5173) no navegador.

---

## Build do App Mobile com EAS Build

### Pré-requisitos

- Conta Expo (criar em https://expo.dev)
- Node.js instalado (v16+)
- Projeto Expo inicializado

### Passo a passo para desenvolvimento

1. **Acesse a pasta do projeto mobile:**

   ```sh
   cd test-mobile-leve-saude
   ```

2. **Instale as dependências do projeto:**

   ```sh
   npm install
   # ou
   yarn
   ```

3. **Instale o EAS CLI globalmente:**

   ```sh
   npm install -g eas-cli
   ```

4. **Faça login na sua conta Expo (ou crie uma):**

   ```sh
   eas login
   ```

5. **Verifique se o perfil de desenvolvimento está configurado:**

   Abra o arquivo `eas.json` na raiz do projeto e confirme que existe um perfil chamado "development" com a configuração:

   ```json
   "development": {
     "developmentClient": true,
     "distribution": "internal"
   }
   ```

6. **Construa a versão de desenvolvimento do aplicativo:**

   ```sh
   eas build --platform android --profile development
   ```

   Este processo levará alguns minutos. O EAS fará o build na nuvem e fornecerá um link para download quando estiver concluído.

7. **Instale o aplicativo gerado no seu dispositivo:**

   - Após o build ser concluído, você receberá um link para download
   - Baixe o arquivo APK no seu dispositivo Android
   - Ative "Instalar de fontes desconhecidas" nas configurações do seu dispositivo
   - Instale o aplicativo baixado

8 **Abra o aplicativo instalado no dispositivo** e escaneie o QR code exibido no terminal.

### Dicas para solução de problemas

- Se ocorrer o erro "Command 'eas' not found", reinstale o EAS CLI usando `npm install -g eas-cli`
- Verifique se sua conta Expo tem permissões para realizar builds

### Comandos alternativos

- **Para gerar uma preview do aplicativo:**

  ```sh
  eas build --platform android --profile preview
  ```

- **Para gerar uma versão de produção:**

  ```sh
  eas build --platform android --profile production
  ```

- **Para iOS (requer conta Apple Developer):**
  ```sh
  eas build --platform ios --profile development
  ```

---

## Observações

- Certifique-se de que o Firebase está corretamente configurado para ambos os projetos.
- Para rodar no iOS, é necessário um Mac com Xcode instalado.

---

## Scripts úteis

- **Web**

  - `npm run dev` — inicia o servidor de desenvolvimento
  - `npm run build` — gera build de produção
  - `npm run lint` — verifica padrões de código

- **Mobile**
  - `expo start` — inicia o projeto em modo desenvolvimento
  - `expo run:android` — compila e instala no emulador/dispositivo Android

---

## Estrutura de Pastas

```
test-leve-saude/
├── test-web-leve-saude/      # Projeto Web
├── test-mobile-leve-saude/   # Projeto Mobile
└── README.md                 # Este guia
```

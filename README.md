# Leve Saúde - Guia de Execução

Este projeto contém duas aplicações:

- **Mobile**: React Native (Expo + EAS Build)
- **Web**: React + Vite

## Pré-requisitos

- Node.js (recomendado v18+)
- Yarn ou npm
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (para emulador Android) ou dispositivo físico
- Arquivo .env enviado por email

---

## Build do App Mobile com EAS Build

### Pré-requisitos

- Conta Expo (criar em https://expo.dev)
- Node.js instalado (v18+)
- Projeto Expo inicializado (ou inicialize na hroa)

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
5. **depois rode**: 
``eas init``

6. **Construa a versão de desenvolvimento do aplicativo:**

   ```sh
   eas build --platform android --profile development
   ```

   Este processo levará alguns minutos. O EAS fará o build na nuvem e fornecerá um link para download quando estiver concluído.

7. **Instale o aplicativo gerado (acesse a conta expo e procure o projeto vinculado, depois instale) no seu dispositivo:**

   - Após o build ser concluído, você receberá um link para download
   - Baixe o arquivo APK no seu dispositivo Android
   - Ative "Instalar de fontes desconhecidas" nas configurações do seu dispositivo
   - Instale o aplicativo baixado
  
8. **NO terminal, rode o comando abaixo para iniciar o modo desenvolvimento:**
    ```sh
   npm start
   ```
9. **Abra o aplicativo instalado no dispositivo** e escaneie o QR code exibido no terminal.

### Dicas para solução de problemas

- Se ocorrer o erro "Command 'eas' not found", reinstale o EAS CLI usando `npm install -g eas-cli`
- Verifique se sua conta Expo tem permissões para realizar builds
- Se ocorrer erros ao gerar a Keystore, tente logar no expo novamente (com eas login)

### Comandos alternativos

- **Para gerar uma preview do aplicativo (usar sem precisar do computador, apenas baixar e instalar):**

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


## Rodando o projeto Web

### Observação: se não quiser instalar localmente, apenas acesse o link e faça o login com o email e senha de admin (também enviado por email para maior segurança) 

Link: https://test-web-leve-saude-eta.vercel.app/

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

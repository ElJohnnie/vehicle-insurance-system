# Estágio de construção
FROM node:16.20.0 as build-stage

# Configurar o diretório de trabalho
WORKDIR /usr/src/app

# Copiar os arquivos para o diretório de trabalho
COPY . .

# Instalar as dependências
RUN npm install

# Estágio de produção
FROM node:16.20.0 as production-stage

# Configurar o diretório de trabalho
WORKDIR /usr/src/app

# Copiar apenas os arquivos necessários para o estágio de produção
COPY --from=build-stage /usr/src/app/dist ./dist
COPY package*.json ./

# Instalar somente as dependências de produção
RUN npm install

# Expor a porta necessária pela sua aplicação
EXPOSE 3000

# # Comando para iniciar a aplicação
# CMD ["npm", "start"]

# Manter o container ativo para testes
CMD ["tail", "-f", "/dev/null"]

# Estágio de construção
FROM node:16.20.0 as build-stage

# Expor a porta 80 (se necessário)
EXPOSE 80

# Configurar o diretório de trabalho
WORKDIR /usr/src/app

# Copiar os arquivos para o diretório de trabalho
COPY ./ ./

# Instalar as dependências
RUN npm install

# Dar permissão ao diretório npm
RUN chmod a+x ~/.npm

# Executar o comando de construção
RUN npm run build

# Mostrar o conteúdo do diretório após a construção (apenas para depuração)
CMD ["ls"]

# Estágio de produção
FROM nginx as production-stage

# Configurar o diretório de trabalho
WORKDIR /usr/src/app

# Copiar o diretório "dist" do estágio de construção para o estágio de produção
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

# Copiar a configuração do Nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Dar permissão de leitura a outros usuários para os arquivos no diretório "dist"
RUN chmod -R o+r /usr/share/nginx/html

FROM nginx:1.22.1

RUN apt-get update && apt-get install -y nano

#COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Из заводского конфига указан путь include в верхнюю строку



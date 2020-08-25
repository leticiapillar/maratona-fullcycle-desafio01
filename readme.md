# Maratona FullCycle 4.0

## Desafio: Hello World com Docker

[Link do desafio](http://maratona.fullcycle.com.br/desafios/hello-world-com-docker/)

- Gerar a imagem
```bash
> docker build -f Dockerfile -t leticiapillar/maratona-fullcycle-desafio01 .
> docker run -d -p 8080:3000 leticiapillar/maratona-fullcycle-desafio01
```
- Enviar para o Docker Hub
```bash
> docker login

> docker push leticiapillar/maratona-fullcycle-desafio01
> docker pull leticiapillar/maratona-fullcycle-desafio01

> docker logout
```

- Imagem em: [Docker Hub](https://hub.docker.com/r/leticiapillar/maratona-fullcycle-desafio01)


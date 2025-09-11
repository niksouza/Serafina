const caixaPrincipal=documneto.querySelector(".caixa-principal");
const caixaPerguntas=documento.querySelector(".caixa-pergunta");
const caixaAlternativas=documento.querySelector(".caixa-alternativas");
const caixaResultado=documento.querySelector(".caixa-resultado");
const textoResultado=documento.querySelector(".texto-resulatdo");


const perguntas=[
    {
        Enunciado:"Assim que saiu do colégio você se depara com nova tecnologia, um chat que consegue responder todas as duvidaas que uma pessoa pode ter, ele também gera imagens e áudios realistas. Qual o seu pensamento?",
        alternativas:[
            {
                texto:"Isso é assustador",
                afirmacao:"No início, eu ficaria com medo do que essa tecnologia pode fazer."
            },
            {
                texto:"Isso é incrível",
                afirmacao:"sempre quis saber como usar uma IA em meu dia a dia."
            }
        ]
    }
]
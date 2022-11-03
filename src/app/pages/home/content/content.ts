import { Component } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.html',
  styleUrls: ['./content.css']
})
export class ContentComponent {
  questBoxes: any = [
    { icon: 'icon-itaufonts_pagamentos_contas', title: 'boleto', text: 'emita 2ª via de boletos Itaú' },
    { icon: 'icon-itaufonts_ajuda', title: 'desbloqueio de cartão', text: 'veja como fazer' },
    { icon: 'icon-itaufonts_aplicativos', title: 'aplicativos', text: 'baixe os apps do banco Itaú' },
    { icon: 'icon-itaufonts_comprovante', title: 'fatura digital', text: 'receba a fatura do seu cartão' },
    { icon: 'icon-itaufonts_comprovante', title: 'comprovantes', text: 'gere uma 2ª via do comprovante' },
    { icon: 'icon-itaufonts_ajuda', title: 'atendimento', text: 'conheça nossos canais de ajuda' },
    { icon: 'icon-itaufonts_agencia', title: 'agências', text: 'busque o Itaú mais próximo' }
  ]

  contrateBoxes: any = [
    {
      icon: 'icon-itaufonts_cifrao',
      iconText: 'empréstimo',
      title: 'precisando de dinheiro?',
      text: 'conheça as opções de crédito que o Itaú tem pra você.',
      image: 'shopping',
      button: 'confira aqui'
    },
    {
      icon: 'icon-itaufonts_acoes',
      iconText: 'investimentos',
      title: 'investimentos a partir de R$1,00',
      text: 'prateleira de produtos de vários gestores do mercado com a segurança e solidez que o Itaú tem.',
      image: 'investimentos',
      button: 'confira'
    },
    {
      icon: 'icon-itaufonts_veiculo',
      iconText: 'consórcio',
      title: 'consórcio parcelado não sai caro',
      text: 'planeje seu imóvel, moto, carro ou veículo pesado sem entrada e sem juros. Consulte as condições.',
      image: 'consorcio',
      button: 'simule'
    },
    {
      icon: 'icon-itaufonts_carteirada',
      iconText: 'renegociação',
      title: 'negocie suas contas em atraso',
      text: 'aqui você encontra condições especiais, conseguindo renegociar de forma unificada e on-line.',
      image: 'renegociacao',
      button: 'confira aqui'
    }
  ]

  cartoesBoxes: any = [
    {
      title: 'cartão click platinum',
      text: 'anuidade grátis pra sempre e limite de até R$10 mil',
      image: 'platinum',
      button: 'peça já o seu'
    },
    {
      title: 'cartão azul itaú',
      text: '10% de desconto em passagens Azul e parcelamento em até 12x sem juros',
      image: 'azul',
      button: 'peça já o seu'
    },
    {
      title: 'cartão magalu',
      text: 'anuidade grátis e 2% de cashback nas compras dentro do site da Magalu.',
      image: 'magalu',
      button: 'peça já o seu'
    },
    {
      title: 'veja todos os cartões itaú',
      text: 'escolha o cartão que dá match com você.',
      image: 'todos',
      button: 'escolha o seu'
    }
  ]
}

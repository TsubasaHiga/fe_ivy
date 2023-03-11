import type { PossibleItemType } from '@type/PossibleItemType'

export const possibleList: PossibleItemType[] = [
  {
    name: 'static',
    images: {
      src: '/assets/images/top/img__possible-list-static.svg',
      size: { w: 220, h: 166 }
    },
    title: '静的サイト構築',
    text: 'HTML5、またはPHPを用いた静的サイトの制作・構築を行うことが出来ます。'
  },
  {
    name: 'dynamic',
    images: {
      src: '/assets/images/top/img__possible-list-dynamic.svg',
      size: { w: 253, h: 191 }
    },
    title: '動的/CMS構築',
    text: 'CMS、またはPHPを用いた動的サイトの制作・構築を行うことが出来ます。'
  },
  {
    name: 'renewal',
    images: {
      src: '/assets/images/top/img__possible-list-renewal.svg',
      size: { w: 253, h: 191 }
    },
    title: '既存サイト改修',
    text: '既存サイトのリニューアル、または改修、ページパフォーマンス調整、コンテンツの追加等を行うことが出来ます。'
  },
  {
    name: 'tool',
    images: {
      src: '/assets/images/top/img__possible-list-tool.svg',
      size: { w: 230, h: 174 }
    },
    title: 'ツール制作',
    text: 'ブラウザ拡張機能を始めとするツール制作などを行うことが出来ます。'
  },
  {
    name: 'operation',
    images: {
      src: '/assets/images/top/img__possible-list-operation.svg',
      size: { w: 220, h: 166 }
    },
    title: 'Webサイト運用',
    text: 'Blogサイトを始めとするWebサイトの運用、レビューコンテンツの制作・各種コラボも行っています。'
  }
]

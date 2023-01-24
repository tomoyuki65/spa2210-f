# SPA構成Webアプリケーションのフロントエンド（Next.js）  
SPA構成で作るWebアプリケーションのフロントエンド（Next.js）です。

## 機能一覧  
・猫画像表示＆切り替えボタン  
・いいねボタン  
・ログイン＆ログアウト機能  

## 使用技術  
Node "18.10.0"  
Next.js "12.3.1"  
Tailwind CSS "3.1.8"  
Jest "29.1.2"  
Docker  
docker-compose  
Vercel  
CircleCI  
Firebase Authentication  

## 注意点  
このアプリの起動には以下が必要です。  
・docker環境  
・yarnのインストール  

## 使い方  
①（初回のみ）yarnインストール用のコマンド  
```
$ docker compose run --rm front yarn install --frozen-lockfile
```  

<br/>

②起動用のコマンド  
```
$ docker compose up -d
```  

## 環境変数
VERCEL_TOKEN  

## 参考記事
技術ブログも作成していますので、興味がある方は下記の記事を参考にしてみて下さい。  
[・SPA構成Webアプリ開発方法まとめ](https://tomoyuki65.com/how-to-develop-a-web-application-with-spa/)  

# SPA構成Webアプリケーションのフロントエンド（Next.js）  
SPA構成で作るWebアプリケーションのフロントエンド（Next.js）です。

## 機能一覧  
・・  

## 使用技術  
Node "18.10.0"  
Next.js "12.3.1"  
Tailwind CSS "3.1.8"  
Jest "29.1.2"  
Docker  
docker-compose  

## 注意点  
このアプリの起動には以下が必要です。  
・docker環境  
・next-env.d.ts（Next.jsが提供するコンポーネントの型情報ファイル）  
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
・・  

## 参考記事
・・  

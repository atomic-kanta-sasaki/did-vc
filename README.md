# did-vc
## API
apiディレクトリでDIDの登録、VCの作成、VCの検証を行うことができる
nest.jsを使用して実装されています。
```
/registerDID ← DIDの登録
/issueVc ← VCの発行
/verifyVc ← VCの検証
```
## API起動方法
```bash
cd api && npm run start
```

## Front
学歴証明書のようなVCを発行するフォームとVCを検証するフォームがある

```
/ ← 学歴証明書を発行する画面
/verify ← VCを検証するページ
```
学歴証明書を発行するとVCとなるJWTトークンが返って来る
検証の際にはこのJWTトークンを/verifyのページのフォームに張り付ける

## Front起動方法
```bash
cd front && npm run dev
```
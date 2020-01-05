生成RSA私钥：
openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
生成RSA key：
openssl rsa -passin pass:x -in server.pass.key -out server.key
rm server.pass.key
使用key生成证书
openssl req -new -key server.key -out server.csr
/*
opensslisawesome
*/
使用证书签名生成凭证：
openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt
最终得到
server.crt
server.key

更简单的命令：
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/C=CN/ST=kunshan/L=huaqiao/O=personal/OU=personal/CN=gochen/emailAddress=1208484996@qq.com' \ -keyout server.key -out server.crt


lsof -t -i tcp:3000 | xargs kill
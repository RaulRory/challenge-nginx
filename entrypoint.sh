#!/bin/sh

set -e

echo "⏳ Esperando o banco de dados ficar pronto..."

until nc -z -v -w30 db 3306
do
  echo "⏳ Aguardando o MySQL em mysql:3306..."
  sleep 2
done

echo "✅ Banco de dados está disponível!"

echo "🚀 Gerando Prisma Client..."
npx prisma generate --schema=./src/infrastructure/database/prisma/schema.prisma

echo "🚀 Rodando prisma migrate deploy..."
npx prisma migrate deploy --schema=./src/infrastructure/database/prisma/schema.prisma

echo "🎯 Iniciando aplicação..."
exec npm run start:prod

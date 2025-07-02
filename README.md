# WPPConnect Server para Railway

## Deploy no Railway

1. Crie este repositório com os arquivos fornecidos.
2. No Railway: New Project → Deploy from GitHub → selecione este repositório.
3. Em Settings → Variables, adicione:
   - SECRET_KEY = je170818
   - SESSION_NAME = zapfoto
   - PORT = 21465
4. Faça o deploy e aguarde.
5. Gere token:
   POST /api/zapfoto/je170818/generate-token
6. Inicie sessão (QRCode):
   POST /api/zapfoto/je170818/start-session
   — Use header Authorization: Bearer SEU_TOKEN
7. Escaneie o QR via urlCode retornado.
8. Busque foto:
   GET /api/zapfoto/profile/55DDDNUMERO
   — Use header Authorization: Bearer SEU_TOKEN

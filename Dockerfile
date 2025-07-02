FROM wppconnect-team/wppconnect-server:latest

EXPOSE 21465

CMD ["node", "dist/server.js"]

const express = require('express');
const path = require('path');
const app = express();

// Configurar o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar a rota para servir o HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

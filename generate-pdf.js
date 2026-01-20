const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  console.log('🚀 Iniciando geração do PDF...');
  
  // Caminho absoluto para o arquivo HTML
  const htmlPath = path.join(__dirname, 'index.html');
  const fileUrl = `file://${htmlPath}`;
  
  console.log('📄 Carregando arquivo HTML:', htmlPath);
  
  // Inicia o navegador
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--disable-web-security'
    ]
  });
  
  try {
    const page = await browser.newPage();
    
    // Configura o viewport para melhor renderização
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2
    });
    
    // Carrega a página HTML
    await page.goto(fileUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Aguarda um pouco para garantir que todos os recursos foram carregados
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Gera o PDF
    const pdfPath = path.join(__dirname, 'perfil.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '15mm',
        bottom: '20mm',
        left: '15mm'
      }
    });
    
    console.log('✅ PDF gerado com sucesso!');
    console.log('📁 Localização:', pdfPath);
    
  } catch (error) {
    console.error('❌ Erro ao gerar PDF:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Executa a função
generatePDF()
  .then(() => {
    console.log('✨ Processo concluído!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Erro fatal:', error);
    process.exit(1);
  });

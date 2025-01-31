Aqui será onde fica a automação de testes de QA
 
 
 Obs:
 Qunado quiser realizar o teste pré deploy basta ir em Cypress.config.js e alterar a baseUrl para a preview de teste e salvar **Lembre-se de após terminar os testes voltar pra URL padrão: https://www.vivara.com.br/



Passo a passo para subir no Git

PEGANDO O CÓDIGO NO GIT DE TERCEIROS

1- clonar o código para sua maquina 
criar uma pasta temporaria (será excluida no final do processo)
Nessa pasta abrira o hyper (ctrl+Alt+Shft + botão direito so mouse )
No Git irá clicar em Code>copiar a URL que aparece no modal 
Voltar pro Hyper e digitar git clone e colar a url copiada

2-Criar seu repositorio particular (No seu Git)
Abrir o seu git pessoal
Criar um novo repositório 
No Git irá clicar em Code>copiar a URL que aparece no modal 
Criar uma pasta no seu PC 
Nessa pasta abrira o hyper (ctrl+Alt+Shft + botão direito so mouse )
Digitar git clone e colar a url copiada 

3- Copiar arquivos
Copiar os arquivos da pasta temporaria 
Salvar na sua pasta da repo particular 
Copiar todas essa infos e colar em uma nova pasta Repo particular ( nesse momento já pode excluir a pasta temporaria )

4-Preparando arquivos para o commit
Entrar na pasta com as infos que vc deseja commitar através de cd nomeDaPasta 
git status para verificar as modificações 
git add * para add todos essas modificações no seu commit
git commit -m 'informações sobre o que terá nesse commit'

5 -Subir os arquivos para o GIT
git push irá jogar todas as modificações para a sua pasta no git


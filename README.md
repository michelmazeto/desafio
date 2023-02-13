<h1>First Challenger - COMPASS</h1>

<blockquote>
<p>Status do Projeto: <g-emoji class="g-emoji" alias="heavy_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png">✔️</g-emoji> (Pronto)</p>
</blockquote>

<h2>▶ Tópicos </h2>

<p>• Descrição do Desfaio</p>
<p>• Funcionalidades</p>
<p>• Como rodar a API</p>

<h2>▶ Descrição do Desafio</h3>

<p>Pensando em um novo cliente que surgiu no mercado, a Compass UOL teve a ideia de criar um planner. Este planner ajudará o cliente a organizar sua semana e suas tarefas e em que horários elas acontecem.</p>

<h2>▶ Funcionalidades</h2>

<p>➝ Listar todos os eventos da Empresa</p>
<p>➝ Buscar um evento por ID</p>
<p>➝ Buscar os eventos por um dia da semana</p>
<p>➝ Deletar um evento por ID</p>
<p>➝ Deletar os eventos de um dia da semana</p>
<p>➝ Inserção de um novo usuário</p>
<p>➝ Validação de login e senha</p>

<h2>▶ Como rodar a API</h2>
<h3>Instale o Node.js</h3>
<pre><code>https://nodejs.org/en/</code></pre>
<h3>Clonando e rodando</h3>
<p>No seu terminal, clone o projeto:</p>
<pre><code>git clone https://github.com/michelmazeto/desafio.git</code></pre>
<p>Acesse a raiz do projeto:</p>
<pre><code>cd desafio</code></pre>
<p>Instale as dependências:</p>
<pre><code>npm install</code></pre>
<p>Inicie o servidor</p>
<pre><code>npm start</code></pre>

<h3>Testando a API</h3>
<p>Instale o Postman ou outra aplicação para rodar a API</p>
<pre><code>https://www.postman.com/downloads/</code></pre>

<p>Observação: A porta padrão do servidor é 3000. Para acessar a API use: localhost:3000/api/v1/</p>

</br>

<h4>💠 Para listar todos os eventos: </h4>
<p>Método GET e caminho: 127.0.0.1:3000/api/v1/events/</p>

</br>

<h4>💠 Para buscar um evento por um ID</h4>
<p>Método GET e caminho: 127.0.0.1:3000/api/v1/events/'id'</p>
<p>Exemplo:</p>
<p>Método GET e caminho: 127.0.0.1:3000/api/v1/events/1</p>

</br>

<h4>💠 Para buscar um evento por um dia da semana:</h4>
<p>Método GET e caminho: 127.0.0.1:3000/api/v1/events/week/'dia da semana'</p>
<p>Exemplo:</p>
<p>Método GET e caminho: 127.0.0.1:3000/api/v1/events/week/Monday</p>

</br>

<h4>💠 Para deletar um evento por ID</h4>
<p>Método DELETE e caminho: 127.0.0.1:3000/api/v1/events/'id'</p>
<p>Exemplo:</p>
<p>Método DELETE e caminho: 127.0.0.1:3000/api/v1/events/6</p>

</br>

<h4>💠 Para deletar um evento pelo dia da semana</h4>
<p>Método DELETE e caminho: 127.0.0.1:3000/api/v1/events/week/'dia da semana'</p>
<p>Exemplo:</p>
<p>Método DELETE e caminho: 127.0.0.1:3000/api/v1/events/week/Monday</p>

</br>

<h4>💠 Para criar um evento</h4>
<p>Método POST e caminho: 127.0.0.1:3000/api/v1/events</p>
<p>Depois, vá em Body > raw > mude de Text para JSON e use o seguinte padrão</p>
<pre><code>
{
"description": "Nome do evento",
"dateTime": "2023-02-20T10:00:00.000Z",
"createdAt": "2023-02-13T10:00:00.000Z"
}
</pre></code>

</br>

<h4>💠 Para criar um usuário</h4>
<p>Método POST e caminho: 127.0.0.1:3000/api/v1/users/signup</p>
<p>Depois, vá em Body > raw > mude de Text para JSON e use o seguinte padrão</p>
<pre><code>
{
    "firstName": "nome",
    "lastName": "sobrenome",
    "birthDate": "0000-00-00",
    "city": "cidade",
    "country": "país",
    "email": "email",
    "password": "senha",
    "confirmPassword": "senha"
}
</pre></code>

</br>

<h4>💠 Para validar um usuário e senha</h4>
<p>Método POST e caminho: 127.0.0.1:3000/api/v1/users/signin</p>
<p>Depois, vá em Body > raw > mude de Text para JSON e use o seguinte padrão</p>
<pre><code>
{
    "email": "email",
    "password": "senha"
}
</pre></code>


<h2> Linguagem e dependencias utilizadas</h2>


<p>● JavaScript</p>
<p>● express</p>
<p>● morgan</p>


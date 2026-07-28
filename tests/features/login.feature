Feature: Login
  Como usuário
  Quero realizar login na aplicação
  Para acessar minha conta

  Scenario: Login com sucesso
    Given que estou na página inicial do site
    When eu preencho o email "digilmar@gmail.com" e a senha "123456"
    And clico no botão de login
    Then devo ver a mensagem "Login realizado"

  Scenario: Login com dados inválidos
    Given que estou na página inicial do site
    When eu preencho o email "usuario@invalido.com" e a senha "senhaerrada"
    And clico no botão de login
    Then devo ser redirecionado para a área da conta e ver a mensagem de boas-vindas

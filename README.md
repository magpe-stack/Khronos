# IMPULSO — Manual completo do usuário

**Motor de Produtividade Pessoal**  
**Aplicativo:** https://magpe-stack.github.io/Impulso/  
**Código-fonte:** https://github.com/magpe-stack/Impulso  
**Manual online:** https://github.com/magpe-stack/Impulso/blob/main/README.md

<p align="center"><img src="ImpulsoCover.png" alt="Capa do Impulso — Motor de Produtividade Pessoal" width="100%"></p>

> **Leia antes de começar:** o Impulso é um aplicativo pessoal de registro de tempo, hábitos e progressão gamificada. Não é um relógio de ponto homologado, não oferece sincronização entre dispositivos e não garante que os dados do navegador sejam permanentes. **Faça backups e guarde os arquivos fora do navegador.**

## Sumário

1. [Apresentação e filosofia](#1-apresentacao-e-filosofia)
2. [Primeiro acesso, instalação e uso offline](#2-primeiro-acesso-instalacao-e-uso-offline)
3. [Ignição: a abertura cinematográfica](#3-ignicao-a-abertura-cinematografica)
4. [Interface, navegação e menu](#4-interface-navegacao-e-menu)
5. [Projetos independentes](#5-projetos-independentes)
6. [Início e indicadores](#6-inicio-e-indicadores)
7. [Ponto: cronometrar trabalho](#7-ponto-cronometrar-trabalho)
8. [Entradas retroativas](#8-entradas-retroativas)
9. [Meu Dia, Histórico e cálculo do tempo](#9-meu-dia-historico-e-calculo-do-tempo)
10. [Estatísticas: central de análise e desempenho](#10-estatisticas-central-de-analise-e-desempenho)
11. [Hábitos e Inventário de Elixires](#11-habitos-e-inventario-de-elixires)
12. [Pomodoro e conclusão de hábitos](#12-pomodoro-e-conclusao-de-habitos)
13. [Radar e meta de 10.000 horas](#13-radar-e-meta-de-10000-horas)
14. [Arena: 200 chefões](#14-arena-200-chefoes)
15. [Codex de Monstros](#15-codex-de-monstros)
16. [Elixires, cofres e recompensas](#16-elixires-cofres-e-recompensas)
17. [Visão: o foguete revelado por Elixires](#17-visao-o-foguete-revelado-por-elixires)
18. [Guardar, exportar, importar e restaurar](#18-guardar-exportar-importar-e-restaurar)
19. [Impressão e relatórios](#19-impressao-e-relatorios)
20. [Alertas: lembretes opcionais](#20-alertas-lembretes-opcionais)
21. [Armazenamento: saúde dos dados](#21-armazenamento-saude-dos-dados)
22. [Configuração: paletas e aparência](#22-configuracao-paletas-e-aparencia)
23. [Privacidade, integridade e limites técnicos](#23-privacidade-integridade-e-limites-tecnicos)
24. [Solução de problemas](#24-solucao-de-problemas)
25. [Perguntas frequentes](#25-perguntas-frequentes)
26. [Roteiro de testes](#26-roteiro-de-testes)
27. [Arquivos do projeto](#27-arquivos-do-projeto)
28. [Glossário](#28-glossario)

---

<a id="1-apresentacao-e-filosofia"></a>

## 1. Apresentação e filosofia

O **Impulso — Motor de Produtividade Pessoal** reúne quatro dimensões em um mesmo ambiente: **trabalho efetivamente registrado**, **hábitos executados**, **acompanhamento do progresso** e **recompensas narrativas inspiradas em RPG**. O objetivo é tornar visível o esforço contínuo sem transformar a ferramenta em uma competição entre usuários.

A jornada simbólica possui **10.000 horas**. É uma referência de longo prazo, **não uma certificação de maestria**, uma medida da qualidade do trabalho ou uma promessa de sucesso. A Arena transforma marcos de tempo em batalhas contra chefões; o Codex documenta adversários derrotados; os Elixires recompensam a combinação de progresso e hábitos concluídos.

O aplicativo é **PWA, mobile-first, offline-first e executado no próprio navegador**, sem conta obrigatória, servidor de registros ou bibliotecas externas de interface. Projetos diferentes mantêm seus próprios registros e conquistas.

<a id="2-primeiro-acesso-instalacao-e-uso-offline"></a>

## 2. Primeiro acesso, instalação e uso offline

### Abrir e instalar

1. Acesse **https://magpe-stack.github.io/Impulso/** com conexão à internet.
2. Aguarde a apresentação cinematográfica **Ignição**, com o foguete e o anel de progresso (aproximadamente 3,7 segundos; consulte o capítulo dedicado).
3. Crie seu primeiro projeto em **Novo**.
4. Se o navegador oferecer instalação, escolha **Instalar aplicativo** ou **Adicionar à tela inicial**. No Chrome Android, a opção costuma estar no menu do navegador; em navegadores de desktop, pode aparecer na barra de endereço.
5. Abra o aplicativo novamente pelo atalho, se criado.

<p align="center"><img src="logo.svg" alt="Logotipo do Impulso" width="180"></p>

### Trabalhar sem internet

O **service worker** guarda os arquivos essenciais do aplicativo em cache para permitir a abertura posterior sem conexão, desde que a instalação do cache tenha sido concluída. Faça um teste: abra o aplicativo conectado, feche-o, desligue a conexão e tente abri-lo novamente. A disponibilidade offline depende do navegador, das políticas de armazenamento e de o cache não ter sido removido.

**Importante:** instalar o PWA **não** significa que os dados foram copiados para uma nuvem. A instalação e o armazenamento de projetos são coisas distintas.

<a id="3-ignicao-a-abertura-cinematografica"></a>

## 3. Ignição: a abertura cinematográfica

Ao iniciar o Impulso, o usuário encontra **Ignição — O Despertar do Impulso**, uma apresentação visual que antecede a interface principal. Em vez de uma tela branca com logotipo estático, a abertura usa um **fundo escuro**, iluminação radial, o foguete oficial, um **anel energético**, partículas luminosas, a revelação progressiva do nome **IMPULSO** e uma barra de inicialização.

### Como a sequência funciona

1. **Preparação e energia:** a tela escura apresenta a atmosfera de propulsão e o brilho inicial.
2. **Ignição:** o foguete e os efeitos luminosos ganham destaque, acompanhados pelo anel energético.
3. **Revelação:** o nome do aplicativo aparece enquanto o anel e a barra avançam.
4. **Transição:** a apresentação desaparece suavemente e a interface fica disponível.

A apresentação tem **duração programada de aproximadamente 3,7 segundos**, seguida por uma transição de cerca de **0,4 segundo**. A duração não é um teste de velocidade da conexão: **a barra é um elemento visual sincronizado com a animação, não uma medição do carregamento real de arquivos ou dados**.

### Cores e acessibilidade

A iluminação acompanha a identidade visual escolhida em **Configuração**: **Impulso Original**, **Impulso Vinho**, **Impulso Blue Sky**, **Impulso Trinity**, **Impulso Granfino** ou **Impulso Ecológico** e **Impulso Místico**. Isso independe do modo claro ou escuro escolhido para a interface. A abertura utiliza animações CSS nativas, sem vídeos, serviços externos ou bibliotecas de animação.

Se o dispositivo ou navegador solicitar **movimento reduzido** (`prefers-reduced-motion`), os efeitos são simplificados para respeitar essa preferência, **mas a duração programada continua aproximadamente 3,7 segundos**. A apresentação dispõe de um mecanismo de segurança que a encerra se algo impedir a conclusão normal; em condições excepcionais, como a aba ficar em segundo plano, o tempo observado pode variar. O objetivo é impedir que a abertura bloqueie o uso do aplicativo.

### Se a abertura não aparecer corretamente

- Se ela desaparecer rápido demais, atualize o aplicativo com conexão à internet e reabra-o, para que o navegador obtenha os arquivos mais recentes do cache offline.
- Se ficar presa, feche e reabra o aplicativo; confira se o navegador concluiu a atualização do PWA. **Não apague os dados do site sem antes guardar um backup.**
- Se os efeitos parecerem estáticos, verifique a configuração de redução de movimento do sistema. Isso não deve impedir o acesso ao aplicativo.
- Em aparelhos mais lentos, os quadros da animação podem não ser uniformes; isso não afeta a contagem das sessões de trabalho.

<a id="4-interface-navegacao-e-menu"></a>

## 4. Interface, navegação e menu

O menu lateral é aberto pelo botão no cabeçalho. Seus grupos são expansíveis e aparecem nesta ordem:

| Grupo | Opções |
|---|---|
| **Início** | Novo · Projetos · Guardar · Restaurar · Imprimir |
| **Ações** | Ponto · Hábitos · Entradas |
| **Vitórias** | Arena · Codex · Elixires · Cerimônias · Visão |
| **Dados** | Meu Dia · **Calendário** · Radar · Estatísticas · Armazenamento |
| **Configurações** | Página com Temas e Alertas |
| **Sair** | Encerramento com confirmação |

Selecione o nome de um grupo para expandir ou recolher seu submenu. **Entradas** permite registrar atividades retroativas. O botão **Calendário** abre a visualização mensal da produtividade.

No cabeçalho também há controle de **modo claro/escuro** e, conforme o navegador, um controle de **tela cheia**. A tela cheia pode não estar disponível em todos os dispositivos. O botão **Sobre** apresenta a finalidade do Impulso, um resumo atualizado dos principais recursos e links para o aplicativo, o repositório e o manual completo. Os links externos precisam de conexão para abrir, mas não são necessários para utilizar os recursos locais.

**Navegação não encerra automaticamente um Ponto ativo.** Você pode iniciar um trabalho, consultar outras páginas e voltar para finalizá-lo.

### Sair do aplicativo

O botão **Sair** aparece no final do menu lateral, imediatamente abaixo de **Configuração**. Ao selecioná-lo, o Impulso solicita confirmação. **Cancelar** mantém a navegação normalmente; **Sair do aplicativo** apresenta uma tela de despedida com a opção **Voltar ao Impulso**.

Em aplicativos instalados, o Impulso tenta fechar a janela, quando o navegador permite. Em abas comuns, os navegadores geralmente proíbem o fechamento programático; nesse caso, feche a aba manualmente. A tela de saída não apaga projetos, hábitos ou registros. Se houver um Ponto em andamento, ele não será automaticamente encerrado: volte e finalize-o quando desejar.


<a id="5-projetos-independentes"></a>

## 5. Projetos independentes

### Criar

Abra **Novo**, digite um nome com até **50 caracteres** e confirme. O novo projeto passa a ser o ativo.

### Abrir, renomear e excluir

Em **Projetos**, consulte a lista, selecione um projeto para trabalhar nele e utilize as ações de renomear ou excluir quando necessário. A lista também pode ser impressa. Ao mudar de projeto, os registros, hábitos, tempo, chefões e Elixires exibidos passam a ser os do projeto selecionado.

**Atenção à exclusão:** excluir um projeto é uma ação destrutiva. Antes de excluir, faça **Guardar** e verifique que o arquivo JSON foi salvo em local seguro. Um backup individual permite preservar ou transferir um projeto sem substituir toda a coleção.

### Isolamento

Cada projeto mantém seus próprios dados: atividades, sessões, hábitos equipados, progresso, coleções e registros. A preferência visual, por outro lado, é uma configuração do aplicativo **neste navegador**, não uma paleta diferente para cada projeto.

<a id="6-inicio-e-indicadores"></a>

## 6. Início e indicadores

A página **Início** é o ponto de entrada para criar ou abrir projetos e acompanhar a evolução do projeto ativo. Ela apresenta indicadores de tempo e progresso, incluindo o caminho até as 10.000 horas, além de atalhos para ações frequentes.

Os números refletem os dados armazenados. Se você excluir um registro, o tempo e os marcos de progresso poderão diminuir. Indicadores de hábitos e chefões não devem ser confundidos com horas de trabalho: são medidas diferentes.

<a id="7-ponto-cronometrar-trabalho"></a>

## 7. Ponto: cronometrar trabalho

Use **Ponto** para registrar uma atividade enquanto ela acontece.

1. Abra um projeto e entre em **Ponto**.
2. Informe o **nome do trabalho** (até 50 caracteres).
3. Clique em **Iniciar** para marcar a data e a hora inicial.
4. Trabalhe normalmente. Você pode visitar outras telas do Impulso enquanto a sessão permanece ativa.
5. Retorne a **Ponto** e utilize **Terminar** para marcar o fim da sessão.
6. Quando o formulário oferecer **Concluir**, confirme o lançamento definitivo no histórico.

O formulário permanece na própria página, sem uma janela modal que impeça a navegação. O Ponto utiliza horários reais de início e término. Uma sessão pode começar antes da meia-noite e terminar no dia seguinte; o cálculo diário é dividido por data.

**Boas práticas:** não abra simultaneamente várias instâncias do aplicativo para controlar a mesma atividade; confira o nome e os horários antes de concluir; não limpe os dados do site com uma sessão aberta. A continuidade após fechamento forçado, reinício ou suspensão do navegador deve ser conferida antes de confiar no resultado.

<a id="8-entradas-retroativas"></a>

## 8. Entradas retroativas

A opção **Entradas**, no menu esquerdo, abre uma página própria chamada **Entradas retroativas**. Nela há duas opções: **Entrada de Ponto** e **Entrada de Hábito**. Ambas registram atividades que já ocorreram, sem iniciar cronômetros, e exigem um projeto aberto.

### Entrada de Ponto

Clique em **Entrada de Ponto** para abrir a ficha de entrada manual de trabalho já existente. Informe o nome da atividade (até 50 caracteres), as datas e os horários de início e término, confira os dados e selecione **Lançar entrada**. O registro aparece no Histórico e no Meu Dia como **Entrada Manual**. É possível informar início e término em dias diferentes.

### Entrada de Hábito

Clique em **Entrada de Hábito** para abrir a ficha específica de hábitos. Selecione um hábito já cadastrado no projeto, informe as datas e os horários reais de início e término e escolha **Lançar hábito**. A execução fica vinculada ao hábito escolhido e aparece como **Hábito** no Histórico e no Meu Dia. Ela também participa das estatísticas e da lógica de recompensas aplicável a registros de hábitos.

Se ainda não houver hábitos cadastrados, abra a página **Hábitos** e crie um primeiro. Não é necessário que o hábito esteja equipado para registrar uma execução anterior.

### Validação e cuidados

As fichas verificam datas de calendário válidas, horário de término posterior ao início e término não situado no futuro. Atividades que atravessam a meia-noite são permitidas. O sistema preserva os registros no armazenamento local do projeto, sujeitos às mesmas condições de backup e restauração dos demais dados.

**Evite duplicidade:** não lance retroativamente o mesmo trabalho ou hábito já registrado por Ponto ou Pomodoro. Use a entrada retroativa somente para atividades efetivamente realizadas.

<a id="9-meu-dia-historico-e-calculo-do-tempo"></a>

## 9. Meu Dia, Histórico e cálculo do tempo

### Calendário de produtividade (versão 69)

Abra **Dados → Calendário** para consultar um mês de cada vez. Os botões **Anterior** e **Próximo** mudam o mês, sem alterar registros. Cada data mostra a duração efetivamente trabalhada; os indicadores resumem dias trabalhados e tempo acumulado no mês. Selecione um dia para consultar as atividades, nomes e horários de início e término, com acesso a **Meu Dia** e à impressão daquele dia. Dias sem registros permanecem disponíveis para consulta e são identificados explicitamente.

A contagem utiliza os mesmos intervalos consolidados de produtividade do aplicativo: atividades simultâneas não duplicam o tempo, e registros que atravessam a meia-noite são distribuídos entre as datas corretas. O calendário é exclusivo do projeto ativo, funciona offline e não precisa de armazenamento adicional.

### Sequências de produtividade (versão 70)

Em **Dados → Calendário**, três indicadores acompanham a regularidade de cada projeto: **Sequência atual**, **Recorde pessoal** e **Última sequência encerrada**. Um dia conta como ativo quando existe ao menos um intervalo de trabalho com duração positiva; várias atividades no mesmo dia contam apenas uma vez. A sequência atual permanece válida se o último dia ativo for hoje ou ontem, pois o dia de hoje ainda pode receber registros. Se um dia inteiro passar sem atividade, a sequência termina.

Os cálculos são derivados dos registros reais do projeto, sem criar pontos, horas ou recompensas extras. Entradas retroativas, exclusões e restaurações são refletidas automaticamente. Atividades que atravessam a meia-noite contam nos dois dias quando houver duração positiva em ambos. O recorde inclui toda a história do projeto, e os indicadores são independentes do mês exibido no calendário. O recurso funciona offline, sem armazenamento adicional e sem modificar os backups existentes.

### Meu Dia

A página **Meu Dia** organiza os registros pela data, com títulos no formato **Meu Dia dd-mm-aaaa**. Cada atividade apresenta **Atividade**, **Nome**, **Início**, **Término** e opção de exclusão. Os tipos mostrados são **Ponto**, **Entrada Manual** e **Hábito**. Hábitos concluídos também aparecem nesse acompanhamento.

### Histórico

O Histórico reúne os registros do projeto ao longo das datas. A visualização diária e os relatórios partem dos mesmos registros; um trabalho que cruza dias não se transforma em dois trabalhos diferentes.

### Exemplo de divisão entre dias

Uma tarefa começa em **11/11, às 23h46**, e termina em **12/11, às 00h59**. Duração total: **1h13min**. O dia 11 recebe **14 minutos**; o dia 12 recebe **59 minutos**. A atividade pode aparecer nas duas datas para fins de consulta, mas permanece um único registro e não deve ser somada duas vezes ao total do projeto.

### Sobreposição de horários

O cálculo de tempo consolidado reúne intervalos coincidentes para evitar dupla contagem. Por isso, duas atividades que aconteceram simultaneamente não significam necessariamente a soma simples das durações de ambas. Isso é particularmente importante quando se combinam Ponto, Entrada Manual e hábitos.

### Exclusão

Use a lixeira da linha correspondente para excluir um registro. A exclusão altera os totais, os marcos da Arena e, quando aplicável, a validade de Elixires relacionados. **Faça backup antes de excluir informações importantes.**

<a id="10-estatisticas-central-de-analise-e-desempenho"></a>

## 10. Estatísticas: central de análise e desempenho

A página **Estatísticas** fica no menu depois de **Radar**. Ela reúne medições calculadas a partir dos dados reais do Impulso, sem enviar informações a servidores.

### Escolher o alcance da análise

- **Projeto atual:** examina exclusivamente o projeto aberto. Use essa opção para avaliar sua rotina, seus hábitos e sua progressão individual.
- **Todos os projetos:** agrega os indicadores para oferecer uma visão global. A agregação **não mistura, move nem modifica** os registros originais de cada projeto.

### Selecionar o período

Escolha **Hoje**, **Últimos 7 dias**, **Mês atual**, **Ano atual** ou **Todo o histórico**. Os períodos usam datas locais do navegador. O mesmo indicador pode variar de acordo com o intervalo escolhido.

### Oito grupos de medições

| Grupo | O que você encontra |
|---|---|
| **Produtividade** | Tempo produtivo, frequência de trabalho, sessões, médias diárias, maior e menor sessão e regularidade observável. |
| **Hábitos** | Hábitos equipados, conclusões registradas, tempo dedicado, ranking, frequência e sequências de dias com conclusão. |
| **Desempenho temporal** | Distribuição do trabalho por horário, dia da semana, duração e tipo de atividade. |
| **Evolução dos projetos** | Progresso da meta de 10.000 horas, horas restantes, evolução histórica, comparação entre projetos e projeções matemáticas. |
| **Arena e RPG** | Chefões derrotados e pendentes, avanço na campanha, Codex, Elixires resgatados e cofres pendentes. |
| **Concentração e sessões** | Quantidade, duração e distribuição das sessões registradas; não mede atenção psicológica nem distrações não registradas. |
| **Armazenamento e integridade** | Tamanho estimado dos dados por projeto, contagens e possíveis inconsistências de registros. |
| **Tendências** | Evolução diária, comparações entre períodos, médias e tendências derivadas do histórico disponível. |

### Ler os resultados corretamente

**Atividades que atravessam a meia-noite** têm sua duração atribuída aos dias correspondentes. **Intervalos sobrepostos dentro de um mesmo projeto** são unidos para evitar dupla contagem do tempo produtivo. Na visão global, porém, os tempos de **projetos diferentes** são somados, mesmo que tenham ocorrido ao mesmo tempo: o resultado representa horas contabilizadas por projeto, e não necessariamente horas cronológicas exclusivas.

A **taxa de conclusão de tentativas** não pode ser calculada com confiança se o aplicativo só registra hábitos concluídos, sem histórico completo de tentativas canceladas. Da mesma forma, não se deve inferir quantas vezes um Pomodoro foi interrompido se esse evento não foi registrado. Projeções de chegada às 10.000 horas são **estimativas**, não promessas. Indicadores sem base suficiente devem aparecer como indisponíveis ou acompanhados de explicação.

### Atualizar, exportar e imprimir

Use **Atualizar** para recalcular os indicadores. **Exportar JSON** gera um relatório estatístico para consulta externa; **Imprimir** produz uma apresentação para papel ou PDF, conforme o navegador. Esses comandos não alteram os registros. Para medir a cota do navegador, a persistência e o cache offline, consulte a página separada **Armazenamento**.

<a id="11-habitos-e-inventario-de-elixires"></a>

## 11. Hábitos e Inventário de Elixires

A página **Hábitos** possui duas áreas complementares:

**Elixires Ativos:** os hábitos equipados aparecem primeiro, em cartões compactos com o temporizador e controles. É possível manter **até 6 hábitos ativos por projeto**. No desktop, a grade procura organizar os cartões em três colunas; em telas menores, adapta-se ao espaço disponível.

**Inventário de Elixires:** catálogo offline com **200 sugestões de hábitos distribuídas em 25 categorias**, definido no arquivo `habitos_elixires_v2.json`. Use a **pesquisa global em tempo real**, independente da categoria selecionada, e as **25 categorias em abas horizontais roláveis** para encontrar opções. Os cartões exibem nome, categoria e ação textual com indicação explícita de estado. Clique em **Equipar** para incluir um hábito na rotina e em **Desequipar** para liberar uma vaga. Equipar **não** significa concluir.

### Criar hábito personalizado

Clique em **+ Novo Hábito** e informe:

- **Nome** com até 50 caracteres.
- **Categoria**.
- **Duração estipulada** em minutos, de **1 a 1.440**.

O formulário de criação apresenta campos de nome, categoria (inclusive **Personalizado**) e duração. O novo hábito é salvo no projeto ativo em armazenamento local, passa a integrar imediatamente o inventário e fica disponível para equipagem. Para criar ou equipar outro quando já existem seis ativos, primeiro desequipe um. Projetos antigos que já contenham mais hábitos podem conservar os dados existentes; o limite impede novas equipagens até haver espaço.

**Dica:** comece com poucos hábitos que realmente possa executar. O catálogo é uma biblioteca de sugestões, não uma lista de obrigações.

<a id="12-pomodoro-e-conclusao-de-habitos"></a>

## 12. Pomodoro e conclusão de hábitos

Cada hábito equipado oferece um temporizador de duração configurada e controles para **iniciar, pausar, retomar, concluir e reiniciar**, conforme o estado exibido.

1. Escolha um hábito equipado.
2. Inicie o Pomodoro e execute a atividade.
3. Pause se precisar interromper; retome quando voltar.
4. Ao finalizar, use o comando de **conclusão** e confira a confirmação apresentada.
5. Verifique o registro em **Meu Dia** e no histórico do projeto.

A conclusão é uma **ação explícita**: deixar o relógio chegar ao fim, por si só, não deve ser interpretado como registro definitivo sem confirmação. A duração configurada é a referência do temporizador; registre somente hábitos realmente realizados.

O aplicativo também oferece um fluxo de conclusão que solicita confirmação e, opcionalmente, uma observação curta. Quando utilizado, o período é registrado retroativamente, terminando no momento da confirmação; por isso, confirme apenas se de fato executou o hábito nesse intervalo.

**Relação com os Elixires:** uma conclusão de hábito pode abrir **no máximo um cofre** de um chefão já derrotado. Consulte o capítulo 16, que explica as recompensas e a página Visão.

<a id="13-radar-e-meta-de-10000-horas"></a>

## 13. Radar e meta de 10.000 horas

O **Radar — Motor de Propulsão** representa o tempo efetivo de trabalho como rotação simbólica de um motor de foguete. Os graus são uma medida de tempo, **não uma moeda, um indicador de qualidade ou uma simulação física de motor real**. O rotor SVG usa exclusivamente as cores do tema ativo, inclusive no modo escuro; sua animação é desativada quando o sistema solicita redução de movimento.

### Hierarquia oficial do motor

| Unidade | Equivalência | Graus | Minutos | Horas |
| --- | --- | ---: | ---: | ---: |
| Pulso | 30 minutos | 180 | 30 | 0,5 |
| Giro | 2 Pulsos | 360 | 60 | 1 |
| Turno | 8 Giros | 2.880 | 480 | 8 |
| Fase | 30 Turnos | 86.400 | 14.400 | 240 |
| Propulsão | 42 Fases | 3.628.800 | 604.800 | 10.080 |

**Conversão:** 10 segundos = 1 grau; 30 minutos = 1 Pulso; 1 hora = 1 Giro. O Radar exibe graus acumulados, ângulo da volta atual, contadores completos de Pulsos, Giros, Turnos, Fases e Propulsões e progresso até a próxima unidade. Os contadores são **totais independentes**, não quantidades a somar entre si. Por exemplo, 8 horas = 16 Pulsos = 8 Giros = 1 Turno.

O tempo deriva dos intervalos de trabalho efetivo do projeto, inclusive atividades antigas e sessões de Foco. Sobreposições não são contadas em duplicidade; pausas do Foco não são trabalho. A rotação decorativa ocorre durante atividades em andamento e para quando não há atividade, respeitando `prefers-reduced-motion`. O anel externo indica o Giro atual, com 360 marcações; o ponteiro interno indica os 60 segundos. Os indicadores são atualizados enquanto a página está aberta e recalculados a partir dos registros ao retornar.

A primeira Propulsão é concluída com **10.080 horas**. Se houver mais trabalho, a contagem continua em direção à próxima Propulsão. **As 100 metas progressivas, as 200 batalhas, os Elixires e as 100 Cerimônias permanecem vinculados às 10.000 horas**, sem alteração de suas regras. A primeira Propulsão completa é um marco adicional de medição, 80 horas depois da Consagração, sem concessão automática de Elixir ou Cerimônia.


<a id="14-arena-200-chefoes"></a>

### Marcos progressivos e cerimônias

Além da meta simbólica de 10.000 horas, cada projeto acompanha **100 metas progressivas**. A primeira etapa exige **1 hora**, a segunda exige **3 horas adicionais**, a terceira **5 horas adicionais**, e assim por diante, aumentando **2 horas por etapa**. A meta de número *n* exige `2n − 1` horas adicionais, e o total acumulado ao concluí-la é `n²` horas. Portanto, a **99ª meta** termina em **9.801 horas**, e a **100ª**, a mais difícil, exige **199 horas adicionais** para alcançar **exatamente 10.000 horas**.

O painel da jornada, na página **Início**, mostra metas conquistadas, próximo objetivo, tempo restante, barra de progresso e a lista completa de metas. As **100 cerimônias** estão disponíveis na página **Cerimônias**, logo abaixo de **Radar** no menu. Elas são desbloqueadas pelo tempo acumulado efetivamente registrado, inclusive por registros antigos. A galeria permite rever ilimitadamente qualquer cerimônia já liberada. As bloqueadas exibem cadeado e o número de horas necessário, sem revelar a história. As metas **10, 20, 30, ... 100** recebem cerimônias especiais, uma por ciclo de dez metas; a última é **A Consagração**. As cerimônias são reproduzidas somente quando o usuário clica em **Rever cerimônia**: não existem janelas automáticas.

A contagem usa o tempo produtivo efetivo do projeto, evitando somar períodos sobrepostos duas vezes. As metas são recalculadas a partir dos registros, inclusive após exclusões. A disponibilidade das cerimônias é calculada a partir do tempo salvo, sem depender de um histórico separado de apresentações. A galeria é individual por projeto e não altera os registros, não concede Elixires nem modifica as regras dos Chefões. Se os registros forem excluídos e o total cair, cerimônias antes disponíveis podem voltar a ficar bloqueadas. Na versão 61, a reprodução apresenta uma sequência cinematográfica de aproximadamente quatro segundos: estrelas, expansão de luz, ascensão do emblema, partículas e revelação progressiva do título, horas e história. O botão **Reproduzir novamente** reinicia a sequência desde o começo. A experiência usa apenas CSS e JavaScript locais. As animações respeitam a preferência do sistema por movimento reduzido; podem ser fechadas pelo botão **Fechar cerimônia** ou pela tecla Esc.

## 14. Arena: 200 chefões

A **Arena** transforma o progresso em uma campanha contra **200 chefões**, organizados em **10 fases de 20 adversários**, com dificuldade crescente e marcos distribuídos ao longo das 10.000 horas.

Cada chefão possui **nome**, **descrição narrativa**, **efeito temático**, **HP (pontos de resistência)** e um marco de tempo acumulado. O tempo efetivamente contabilizado provoca o avanço da campanha: **cada minuto equivale a um ponto de dano** na progressão.

Os efeitos narrativos — como dispersão, sono, adiamento ou distração — representam obstáculos simbólicos. **Não descontam tempo, não aplicam penalidades reais e não alteram registros.** A derrota é determinada pelo tempo acumulado, não por cliques ou ações repetitivas.

**Se o tempo cair:** excluir registros pode reduzir a progressão e fazer com que um chefão deixe de constar como derrotado. Isso também pode afetar cofres e recompensas vinculados à vitória.

<a id="15-codex-de-monstros"></a>

## 15. Codex de Monstros

O **Codex** funciona como uma enciclopédia da campanha. Nele, você acompanha os adversários e abre as fichas disponíveis dos chefões derrotados, com informações como nome, descrição e efeito narrativo.

As fichas dos chefões vencidos recebem indicação explícita de **VENCIDO**. Os ainda não conquistados permanecem bloqueados. O Codex e a Arena consultam os mesmos marcos de tempo: não são sistemas de pontuação independentes.

<a id="16-elixires-cofres-e-recompensas"></a>

## 16. Elixires, cofres e recompensas

A seção **Elixires** é o espaço de coleção e recompensa. O sistema contém **200 frases exclusivas**, associadas aos 200 chefões. O processo tem duas etapas distintas: **vencer o chefão trabalhando** e **abrir o cofre concluindo um hábito**.

### Passo a passo

1. Registre trabalho pelo **Ponto** ou pela **Entrada Manual**.
2. Acumule tempo suficiente para derrotar um chefão na **Arena**.
3. O cofre correspondente passa a aguardar um hábito concluído.
4. **Conclua um hábito** do projeto depois dessa vitória.
5. Se houver cofre elegível, a conclusão libera **um único Elixir**, seguindo a ordem dos chefões.
6. Consulte a frase na coleção e utilize as opções de **copiar** ou **compartilhar**, quando disponíveis.

### Regras da coleção

- **Um hábito concluído libera, no máximo, um Elixir.**
- **Derrotar um chefão não abre automaticamente seu cofre.**
- Conclusões anteriores à vitória não são reaproveitadas automaticamente para liberar cofres futuros.
- O vínculo entre recompensa e registro é mantido no projeto.
- Excluir o registro que concedeu a recompensa pode **revogá-la**.
- Se o chefão deixar de estar derrotado após alterações no tempo, a recompensa correspondente poderá deixar de ser válida.
- Projetos diferentes possuem coleções diferentes.

**Compartilhar:** quando o dispositivo oferecer a API de compartilhamento, o aplicativo pode abrir o menu nativo. Em outros contextos, use a opção de copiar a frase. O suporte depende do navegador.

**Atenção:** os **Elixires Ativos** da página Hábitos são os hábitos equipados; os **Elixires colecionáveis** são as frases obtidas com os cofres. São recursos relacionados, mas não idênticos.

<a id="17-visao-o-foguete-revelado-por-elixires"></a>

## 17. Visão: o foguete revelado por Elixires

A página **Visão**, logo abaixo de **Elixires** no menu, apresenta a imagem `ImpulsoVision.svg` de um foguete decolando. A imagem é dividida em **200 quadradinhos (20 colunas por 10 linhas)**, inicialmente ocultos.

Cada **Elixir colecionável** conquistado e válido no **Altar dos Elixires** concede **uma revelação disponível**. Os 200 Elixires colecionáveis estão vinculados aos cofres dos chefões; não se confundem com os 200 hábitos sugeridos no inventário. O usuário decide quando utilizá-la: basta abrir **Visão**, tocar em um quadradinho ainda oculto e confirmar. A parte correspondente da imagem fica visível permanentemente. É possível acumular revelações sem gastá-las imediatamente.

A aba **Histórico**, dentro de **Visão**, apresenta uma linha do tempo das revelações feitas a partir da versão 67, com data e hora, número do quadradinho e crédito de Elixir associado. Os quadradinhos descobertos em versões anteriores continuam revelados, mas são identificados como **revelações anteriores** sem data ou vínculo inventado. Se um registro que sustentava um Elixir for excluído, o histórico mantém a revelação e sinaliza que o vínculo não está mais válido. O histórico é individual por projeto e faz parte dos backups JSON.

A página mostra o número de Elixires conquistados, o saldo de revelações, os quadradinhos já revelados e a porcentagem descoberta. O progresso pertence exclusivamente ao projeto atual e é salvo em `localStorage`, incluído nos backups e restaurações do projeto. A imagem SVG faz parte do cache offline do PWA. Como os dados são locais, recomenda-se fazer um **Backup Geral** após conquistar ou revelar novas partes da Visão.

**Importante:** a concessão de uma revelação segue a mecânica real dos Elixires do Impulso: é necessário derrotar o chefão correspondente e concluir um hábito para abrir o cofre. Equipar um hábito, por si só, não concede revelação. Se um registro for excluído e seu Elixir deixar de ser válido, as partes já reveladas continuam visíveis, mas o saldo para novas escolhas é recalculado a partir dos Elixires válidos.

<a id="18-guardar-exportar-importar-e-restaurar"></a>

## 18. Guardar, exportar, importar e restaurar

Os arquivos de segurança utilizam o formato **JSON**. O Impulso oferece operações diferentes, que não devem ser confundidas.

| Operação | Abrangência | Efeito |
|---|---|---|
| **Guardar / Backup Geral** | Todos os projetos | Solicita download de um JSON com o conjunto de dados do aplicativo. |
| **Exportar projeto** | Um projeto | Gera um JSON contendo somente o projeto selecionado. |
| **Importar projeto** | Um projeto | Lê um arquivo de projeto e o incorpora conforme o fluxo de importação. |
| **Restaurar** | Todos os projetos | **Substitui os projetos atuais** pelos dados do Backup Geral após confirmação. |

### Como fazer um Backup Geral

1. Abra **Guardar** no menu.
2. Aguarde a solicitação de download.
3. Confira se o arquivo `impulso-backup-...json` realmente apareceu na pasta de downloads.
4. Copie o arquivo para outro local confiável, preferencialmente fora do aparelho.
5. Mantenha mais de uma cópia datada.

**O botão Guardar não envia nada automaticamente para a nuvem.** O navegador controla o download; o aplicativo não consegue garantir que você guardou o arquivo.

### Como restaurar

1. **Faça primeiro um backup dos dados atuais.**
2. Escolha **Restaurar** e selecione um arquivo de **Backup Geral** compatível.
3. Leia o aviso de substituição integral.
4. Confirme somente se deseja trocar os projetos atuais pelo conteúdo do arquivo.
5. Verifique os projetos, registros e hábitos após a operação.

**Nunca use Restaurar para importar um único projeto.** A restauração geral rejeita arquivos de projeto individual. Os arquivos passam por validações de estrutura e tamanho; isso não dispensa verificar o conteúdo após importar.

### Quando fazer backup

Recomenda-se guardar uma cópia **ao final de sessões importantes**, antes de atualizar ou reinstalar o PWA, antes de excluir registros ou projetos, antes de limpar dados do navegador e antes de trocar de dispositivo. O alerta opcional pode ajudar, mas não faz backup automaticamente.

<a id="19-impressao-e-relatorios"></a>

## 19. Impressão e relatórios

A opção **Imprimir** prepara um relatório do projeto ativo e abre a função de impressão do navegador. Conforme o fluxo, é possível imprimir a **lista de projetos** e relatórios de um **dia específico**.

Os relatórios apresentam dados como **nome do projeto**, **data de emissão**, **tempo acumulado**, **registros**, **início**, **término** e **totais por dia**. Os títulos diários seguem **Meu Dia dd-mm-aaaa**. Atividades que atravessam a meia-noite são distribuídas entre as datas sem duplicar o tempo total.

### Salvar em PDF

Na janela de impressão, escolha **Salvar como PDF** se o navegador oferecer essa opção. Confira margens, orientação, quebras de página e horários na pré-visualização antes de salvar ou imprimir.

**Importante:** imprimir não cria backup restaurável. O PDF serve para consulta e documentação; o **JSON** serve para restaurar os dados no aplicativo.

<a id="20-alertas-lembretes-opcionais"></a>

## 20. Alertas: lembretes opcionais

A página **Alertas** (painel de alertas) oferece dois lembretes independentes, inicialmente desativados:

**Alerta de backup:** a cada **15 minutos de uso**, quando habilitado, recomenda guardar uma cópia dos projetos. A mensagem explica que o armazenamento do navegador pode ser perdido. É possível iniciar o backup pelo aviso ou dispensá-lo.

**Alerta de hábitos e Elixires:** também em intervalos de **15 minutos**, quando habilitado, lembra o usuário de praticar hábitos e oferece acesso à página **Hábitos**.

As opções são controladas por **caixas de seleção** e ficam salvas no navegador. Os alertas são **locais**, não são notificações push do sistema e dependem de a página estar aberta e visível. Se o navegador suspender a aba, o aviso poderá atrasar. Não há backup automático nem execução de hábitos em segundo plano.

<a id="21-armazenamento-saude-dos-dados"></a>

## 21. Armazenamento: saúde dos dados

A página **Armazenamento** é um **Monitor de Armazenamento Local**, não um medidor de RAM. Ela consulta informações que o navegador permite acessar e apresenta estimativas úteis para acompanhar o crescimento dos projetos.

### Indicadores

1. **Uso estimado da origem:** quantidade aproximada de armazenamento ocupada pelo site, informada por `navigator.storage.estimate()`.
2. **Cota estimada:** limite de armazenamento indicado pelo navegador para a origem; não representa o espaço livre físico do aparelho.
3. **Dados do Impulso:** tamanho estimado dos dados principais do aplicativo em `localStorage`.
4. **Armazenamento local total:** soma aproximada das chaves e valores do `localStorage` da origem.
5. **Cache offline:** tamanho aproximado dos recursos presentes no Cache Storage acessível ao aplicativo.
6. **Backup Geral estimado:** tamanho aproximado do JSON que seria produzido naquele momento.

O painel também pode exibir **distribuição por projeto**, **porcentagem estimada de uso da cota**, **estado da persistência**, **última solicitação de download de Backup Geral** e **botão Atualizar medições**.

### Persistência

O navegador pode permitir solicitar armazenamento persistente. Se concedido, isso **reduz alguns riscos de remoção automática**, mas não protege contra limpeza manual dos dados, desinstalação, troca de aparelho ou outros eventos. A solicitação pode ser negada sem indicar defeito no aplicativo.

### Como interpretar corretamente

- O uso total estimado pode **já incluir** cache e armazenamento local; **não some** os indicadores como se fossem parcelas independentes.
- Alguns navegadores não oferecem todas as APIs; nesses casos, a informação pode aparecer como **Não disponível**.
- O tamanho de um projeto é uma aproximação baseada na serialização de seus dados.
- A data do último backup significa **download solicitado**, não confirmação de arquivo salvo.
- O painel não exclui registros nem executa limpeza automática.

<a id="22-configuracao-paletas-e-aparencia"></a>

## 22. Configuração: paletas e aparência

A página **Configuração** permite escolher a **identidade visual** e, independentemente, a **aparência clara ou escura**. Existem sete identidades, totalizando **quatorze combinações**:

| Identidade | Característica | Cores de referência |
|---|---|---|
| **Impulso Original** | Aparência clássica do aplicativo | Cores tradicionais do projeto. |
| **Impulso Vinho** | Harmonia Itten com magenta, roxo e rosa | `#940065`, `#87008A`, `#FF3377`. |
| **Impulso Blue Sky** | Harmonia análoga turquesa–azul | `#00C7B0`, `#007BC7`, `#0018C7`. |
| **Impulso Trinity** | Harmonia triádica laranja–verde–roxo | `#FF6B00`, `#00FF6B`, `#6B00FF`. |
| **Impulso Granfino** | Grafite, prata e neutros elegantes | `#1F1F1F`, `#3E3E3E`, `#ADBFC2`. |
| **Impulso Ecológico** | Harmonia análoga verde, com acentos luminosos | `#628000`, `#228000`, `#00801E`, `#C7FF10`. |
| **Impulso Místico** | Harmonia análoga roxo–magenta, com superfícies profundas | `#34187C`, `#66187C`, `#7C1860`, `#160A33`. |

As paletas possuem superfícies próprias para cada modo de aparência. Granfino combina grafite e prata; Ecológico utiliza fundos verde-escuros profundos e tons de verde-limão para realces. As folhas de estilo específicas definem tokens cromáticos, contrastes e a identidade do splash.

### Alterar o visual

1. Abra **Configuração**.
2. Escolha uma das sete identidades: **Original**, **Vinho**, **Blue Sky**, **Trinity**, **Granfino**, **Ecológico** ou **Místico**.
3. Selecione **Claro** ou **Escuro**, ou use o controle correspondente no cabeçalho.
4. Navegue pelas páginas para conferir a aparência escolhida.

A escolha é salva **neste navegador** e não altera os dados dos projetos. Para voltar à identidade anterior, basta selecioná-la novamente; não é necessário restaurar um backup.

### Tokens de Itten — Granfino, Ecológico e Místico

**Granfino:** `--itten-primary: #1F1F1F`; `--itten-secondary: #3E3E3E`; `--itten-accent: #616161`. A extensão cromática inclui `#808080`, `#3B2B2B`, `#48614F`, `#786487`, `#A6A287`, `#ADBFC2`, `#3B2B34`, `#4E6148` e `#656487`.

**Ecológico:** `--itten-primary: #628000`; `--itten-secondary: #228000`; `--itten-accent: #00801E`. Os tokens `--itten-color-4` a `--itten-color-12` correspondem, respectivamente, a `#2F3D00`, `#103D00`, `#003D0E`, `#99C700`, `#35C700`, `#00C72F`, `#C7FF10`, `#4FFF10` e `#10FF48`.

**Místico:** `--itten-primary: #34187C`; `--itten-secondary: #66187C`; `--itten-accent: #7C1860`. Os tokens `--itten-color-4` a `--itten-color-12` correspondem a `#1B0C40`, `#350C40`, `#400C32`, `#4D24B8`, `#9724B8`, `#B8248E`, `#160A33`, `#2A0A33` e `#330A28`. A interface usa texto branco sobre os cards escuros do inventário, e o splash apresenta iluminação roxo–magenta.

Os tokens de cada paleta são definidos em suas folhas CSS e aplicados quando a identidade correspondente está selecionada. O splash **Ignição** também acompanha a escolha: prata no Granfino, verde-limão no Ecológico e roxo–magenta no Místico, mantendo aproximadamente 3,7 segundos de apresentação.

### Acessibilidade das cores

As paletas buscam empregar pares de contraste adequados a textos e controles. Cores vibrantes não devem receber texto branco quando o contraste for insuficiente. Estados importantes, como vitória, erro, cofre aberto e cofre fechado, devem ser comunicados também por **rótulos e símbolos**, não apenas por cor. No Ecológico, superfícies profundas (`#003D0E`, `#103D00`, `#2F3D00`) usam texto branco; superfícies muito luminosas (`#C7FF10`, `#4FFF10`, `#10FF48`) exigem texto preto ou escuro. A interface utiliza rótulos como **Equipar**, **✓ Equipado**, e indicadores textuais de cofres para não depender exclusivamente do verde. No Místico, as superfícies escuras da paleta usam texto branco e estados de Elixires e cofres mantêm rótulos e símbolos além da cor. A conformidade de toda a interface deve ser verificada nas telas reais e nos dispositivos utilizados.

<a id="23-privacidade-integridade-e-limites-tecnicos"></a>

## 23. Privacidade, integridade e limites técnicos

- **Armazenamento local:** os projetos são salvos no navegador, principalmente em `localStorage`.
- **Sem sincronização automática:** abrir o aplicativo em outro navegador, perfil ou aparelho não transfere os dados anteriores.
- **Dados sujeitos à remoção:** limpar dados do site, usar navegação privada ou políticas de limpeza do navegador pode apagar projetos e preferências.
- **Sem conta e sem servidor de registros:** o aplicativo não exige autenticação para os recursos locais descritos.
- **Backups são responsabilidade do usuário:** arquivos JSON guardados externamente são a principal proteção contra perdas.
- **Horário do dispositivo:** registros dependem do relógio e do fuso configurados no aparelho. Se estiverem incorretos, os horários e totais por data também podem ficar incorretos.
- **Limites de armazenamento:** projetos extensos podem esgotar a capacidade disponível; acompanhe o monitor e exporte backups.
- **Não é sistema de ponto oficial:** os relatórios são instrumentos de organização pessoal, não comprovantes certificados.
- **A meta de 10.000 horas é simbólica:** não mede competência nem substitui avaliação de resultados.

<a id="24-solucao-de-problemas"></a>

## 24. Solução de problemas

| Sintoma | O que verificar ou fazer |
|---|---|
| **O aplicativo não abre ou permanece na abertura** | Atualize a página conectado; feche e reabra; confira o console do navegador se souber utilizá-lo. Evite limpar os dados antes de garantir um backup. |
| **Mudanças não aparecem após publicar** | O service worker pode estar servindo arquivos antigos. Recarregue conectado e aguarde a atualização; teste novamente. Não apague o armazenamento local indiscriminadamente. |
| **Projeto desapareceu** | Confirme se está no mesmo navegador, perfil e endereço do site; consulte **Projetos**. Se os dados foram removidos, use um Backup Geral confiável. |
| **Ponto não parece contar** | Verifique se a sessão está iniciada, se o relógio do aparelho está correto e se há um projeto ativo. Volte à página Ponto para conferir o estado. |
| **Tempo total parece menor que a soma das linhas** | Intervalos sobrepostos são consolidados para evitar dupla contagem. Confira as datas e os horários. |
| **Atividade aparece em dois dias** | É esperado quando atravessa a meia-noite; o tempo é dividido, mas o registro não é duplicado. |
| **Não consigo equipar outro hábito** | O limite é de **6 Elixires Ativos**. Desequipe um hábito para liberar vaga. |
| **Hábito não aparece no Inventário** | Revise a pesquisa e o filtro de categoria. O catálogo precisa ter sido carregado no cache para funcionar offline. |
| **Chefão derrotado, mas cofre fechado** | Conclua um hábito **depois** da vitória; derrotar o chefão sozinho não libera a frase. |
| **Elixir desapareceu** | Confira se o registro de hábito foi excluído ou se o tempo acumulado diminuiu após alterações. |
| **Alerta não apareceu** | Confira se foi habilitado, se já se passaram 15 minutos e se a página estava aberta e visível. |
| **Medição de armazenamento indisponível** | O navegador pode não oferecer a API necessária ou pode restringi-la. Não é uma leitura simulada. |
| **Persistência negada** | A decisão é do navegador. Continue guardando backups externos. |
| **Backup não está na pasta de downloads** | Verifique permissões e bloqueios de download. O aplicativo registra apenas a solicitação; repita a exportação e confirme o arquivo. |
| **Restaurar apagaria projetos atuais** | Cancele. Faça primeiro um backup atual e só restaure quando desejar substituir a coleção inteira. |
| **Tema não ficou como esperado** | Abra **Configuração**, escolha outra identidade e alterne claro/escuro. Se necessário, atualize a página após o cache ser renovado. |
| **Impressão cortada** | Use a pré-visualização, ajuste margens, escala e orientação ou salve em PDF. |

<a id="25-perguntas-frequentes"></a>

## 25. Perguntas frequentes

**Preciso criar uma conta?** Não. O uso descrito neste manual é local ao navegador.

**Posso trabalhar em vários projetos?** Sim. Cada projeto tem registros, hábitos, chefões e recompensas próprios.

**O Ponto continua quando abro outra tela?** A sessão permanece registrada e pode ser retomada na página Ponto. Confira seu estado após interrupções do navegador.

**Posso registrar trabalho de ontem?** Sim, pela Entrada Manual, com data e horário corretos.

**O que acontece quando trabalho atravessa a meia-noite?** O registro é mantido, e o tempo é distribuído entre os dias correspondentes.

**Os hábitos contam como registros?** Sim, hábitos concluídos geram registros próprios e aparecem em Meu Dia.

**Quantos hábitos posso equipar?** Até **seis** por projeto.

**O catálogo precisa de internet?** Depois que o arquivo do catálogo estiver armazenado no cache offline, pode ser consultado sem conexão.

**Como ganho um Elixir?** Derrote um chefão com tempo de trabalho e, depois, conclua um hábito para abrir um cofre elegível.

**Uma conclusão abre todos os cofres disponíveis?** Não. No máximo um cofre por conclusão.

**Posso perder um Elixir?** Sim, se excluir o registro que o concedeu ou reduzir a progressão que sustentava a vitória.

**O que significa HP?** *Hit Points*: pontos de resistência do chefão na representação RPG.

**O que é a meta de maestria?** Um marco simbólico de 10.000 horas acumuladas, sem certificação profissional.

**Guardar é igual a Restaurar?** Não. Guardar gera um arquivo; Restaurar lê um Backup Geral e substitui os projetos atuais após confirmação.

**O monitor mostra memória RAM?** Não. Mostra estimativas de armazenamento do site.

**A paleta muda meus dados?** Não. A identidade visual é uma preferência independente dos projetos.

**Posso usar sem internet?** Sim, quando os recursos essenciais já estiverem no cache e o navegador os conservar.

**Se instalar em outro celular, os projetos aparecem?** Não automaticamente. É necessário transferir e importar/restaurar um arquivo compatível.

<a id="26-roteiro-de-testes"></a>

## 26. Roteiro de testes

Use esta lista após publicar ou atualizar o aplicativo. Prefira um projeto de teste e **faça backup antes de testar exclusões ou restaurações**.

### Navegação e projetos

- [ ] Abrir o site, observar a Ignição por aproximadamente 3,7 segundos e passar à interface.
- [ ] Testar a abertura com movimento reduzido, com as sete paletas e após atualizar o cache.
- [ ] Conferir Estatísticas no projeto atual e na visão global, com diferentes períodos, exportação JSON e impressão.
- [ ] Abrir e fechar o menu; conferir os seis grupos e a ordem dos itens.
- [ ] Criar dois projetos, renomear um e confirmar que os dados são independentes.
- [ ] Abrir **Sobre** e conferir os links.

### Trabalho e registros

- [ ] Iniciar um Ponto, navegar por outras páginas, voltar e concluí-lo.
- [ ] Lançar uma Entrada Manual com início e término no mesmo dia.
- [ ] Lançar outra Entrada Manual atravessando a meia-noite.
- [ ] Conferir os títulos **Meu Dia dd-mm-aaaa**, os horários e a divisão dos totais.
- [ ] Conferir o Histórico e o comportamento de intervalos sobrepostos.

### Hábitos, Arena e Elixires

- [ ] Pesquisar hábitos, filtrar categorias e equipar até seis.
- [ ] Desequipar e criar um hábito personalizado.
- [ ] Iniciar, pausar, retomar e concluir um Pomodoro.
- [ ] Conferir o registro de hábito em Meu Dia.
- [ ] Abrir Radar e verificar o tempo e a meta.
- [ ] Abrir Cerimônias, conferir o desbloqueio por horas reais, rever uma conquista, fechar com Esc, verificar os bloqueios e o modo de movimento reduzido.
- [ ] Consultar as 10 fases e os 200 chefões da Arena.
- [ ] Consultar uma ficha de chefão vencido no Codex.
- [ ] Derrotar um chefão, concluir um hábito e verificar o cofre e a frase.
- [ ] Testar copiar/compartilhar, conforme o suporte do navegador.
- [ ] Em projeto de teste, excluir um registro associado a um Elixir e verificar a consequência.

### Segurança, aparência e documentos

- [ ] Gerar Backup Geral e confirmar o arquivo JSON salvo.
- [ ] Exportar e importar um projeto individual.
- [ ] Restaurar um Backup Geral **somente em ambiente de teste**.
- [ ] Imprimir relatório de projeto, de dia e lista de projetos.
- [ ] Ativar e desativar os dois alertas; conferir seu comportamento com a página visível.
- [ ] Abrir Armazenamento, atualizar medições e verificar a indicação de persistência.
- [ ] Testar **Impulso Original, Vinho, Blue Sky e Trinity**, em claro e escuro.
- [ ] Conferir legibilidade, foco de teclado, controles, ícones e rótulos em cada tema.
- [ ] Testar no celular, no desktop e sem internet após o cache inicial.

<a id="27-arquivos-do-projeto"></a>

## 27. Arquivos do projeto

| Arquivo | Finalidade |
|---|---|
| `index.html` | Estrutura principal, navegação, controles e tela de abertura. |
| `styles.css` | Estilos gerais, responsividade e aparência Original. |
| `theme-impulso.css` | Identidade **Impulso Vinho**. |
| `theme-impulso-analogo.css` | Identidade **Impulso Blue Sky**. |
| `theme-impulso-triadico.css` | Identidade **Impulso Trinity**. |
| `app.js` | Navegação, projetos, cronômetros, registros, progressão, Elixires, armazenamento, backups e configurações. |
| `habitos_elixires_v2.json` | Catálogo offline de 200 sugestões de hábitos. |
| `manifest.json` | Metadados de instalação do PWA. |
| `sw.js` | Registro de recursos essenciais para cache e uso offline. |
| `README.md` | Este manual do usuário. |
| `LICENSE` | Licença do projeto. |
| `logo.svg`, `logo.png` | Identidade visual e documentação. |
| `ImpulsoCover.png`, `ImpulsoApp.png` | Imagens de apresentação do projeto. |
| `icon-192.png`, `icon-512.png` | Ícones do aplicativo. |
| `rocket-192-v11.png`, `rocket-512-v11.png` | Recursos gráficos do foguete. |

| `theme-impulso-granfino.css` | Identidade **Impulso Granfino**. |
| `theme-impulso-ecologico.css` | Identidade **Impulso Ecológico**. |
| `ImpulsoVision.svg` | Imagem da página Visão, revelada em 200 quadradinhos. |

<a id="28-glossario"></a>

## 28. Glossário

**Arena:** campanha gamificada de desafios associados ao tempo trabalhado.  
**Backup Geral:** arquivo JSON com todos os projetos.  
**Cache offline:** cópias de arquivos do aplicativo mantidas pelo navegador para uso sem rede.  
**Chefão:** adversário simbólico derrotado ao atingir um marco de tempo.  
**Codex:** coleção de fichas dos adversários da Arena.  
**Cofre:** recompensa associada a um chefão derrotado, aberta mediante conclusão de hábito elegível.  
**Elixir:** frase colecionável liberada pelo sistema de recompensas.  
**Elixir Ativo:** hábito equipado para execução na página Hábitos.  
**Visão:** imagem do foguete, descoberta por escolhas do usuário com créditos obtidos de Elixires colecionáveis.  
**HP:** pontos de resistência do chefão.  
**Inventário de Elixires:** catálogo de sugestões de hábitos.  
**JSON:** formato de arquivo usado para exportação, importação e backups.  
**LocalStorage:** armazenamento local do navegador utilizado para dados do aplicativo.  
**Ponto:** ferramenta de cronometragem de uma atividade real.  
**Pomodoro:** temporizador associado à prática de um hábito.  
**PWA:** aplicativo web com recursos de instalação e funcionamento offline, conforme suporte do navegador.  
**Radar:** visualização do tempo acumulado e da meta de longo prazo.  
**Service worker:** recurso do navegador que gerencia o cache offline do aplicativo.  
**Tema:** combinação entre identidade cromática e aparência clara ou escura.  
**Ignição:** abertura cinematográfica com foguete, anel energético e revelação do nome.  
**Estatísticas:** central de indicadores por projeto ou consolidados globalmente.

---

**Impulso — Motor de Produtividade Pessoal.**  
*A constância começa com um pequeno impulso.*



### Correção de reprodução — Impulso 62

A reprodução de uma cerimônia agora reinicia as animações dentro do mesmo diálogo, sem fechar e reabrir a janela. A apresentação mantém suas dimensões ao repetir. Se o dispositivo estiver configurado para reduzir movimento, a animação é suprimida por acessibilidade, mas os textos e a conquista permanecem visíveis.


### Correção de controles — Impulso 63

A janela de Cerimônias usa um único diálogo. Os botões **Fechar cerimônia** e **Reproduzir novamente** são atendidos por eventos delegados no próprio diálogo, inclusive após qualquer atualização do conteúdo. A reprodução reinicia as animações CSS sem substituir os elementos nem alterar as dimensões da janela. O sistema respeita a preferência de acessibilidade **reduzir movimento**, que pode tornar a apresentação estática.


### Cerimônias — reprodução e acessibilidade (versão 64)

As cerimônias são animações CSS executadas no próprio navegador. Ao abrir uma cerimônia, a sequência inicia automaticamente, salvo quando o sistema solicita **movimento reduzido**. Nesse caso, a apresentação permanece estática e aparece o botão **Ativar animação nesta cerimônia**, que permite consentir com os efeitos somente naquela visualização. **Reproduzir novamente** reinicia os efeitos sem fechar o diálogo. **Fechar cerimônia** permanece disponível.


### Cerimônias — janela sem barras de rolagem (versão 65)

A janela de cerimônia agora utiliza dimensões limitadas pela área visível do navegador e não exibe barras de rolagem internas. O conteúdo é organizado com espaçamentos compactos e, quando necessário, reduzido proporcionalmente para caber na tela, incluindo o aviso de movimento reduzido e os três controles. A animação e a opção de reprodução voluntária são preservadas. Em telas extremamente pequenas, o conteúdo pode ficar menor para permanecer integralmente visível.


### Navegação hierárquica — Impulso 66

O menu principal apresenta **Início**, **Ações**, **Vitórias**, **Dados**, **Configurações** e **Sair**. Ao selecionar um dos quatro primeiros grupos, abre-se o respectivo submenu:

- **Início:** Novo, Projetos, Guardar, Restaurar e Imprimir. O painel inicial permanece disponível ao abrir um projeto.
- **Ações:** Ponto, Hábitos e Entradas.
- **Vitórias:** Arena, Codex, Elixires, Cerimônias e Visão.
- **Dados:** Meu Dia, Radar, Estatísticas e Armazenamento.
- **Configurações:** reúne os **Temas** (sete identidades cromáticas e luminosidade) e os **Alertas** (backup e hábitos/Elixires) na mesma página. O botão Alertas foi retirado do menu, mas seus controles e preferências foram preservados.
- **Sair:** mantém a confirmação e o comportamento anteriores.

O submenu é expansível, compatível com teclado e indica se está aberto. Os registros, as conquistas e os backups não são modificados pela reorganização.


## Sessões de Foco (versão 71)

No menu **Ações → Foco**, configure uma atividade (até 50 caracteres), um objetivo (até 200), o tipo de compromisso (**Entrega** ou **Dedicação**) e a duração planejada (1–1440 minutos). Inicie a sessão, pause e retome quando necessário e, ao concluir, avalie se o objetivo foi alcançado integralmente, parcialmente ou não alcançado. Uma observação opcional de até 200 caracteres pode registrar o aprendizado.

O tempo efetivo é calculado pelos intervalos de atividade, excluindo pausas. A sessão permanece salva no projeto ao navegar entre páginas ou reabrir o PWA. Ao concluir, os intervalos entram no motor de tempo do projeto, no Meu Dia, no Calendário e no Histórico, sem duplicação de intervalos sobrepostos. O histórico específico de Foco mostra as 50 sessões mais recentes, com duração planejada, efetiva e avaliação. Os backups gerais e individuais preservam os registros e sessões em andamento.

**Interpretação:** ultrapassar a duração prevista não é considerado vitória automática. O aplicativo apresenta o desvio de tempo e a avaliação do objetivo separadamente. Sessões de Foco e Ponto não podem ser iniciadas simultaneamente; conclua a sessão ativa antes de iniciar outra. Como o funcionamento é local, mantenha backups regulares.

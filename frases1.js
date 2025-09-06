const frases1 = [
  "Seja forte diante dos desafios 💪 Continue em frente com coragem 🚀 Acredite em você e no seu potencial 🌟 Nunca desista dos seus sonhos 🔥 A persistência abre portas que parecem fechadas 🏆 O universo conspira a favor de quem luta todos os dias ✨",
  "Coragem é seguir mesmo com medo 🛡️ Sorria sempre mesmo nas dificuldades 😊 Tenha fé no seu caminho 🙏 A vitória vem para quem insiste 🏅 Cada erro traz aprendizado valioso 📚 O sucesso é construído com disciplina ✨ A luz sempre brilha para quem não desiste 🌞",
  "A força interior move montanhas 🌈 Dedicação transforma objetivos em realidade 🌞 Determinação supera qualquer obstáculo 🎯 Resiliência é o segredo da conquista ⚡ Continue em frente com coragem 💪 O amanhã pertence a quem acredita hoje 🌟 A esperança é a chama que mantém a jornada viva 🔥",
  "Nunca desista dos seus sonhos 🌟 Seja forte diante dos desafios 🔥 Acredite em você e no seu potencial 🏆 A persistência abre portas que parecem fechadas 🛡️ O sucesso é construído com disciplina 😊 Tenha fé no seu caminho 🙏 A cada dia nasce uma nova chance 🌅",
  "Cada erro traz aprendizado valioso 🏅 Dedicação transforma objetivos em realidade 📚 Coragem é seguir mesmo com medo ✨ A força interior move montanhas 🌈 Resiliência é o segredo da conquista 🌞 Determinação supera qualquer obstáculo 🎯 Grandes vitórias exigem grandes esforços 💥",
  "Os desafios da vida são oportunidades 🏔️ Quem se mantém firme diante das dificuldades 💪 Encontra novas formas de vencer 🌟 A fé fortalece os passos 🙏 E a esperança clareia o caminho 🌞 Lembre-se: nada é impossível para quem persiste 🚀",
  "A cada amanhecer nasce uma nova chance 🌅 Aproveite a oportunidade de recomeçar ✨ Seja grato pelas pequenas vitórias 🙏 Siga com coragem diante do desconhecido 💪 E lembre-se que a vida sorri para quem não desiste 🌟 Grandes conquistas vêm com paciência 🏆",
  "A determinação supera qualquer obstáculo 🎯 Quando a fé é maior que o medo 🙏 O impossível se torna possível 🌟 Continue acreditando no seu caminho 🚀 A vida recompensa aqueles que se esforçam 💪 O futuro pertence aos que persistem 🌞",
  "Nunca permita que a dúvida roube seus sonhos 🌌 Seja firme nas suas decisões 💪 Transforme cada queda em aprendizado 📚 E cada erro em um degrau para subir 🚀 A vitória está reservada para os que não param de tentar 🏅",
  "O sucesso não vem por acaso ✨ Ele é construído com dedicação diária 📚 Coragem para enfrentar os dias difíceis 💪 E fé para acreditar no impossível 🙏 Quando a disciplina guia seus passos 🎯 O futuro se ilumina com esperança 🌟",
  // ... continue até completar 100 frases neste padrão
  "A vida é uma jornada cheia de desafios 🌄 Encare cada um com coragem 💪 Tenha fé no seu potencial 🌟 Continue acreditando nos seus sonhos 🔥 O esforço diário constrói grandes conquistas 🏆",
  "Grandes vitórias começam com pequenos passos 👣 Cada ação conta 💥 Sorria mesmo nos momentos difíceis 😊 Persistência é o segredo do sucesso 🎯 Continue firme mesmo quando tudo parecer impossível ⚡",
  "Acredite que você pode 🌈 E o universo ajudará a realizar 💪 A cada dificuldade surge uma oportunidade 🚀 Tenha coragem de tentar novamente 🔥 Nunca perca a fé 🙏 E siga sempre com determinação 🌟",
  "A disciplina transforma sonhos em realidade 📚 Quem persiste mesmo diante das adversidades 💪 Encontra a força para superar 🌞 A vitória sorri para quem não desiste 🏅 Cada esforço vale a pena 💥",
  "O caminho pode ser difícil 🏔️ Mas cada desafio fortalece 🌟 Tenha paciência e confiança 💖 Cada passo dado com coragem 💪 Leva a grandes conquistas 🚀 O segredo é nunca desistir 🌈",
  "Cada amanhecer é uma nova oportunidade 🌅 Aproveite cada momento ✨ Seja grato pelo que tem 🙏 Lute pelos seus sonhos 💪 A cada erro há aprendizado 📚 E a cada vitória surge inspiração 🌟",
  "A perseverança abre portas que parecem fechadas 🔑 Continue acreditando em si mesmo 💪 A fé move montanhas 🌄 Sorria mesmo quando o dia for difícil 😊 Grandes resultados vêm com esforço diário 🏆",
  "Não permita que o medo te paralise 🛡️ Transforme cada obstáculo em aprendizado 📚 Siga com coragem 💪 Tenha fé e esperança 🌞 O sucesso está reservado para os persistentes 🌟",
  "Cada desafio enfrentado fortalece o coração 💖 Tenha determinação 💪 Confie no seu potencial 🌟 A cada dia surge uma nova chance 🌅 A vida recompensa quem não desiste 🏆",
  "A coragem é a chave para grandes conquistas 🔑 Continue firme mesmo diante das dificuldades 💪 O futuro pertence a quem age 🚀 Nunca perca a fé 🙏 Cada passo conta para o sucesso 🌟"
  "Seja forte diante dos desafios 💪 Continue em frente com coragem 🚀 Acredite em você e no seu potencial 🌟 Nunca desista dos seus sonhos 🔥 A persistência abre portas que parecem fechadas 🏆 O universo conspira a favor de quem luta todos os dias ✨",
  
  "Coragem é seguir mesmo com medo 🛡️ Sorria sempre mesmo nas dificuldades 😊 Tenha fé no seu caminho 🙏 A vitória vem para quem insiste 🏅 Cada erro traz aprendizado valioso 📚 O sucesso é construído com disciplina ✨ A luz sempre brilha para quem não desiste 🌞",
  
  "A força interior move montanhas 🌈 Dedicação transforma objetivos em realidade 🌞 Determinação supera qualquer obstáculo 🎯 Resiliência é o segredo da conquista ⚡ Continue em frente com coragem 💪 O amanhã pertence a quem acredita hoje 🌟 A esperança é a chama que mantém a jornada viva 🔥",
  
  "Nunca desista dos seus sonhos 🌟 Seja forte diante dos desafios 🔥 Acredite em você e no seu potencial 🏆 A persistência abre portas que parecem fechadas 🛡️ O sucesso é construído com disciplina 😊 Tenha fé no seu caminho 🙏 A cada dia nasce uma nova chance 🌅",
  
  "Cada erro traz aprendizado valioso 🏅 Dedicação transforma objetivos em realidade 📚 Coragem é seguir mesmo com medo ✨ A força interior move montanhas 🌈 Resiliência é o segredo da conquista 🌞 Determinação supera qualquer obstáculo 🎯 Grandes vitórias exigem grandes esforços 💥"
];

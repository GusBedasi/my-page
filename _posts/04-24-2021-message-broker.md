---
title: 'WHY DO WE USE MESSAGE BROKERS?'
data: '24/04/2021'
excerpt: 'O assunto hoje é message brokers e porque são importantes.'
---

![](https://media.giphy.com/media/xT1Ra12a03lcpJf5C0/giphy.gif)

Para que servem os messages brokers?
======

A resposta para essa pergunta é simples, para melhorar a performance da aplicação.

O uso de message broker permite comunicação assíncrona entre as aplicações, usando o message broker como intermediário, ou seja, as aplicações não falaram diretamente uma com a outra, o que nos dá performance pois podemos criar e ler mensagens (payload, requests ou dados) sem ter que esperar a aplicação processar estes dados, basta joga-los na fila e lê-los só quando estiverem disponíveis para tal.

Exemplo básico com RabbitMQ:
======

Contextualizando como você pode enxergar o RabbitMQ, ele é a caixa de correio e o carteiro, sabe quando nos filmes americanos o pessoal coloca a carta na caixa de correio e posteriormente o mailperson(carteiro) passa, recolhe o pacote e depois entrega para o destinatário, basicamente o rabbit é isso.

Producer
======
![](https://media.giphy.com/media/d3g1lkA1srw1c3Di/giphy.gif)

O programa que envia mensagens é o producer(produtor), não significa nada além disso.

Queue
======
![](https://media.giphy.com/media/l0HlGM5d0EhzCW12g/giphy.gif)

A queue é a caixa de correio, ela têm um nome, vários producers e consumers podem enviar e consumir mensagens dessa queue(fila).

Consumer
======
![](https://media.giphy.com/media/5zoHvRtE9CMbez9Dp0/giphy.gif)

O consumer é o programa que recebe as mensagens de uma fila.

Vamos ao código
======

Utilizamos o nuget package RabbitMQ.Client para conectar com o RabbitMQ, criar a fila, publicar e consumir a mesma.

### Send.cs
```
public static void Main(string[] args)
{
  //Configura a instância da conexão a ser criada
  var factory = new ConnectionFactory() 
  { 
      HostName = "localhost"
  };

  //Cria a conexão com o rabbit
  using (var connection = factory.CreateConnection())
  {
      using (var channel = connection.CreateModel())
      {
        //Declara uma fila
        channel.QueueDeclare(queue: "hello",
                            durable: false,
                            exclusive: false,
                            autoDelete: false,
                            arguments: null);

        //Cria uma mensagem para postar na fila
        string message = "Hello World";
        var body = Encoding.UTF8.GetBytes(message);

        //Publica na fila
        channel.BasicPublish(exchange: "",
                            routingKey: "hello",
                            basicProperties: null,
                            body: body);
        
        Console.WriteLine(" [x] Send {0}", message);
      }
      Console.WriteLine("Press [Enter] to exit.");
      Console.ReadLine();
  }
}
```

### Receive.cs
```
public static void Main(string[] args)
{
  //Configura a instância da conexão a ser criada
  var factory = new ConnectionFactory() 
  { 
      HostName = "localhost"
  };
  
  //Cria a conexão com o rabbit
  using (var connection = factory.CreateConnection())
  {
      using (var channel = connection.CreateModel())
      {
          //Declara a fila
          channel.QueueDeclare(queue: "hello",
                              durable: false,
                              exclusive: false,
                              autoDelete: false,
                              arguments: null);

          //Criar o consumer
          var consumer = new EventingBasicConsumer(channel);
          
          //Processa a mensagem baseado no evento de Received
          consumer.Received += (model, ea) =>
          {
              var body = ea.Body.ToArray();
              var message = Encoding.UTF8.GetString(body);
              Console.WriteLine(" [x] Received {0}", message);
          };

          //Define a fila a ser consumida
          channel.BasicConsume(queue: "hello",
                              autoAck: true,
                              consumer: consumer);

          //Printa a mensagem recebida atravez da fila
          Console.WriteLine(" Press [enter] to exit.");
          Console.ReadLine();
      }
  }
}
```

Criado as aplicações, send e receive, onde send cria a mensagem e a envia para a fila e queue escuta a fila e a consome.

Primeiro iniciamos o receive.cs para criação da fila e aguardar a mensagem estar disponível

#### Consuming the message

Podemos ver que a aplicação está esperando(escutando) a fila criada.

![](https://github.com/GusBedasi/my-page/blob/main/public/images/receive-create-queue.PNG?raw=true)

#### Sending the message
Uma vez iniciado ele cria a mensagem e a envia, isso é demonstrado na interface web do rabbit no gráfico, mostrando que houve a entrada de uma mensagem na fila segue imagem:

![](https://github.com/GusBedasi/my-page/blob/main/public/images/send-graph.PNG?raw=true)
